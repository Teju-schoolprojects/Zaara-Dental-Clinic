/* ==========================================================================
   Zaara Dental Clinic - Application Logic
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigation();
  renderServices();
  renderGallery();
  renderReviews();
  renderFAQs();
  renderDoctors();
  initModals();
  initSearchAndFilters();
  initFormHandlers();
});

/* --------------------------------------------------------------------------
   1. Theme Management
   -------------------------------------------------------------------------- */
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const currentTheme = localStorage.getItem('theme') || 'light';
  
  if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    updateThemeIcon(true);
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    updateThemeIcon(false);
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      const newTheme = isDark ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateThemeIcon(!isDark);
      showToast(`Switched to ${newTheme} mode`);
    });
  }
}

function updateThemeIcon(isDark) {
  const icon = document.querySelector('#theme-toggle-btn i');
  if (icon) {
    icon.className = isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
  }
}

/* --------------------------------------------------------------------------
   2. Navigation & Mobile Drawer
   -------------------------------------------------------------------------- */
function initNavigation() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.getElementById('nav-links');

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      const isExpanded = navLinks.classList.toggle('active');
      mobileMenuBtn.innerHTML = isExpanded ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
    });
  }

  // Smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        if (navLinks && navLinks.classList.contains('active')) {
          navLinks.classList.remove('active');
          if (mobileMenuBtn) mobileMenuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
        }
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

/* --------------------------------------------------------------------------
   3. Render Services
   -------------------------------------------------------------------------- */
let activeServiceCategory = 'All';
let currentSearchQuery = '';

function renderServices() {
  const container = document.getElementById('services-grid');
  if (!container) return;

  const filtered = CLINIC_DATA.services.filter(service => {
    const matchesCategory = activeServiceCategory === 'All' || service.category === activeServiceCategory;
    const matchesSearch = service.title.toLowerCase().includes(currentSearchQuery.toLowerCase()) ||
                          service.description.toLowerCase().includes(currentSearchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 0; color: var(--text-muted);">
        <i class="fa-solid fa-magnifying-glass" style="font-size: 2.5rem; margin-bottom: 1rem; color: var(--primary-teal);"></i>
        <p>No services found matching "${currentSearchQuery}".</p>
      </div>
    `;
    return;
  }

  const iconMap = {
    'tooth': 'fa-solid fa-tooth',
    'shield-medicine': 'fa-solid fa-shield-halved',
    'sparkles': 'fa-solid fa-wand-magic-sparkles',
    'stethoscope': 'fa-solid fa-stethoscope',
    'ambulance': 'fa-solid fa-truck-medical',
    'scissors': 'fa-solid fa-scissors',
    'smile': 'fa-solid fa-face-smile',
    'heart-pulse': 'fa-solid fa-heart-pulse'
  };

  container.innerHTML = filtered.map(service => `
    <div class="service-card">
      ${service.popular ? '<span class="popular-tag">Popular Treatment</span>' : ''}
      <div>
        ${service.image ? `
          <div class="service-img-wrapper">
            <img src="${service.image}" alt="${service.title}" loading="lazy">
          </div>
        ` : ''}
        <div class="service-header-row">
          <div class="service-icon">
            <i class="${iconMap[service.icon] || 'fa-solid fa-kit-medical'}"></i>
          </div>
          <h3 class="service-title">${service.title}</h3>
        </div>
        <p class="service-desc">${service.description}</p>
      </div>
      <a href="#appointment" class="service-link open-booking-btn" data-treatment="${service.title}">
        Book Consultation <i class="fa-solid fa-arrow-right"></i>
      </a>
    </div>
  `).join('');

  // Attach click events for booking buttons
  document.querySelectorAll('.open-booking-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const treatment = btn.getAttribute('data-treatment');
      openAppointmentModal(treatment);
    });
  });
}

function initSearchAndFilters() {
  const searchInput = document.getElementById('service-search');
  const filterBtns = document.querySelectorAll('.filter-btn');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearchQuery = e.target.value;
      renderServices();
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeServiceCategory = btn.getAttribute('data-category');
      renderServices();
    });
  });
}

/* --------------------------------------------------------------------------
   4. Gallery & Lightbox
   -------------------------------------------------------------------------- */
let activeGalleryFolder = 'All';

function renderGallery() {
  const container = document.getElementById('gallery-grid');
  const tabsContainer = document.getElementById('gallery-tabs');
  if (!container) return;

  // Render Tabs
  const folders = ['All', 'Interior'];
  if (tabsContainer) {
    tabsContainer.innerHTML = folders.map(folder => `
      <button class="filter-btn ${folder === activeGalleryFolder ? 'active' : ''}" data-folder="${folder}">
        ${folder} (${folder === 'All' ? CLINIC_DATA.photos.length : CLINIC_DATA.photos.filter(p => p.category === folder).length})
      </button>
    `).join('');

    tabsContainer.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', () => {
        activeGalleryFolder = btn.getAttribute('data-folder');
        renderGallery();
      });
    });
  }

  const filteredPhotos = CLINIC_DATA.photos.filter(photo => {
    return activeGalleryFolder === 'All' || photo.category === activeGalleryFolder;
  });

  container.innerHTML = filteredPhotos.map(photo => `
    <div class="gallery-item ${photo.type === 'video' ? 'gallery-item-video' : ''}" data-photo-id="${photo.id}">
      ${photo.type === 'video'
        ? `<video src="${photo.videoUrl}" muted loop autoplay playsinline style="width:100%; height:100%; object-fit:cover;"></video>
           <div class="video-play-badge"><i class="fa-solid fa-play"></i> Play Video</div>`
        : `<img src="${photo.url}" alt="${photo.title}" loading="lazy" />`}
      <div class="gallery-overlay">
        <h4>${photo.title}</h4>
        <p>${photo.caption}</p>
      </div>
    </div>
  `).join('');

  // Add click handler for lightbox
  container.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
      const photoId = item.getAttribute('data-photo-id');
      openLightbox(photoId);
    });
  });
}

function openLightbox(photoId) {
  const photo = CLINIC_DATA.photos.find(p => String(p.id) === String(photoId));
  if (!photo) return;

  const modal = document.getElementById('lightbox-modal');
  const img = document.getElementById('lightbox-img');
  const video = document.getElementById('lightbox-video');
  const title = document.getElementById('lightbox-title');
  const caption = document.getElementById('lightbox-caption');

  if (modal && title && caption) {
    if (photo.type === 'video') {
      if (img) img.style.display = 'none';
      if (video) {
        video.src = photo.videoUrl;
        video.style.display = 'block';
        video.play();
      }
    } else {
      if (video) {
        video.pause();
        video.style.display = 'none';
      }
      if (img) {
        img.src = photo.url;
        img.style.display = 'block';
      }
    }
    title.textContent = photo.title;
    caption.textContent = photo.caption;
    modal.classList.add('active');
  }
}

/* --------------------------------------------------------------------------
   5. Reviews & Ratings
   -------------------------------------------------------------------------- */
function renderReviews() {
  const container = document.getElementById('reviews-grid');
  if (!container) return;

  container.innerHTML = CLINIC_DATA.reviews.map(review => `
    <div class="review-card">
      <div>
        <div class="stars">
          ${'<i class="fa-solid fa-star"></i>'.repeat(Math.max(1, Math.round(review.rating || 0)))}
        </div>
        <p class="review-text">"${review.comment}"</p>
      </div>
      <div class="review-author">
        <div class="author-avatar">${review.author.charAt(0)}</div>
        <div class="author-info">
          <strong>${review.author}</strong>
          <span>Verified Patient • ${review.date}</span>
        </div>
      </div>
    </div>
  `).join('');
}

/* --------------------------------------------------------------------------
   6. FAQ Accordion
   -------------------------------------------------------------------------- */
function renderFAQs() {
  const container = document.getElementById('faqs-wrapper');
  if (!container) return;

  container.innerHTML = CLINIC_DATA.faqs.map((faq, index) => `
    <div class="faq-item ${index === 0 ? 'active' : ''}">
      <div class="faq-question">
        <span>${faq.q}</span>
        <i class="fa-solid fa-chevron-down faq-icon"></i>
      </div>
      <div class="faq-answer">
        <p>${faq.a}</p>
      </div>
    </div>
  `).join('');

  // Attach toggle listener
  container.querySelectorAll('.faq-question').forEach(q => {
    q.addEventListener('click', () => {
      const item = q.parentElement;
      const isActive = item.classList.contains('active');

      // Close other active FAQs
      container.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));

      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

/* --------------------------------------------------------------------------
   6b. Doctors
   -------------------------------------------------------------------------- */
function renderDoctors() {
  const container = document.getElementById('doctors-grid');
  if (!container) return;

  container.innerHTML = CLINIC_DATA.doctors.map(doc => `
    <div class="doctor-card">
      <div class="doctor-avatar-img-wrapper">
        ${doc.image
          ? `<img src="${doc.image}" alt="${doc.name}" class="doctor-img">`
          : `<div class="doctor-initials-avatar">${doc.initials || doc.name.charAt(0)}</div>`}
        <div class="doctor-badge-overlay">
          <h4>${doc.name}</h4>
          <span>${doc.specialization}</span>
        </div>
      </div>
      <div class="doctor-info">
        <h3>${doc.name}</h3>
        <div class="doctor-role">${doc.role}</div>
        <div class="doctor-meta">
          ${doc.rating ? `<span class="doctor-meta-item"><i class="fa-solid fa-star"></i> ${doc.rating} Rating</span>` : ''}
          ${doc.experience ? `<span class="doctor-meta-item"><i class="fa-solid fa-award"></i> ${doc.experience}</span>` : ''}
          ${doc.qualification ? `<span class="doctor-meta-item"><i class="fa-solid fa-graduation-cap"></i> ${doc.qualification}</span>` : ''}
        </div>
        <p class="doctor-bio">${doc.bio}</p>
        <button class="btn btn-primary trigger-booking-modal">
          <i class="fa-solid fa-calendar-check"></i>
          Book Consultation
        </button>
      </div>
    </div>
  `).join('');
}

/* -------------------------------------------------------------------------
   7. Modals & Forms Logic
   -------------------------------------------------------------------------- */
function initModals() {
  // Booking Trigger Buttons
  document.querySelectorAll('.trigger-booking-modal').forEach(btn => {
    btn.addEventListener('click', () => {
      openAppointmentModal();
    });
  });

  // Review Modal Trigger Button
  const reviewModalBtn = document.getElementById('open-review-modal-btn');
  if (reviewModalBtn) {
    reviewModalBtn.addEventListener('click', () => {
      document.getElementById('review-modal').classList.add('active');
    });
  }

  // Close buttons
  document.querySelectorAll('.modal-close-btn, .modal-backdrop').forEach(element => {
    element.addEventListener('click', (e) => {
      if (e.target === element || element.classList.contains('modal-close-btn')) {
        document.querySelectorAll('.modal-backdrop').forEach(m => m.classList.remove('active'));
        const lightboxVideo = document.getElementById('lightbox-video');
        if (lightboxVideo) {
          lightboxVideo.pause();
        }
      }
    });
  });
}

function openAppointmentModal(defaultTreatment = '') {
  const modal = document.getElementById('appointment-modal');
  const treatmentSelect = document.getElementById('appointment-treatment');
  
  if (treatmentSelect && defaultTreatment) {
    for (let i = 0; i < treatmentSelect.options.length; i++) {
      if (treatmentSelect.options[i].value === defaultTreatment || treatmentSelect.options[i].text.includes(defaultTreatment)) {
        treatmentSelect.selectedIndex = i;
        break;
      }
    }
  }
  
  if (modal) {
    modal.classList.add('active');
  }
}

function initFormHandlers() {
  // Appointment Form
  const bookingForm = document.getElementById('appointment-form');
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('appointment-name').value.trim();
      const phone = document.getElementById('appointment-phone').value.trim();
      const treatment = document.getElementById('appointment-treatment').value;
      const date = document.getElementById('appointment-date').value;
      const time = document.getElementById('appointment-time').value;

      if (!name || !phone) {
        showToast('Please enter your name and phone number', 'error');
        return;
      }

      // Close modal & show confirmation toast
      document.getElementById('appointment-modal').classList.remove('active');
      bookingForm.reset();

      showToast(`Appointment requested for ${name} on ${date || 'today'} (${time})! Our team will call ${phone} shortly.`);
    });
  }

  // Review Form
  const reviewForm = document.getElementById('review-form');
  if (reviewForm) {
    reviewForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('review-name').value.trim();
      const comment = document.getElementById('review-comment').value.trim();
      const rating = parseInt(document.getElementById('review-rating').value) || 5;

      if (!name || !comment) {
        showToast('Please fill out all review fields', 'error');
        return;
      }

      CLINIC_DATA.reviews.unshift({
        id: Date.now(),
        author: name,
        date: 'Just Now',
        rating: rating,
        comment: comment
      });

      renderReviews();
      document.getElementById('review-modal').classList.remove('active');
      reviewForm.reset();
      showToast('Thank you for your feedback!');
    });
  }
}

/* --------------------------------------------------------------------------
   8. Toast Notification Utility
   -------------------------------------------------------------------------- */
function showToast(message, type = 'success') {
  let toastContainer = document.getElementById('toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toast-container';
    toastContainer.className = 'toast-container';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <i class="${type === 'success' ? 'fa-solid fa-circle-check' : 'fa-solid fa-triangle-exclamation'}" style="color: var(--primary-teal);"></i>
    <span>${message}</span>
  `;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

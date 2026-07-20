const CLINIC_DATA = {
  name: "Zaara Dental Clinic",
  tagline: "24/7 Advanced Dental Care & Microscope-Assisted Treatment in Madurai",
  rating: "4.5",
  ratingCount: 16,
  established: "",
  openNow: true,
  hoursText: "Open 24 Hours (Mon - Sun)",
  contact: {
    phone: "9047777934",
    formattedPhone: "+91 90477 77934",
    whatsapp: "919047777934",
    email: "",
    address: {
      building: "",
      area: "Munichalai Road",
      landmark: "Opposite Saravana Departmental Store",
      city: "Madurai",
      state: "Tamil Nadu",
      pincode: "625009",
      fullAddress: "Munichalai Road, Near Opposite Saravana Departmental Store, Madurai, Tamil Nadu - 625009"
    },
    geo: {
      lat: 9.9201094,
      lng: 78.1294969
    }
  },
  payments: ["Cash", "UPI (Google Pay, PhonePe, Paytm)", "Credit/Debit Cards"],
  about: {
    summary: "Zaara Dental Clinic in Munichalai Road, Madurai is a premier destination for comprehensive dental services — including 24-hour emergency dental care, microscope-assisted procedures, impacted tooth extraction, ceramic crowns & bridges, fixed implant prostheses, and forensic odontology.",
    fullText: "Zaara Dental Clinic stands as a premier destination for comprehensive dental services in Madurai, offering a wide array of treatments including 24-hour emergency dental care, microscope-assisted dental procedures, impacted tooth extraction, ceramic crowns and bridges fixing, fixed implant prostheses, and forensic odontology. The clinic is equipped with modern facilities and cutting-edge technology, enabling the delivery of advanced dental procedures with precision and efficiency. With a team of highly skilled dental professionals and a commitment to patient-centric care, Zaara Dental Clinic upholds the highest standards of dental care for the diverse needs of its patients."
  },
  doctors: [
    {
      id: "dr-aafaque",
      name: "Dr. Aafaque",
      role: "Orthodontist & Implant Specialist",
      specialization: "Orthodontics & Dentofacial Orthopedics",
      experience: "",
      qualification: "MDS (Ortho & Dentofacial Orthopedics), BDS",
      rating: "4.3",
      initials: "DA",
      bio: "Dr. Aafaque (MDS, 2021; BDS, 2017) is a specialist in orthodontics and dentofacial orthopedics with a focus on braces, clear aligners, and advanced restorative and implant dentistry at Zaara Dental Clinic, Madurai.",
      available: "24/7 On-Call & Regular OPD"
    },
    {
      id: "dr-janani",
      name: "Dr. Janani",
      role: "General Dentist",
      specialization: "General Dentistry",
      experience: "",
      qualification: "BDS (2015)",
      rating: "",
      initials: "DJ",
      bio: "Dr. Janani (BDS, 2015) provides comprehensive general dental care — from preventive check-ups and fillings to extractions and patient education — with a gentle, patient-first approach.",
      available: "Regular OPD"
    }
  ],
  services: [
    { id: "tooth-reshaping", category: "Treatment", title: "Tooth Reshaping", description: "Cosmetic contouring to reshape chipped, uneven, or worn teeth for a balanced, natural smile.", icon: "tooth", image: "images/zaara/tooth-reshaping.jpg", popular: false },
    { id: "wisdom-tooth-extraction", category: "Treatment", title: "Wisdom Tooth Extraction", description: "Safe, comfortable removal of problematic or impacted wisdom teeth under local anaesthesia.", icon: "scissors", image: "images/zaara/wisdom-tooth-extraction.png", popular: true },
    { id: "bleeding-gums", category: "Treatment", title: "Bleeding Gums", description: "Diagnosis and gentle treatment of gum inflammation, bleeding, and early periodontal disease.", icon: "heart-pulse", image: "images/zaara/bleeding-gums.png", popular: false },
    { id: "rct", category: "Treatment", title: "RCT (Root Canal)", description: "Painless root canal therapy to save infected teeth, relieve pain, and preserve your natural smile.", icon: "shield-medicine", image: "images/zaara/rct.jpg", popular: true },
    { id: "straightening-teeth", category: "Treatment", title: "Straightening Teeth", description: "Braces and clear aligner solutions to straighten and align your teeth at any age.", icon: "smile", image: "images/zaara/straightening-teeth.png", popular: false },
    { id: "bps-dentures", category: "Treatment", title: "BPS Dentures Fixing", description: "Precision BPS removable dentures engineered for a secure, natural-looking, comfortable fit.", icon: "tooth", image: "images/zaara/bps-dentures.jpg", popular: false },
    { id: "dental-implant-fixing", category: "Treatment", title: "Dental Implant Fixing", description: "Titanium dental implants to permanently replace missing teeth with full function and aesthetics.", icon: "shield-medicine", image: "images/zaara/dental-implant.png", popular: true },
    { id: "minimal-invasive", category: "Surgery", title: "Minimal Invasive Dentistry", description: "Conservative, tissue-saving techniques that preserve maximum natural tooth structure.", icon: "sparkles", image: "images/zaara/minimal-invasive-dentistry.jpg", popular: false },
    { id: "pulpectomy", category: "Surgery", title: "Pulpectomy", description: "Complete removal of infected pulp for severely damaged primary or permanent teeth.", icon: "shield-medicine", image: "images/zaara/pulpectomy.jpg", popular: false },
    { id: "oral-maxillofacial", category: "Surgery", title: "Oral And Maxillofacial", description: "Surgical care for the mouth, jaws, and surrounding facial structures by trained specialists.", icon: "ambulance", image: "images/zaara/oral-maxillofacial.jpg", popular: false },
    { id: "impacted-tooth-extraction", category: "Procedures", title: "Impacted Tooth Extraction", description: "Expert surgical extraction of deeply impacted teeth with minimal discomfort.", icon: "scissors", image: "images/zaara/impacted-tooth-extraction.jpg", popular: false },
    { id: "fixed-implant-prostheses", category: "Procedures", title: "Fixed Implant Prostheses", description: "Permanent implant-supported crowns and bridges that restore full biting function.", icon: "tooth", image: "images/zaara/fixed-implant-prostheses.jpg", popular: true },
    { id: "dental-prophylaxis", category: "Procedures", title: "Dental Prophylaxis", description: "Professional cleaning and scaling to prevent cavities, stains, and gum disease.", icon: "heart-pulse", image: "images/zaara/dental-prophylaxis.jpg", popular: false },
    { id: "orthodontic-alignment", category: "Procedures", title: "Orthodontic Alignment", description: "Correction of bite and alignment using modern orthodontics and clear aligners.", icon: "smile", image: "images/zaara/orthodontic-alignment.jpg", popular: false },
    { id: "microscope-assisted", category: "Procedures", title: "Microscope Assisted Dental Procedures", description: "Enhanced precision and better outcomes with microscope-guided dental treatment.", icon: "sparkles", image: "images/zaara/microscope-assisted-dental.jpg", popular: true },
    { id: "fixed-prosthodontics", category: "Procedures", title: "Fixed Prosthodontics", description: "Crowns, bridges, and fixed restorations crafted for lasting function and looks.", icon: "tooth", image: "images/zaara/ceramic-crowns-bridges.jpg", popular: false },
    { id: "implant-retained-dentures", category: "Procedures", title: "Implant Retained Dentures", description: "Stable, implant-anchored dentures that stay put — no slipping or adhesive needed.", icon: "tooth", image: "images/zaara/implant-retained-dentures.jpg", popular: false },
    { id: "ceramic-crowns-bridges", category: "Procedures", title: "Ceramic Crowns and Bridges Fixing", description: "Aesthetic, metal-free ceramic crowns and bridges for a seamless, natural smile.", icon: "tooth", image: "images/zaara/ceramic-crowns-bridges.jpg", popular: true },
    { id: "laser-rct", category: "Procedures", title: "Laser RCT (Root Canal)", description: "Advanced laser-assisted root canal for faster, painless healing and disinfection.", icon: "shield-medicine", image: "images/zaara/laser-rct.jpg", popular: true },
    { id: "laser-dentistry", category: "Services", title: "Laser Dentistry", description: "Painless laser treatments for gums, soft tissue, and advanced teeth whitening.", icon: "sparkles", image: "images/zaara/laser-dentistry.jpg", popular: true }
  ],
  photos: [
    { id: "clinic-video-tour", type: "video", url: "images/zaara/zaara-04.jpg", videoUrl: "images/zaara/Generate_a_vedio_for_this_imag.mp4", category: "Interior", title: "Clinic Video Showcase", caption: "3D Video walkthrough of Zaara Dental Clinic operatory and facility." },
    { id: 2, url: "images/zaara/zaara-02.jpg", thumb: "images/zaara/zaara-02.jpg", category: "Interior", title: "Clinic Treatment Room", caption: "Sterile operatory with advanced dental equipment." },
    { id: 4, url: "images/zaara/zaara-04.jpg", thumb: "images/zaara/zaara-04.jpg", category: "Interior", title: "Procedure Room", caption: "Equipped operatory with overhead dental light." },
    { id: 5, url: "images/zaara/zaara-05.jpg", thumb: "images/zaara/zaara-05.jpg", category: "Interior", title: "Patient Care", caption: "Vitals and pre-treatment assessment by our care team." },
    { id: 6, url: "images/zaara/zaara-06.jpg", thumb: "images/zaara/zaara-06.jpg", category: "Interior", title: "Clinic Interior", caption: "Clean, well-maintained clinical space." },
    { id: 7, url: "images/zaara/zaara-07.jpg", thumb: "images/zaara/zaara-07.jpg", category: "Interior", title: "Treatment Bay", caption: "Spacious operatory for advanced procedures." },
    { id: 8, url: "images/zaara/zaara-08.jpg", thumb: "images/zaara/zaara-08.jpg", category: "Interior", title: "Facility View", caption: "A look at our welcoming clinic environment." },
    { id: 9, url: "images/zaara/zaara-09.jpg", thumb: "images/zaara/zaara-09.jpg", category: "Interior", title: "Operatory Setup", caption: "State-of-the-art dental chair and instruments." }
  ],
  reviews: [
    {
      id: 1,
      author: "Sasireka",
      date: "6th April, 2025",
      rating: 1,
      comment: "திறமையற்ற மருத்துவர்கள் பணம் வேஸ்ட் ரேட்டிங் பார்த்து போக கூடாது அவர்கள் கேட்டு வாங்கி தான் 4.5 இருக்கு டோட் டி வேஸ்ட்"
    },
    {
      id: 2,
      author: "User",
      date: "7th November, 2022",
      rating: 0.5,
      comment: "Very worst hospital in Madurai. only money mind and cheap people."
    }
  ],
  faqs: [
    { q: "Is Zaara Dental Clinic open 24 hours for emergencies?", a: "Yes — we operate 24 hours a day, 7 days a week, including all holidays, for urgent dental care and trauma." },
    { q: "Where is Zaara Dental Clinic located in Madurai?", a: "We are on Munichalai Road, opposite Saravana Departmental Store, Madurai, Tamil Nadu - 625009." },
    { q: "Do you perform Root Canal (RCT) and ceramic crowns?", a: "Yes. We specialize in painless RCT (including laser RCT) and ceramic crowns & bridges, often microscope-assisted for precision." },
    { q: "Do you offer dental implants and orthodontic treatment?", a: "Absolutely. We provide dental implant fixing, fixed implant prostheses, and orthodontic alignment (braces & clear aligners)." },
    { q: "What payment methods are accepted at the clinic?", a: "We accept Cash, UPI (Google Pay, PhonePe, Paytm), and all major Debit/Credit Cards." },
    { q: "How can I book an appointment?", a: "Tap 'Book Appointment' above, call +91 90477 77934, or visit the clinic directly — we're open 24/7." }
  ],
  workingHours: {
    monday: "Open 24 Hours",
    tuesday: "Open 24 Hours",
    wednesday: "Open 24 Hours",
    thursday: "Open 24 Hours",
    friday: "Open 24 Hours",
    saturday: "Open 24 Hours",
    sunday: "Open 24 Hours"
  }
};

/* ==========================================================================
   Radiance Dental Studio — Site Interactions
   Content for repeating sections (services, dentists, testimonials, blog,
   promotions, facilities, faqs, before/after, gallery, insurance) and site
   text (hero/about/contact/footer) is fetched from /content/*.json so the
   site stays editable from the Decap CMS admin panel without a rebuild.
   If a fetch fails (e.g. opened directly via file:// instead of a server),
   each section falls back to the defaults baked in below.
   ========================================================================== */

/* ---------------- Fallback content (used only if /content/*.json can't be fetched) ---------------- */
const FALLBACK = {
  site: {
    hero: {
      badge: 'Premium Dental Care Since 2008',
      headlinePrefix: 'Your Smile Deserves',
      headlineHighlight: 'Exceptional Care',
      subheadline: 'Providing world-class dental treatments with compassion, precision, and modern technology — in a space designed for your comfort.',
    },
    about: {
      introText: "For over 16 years, Radiance Dental Studio has combined advanced technology with genuine, personal care — creating a space where every patient feels seen, safe, and confident in their smile.",
      mission: { title: 'Our Mission', text: 'Deliver exceptional, personalized dental care that improves confidence and long-term oral health.' },
      vision: { title: 'Our Vision', text: "To be the region's most trusted name in modern, comfortable, and compassionate dentistry." },
      values: { title: 'Our Values', text: 'Integrity, empathy, precision, and continuous innovation guide everything we do.' },
      facilities: { title: 'Modern Facilities', text: 'State-of-the-art equipment in a calming, spa-inspired environment.' },
      stats: { patientsServed: 18000, yearsExperience: 16, treatmentsCompleted: 42000, satisfactionRate: 99 },
    },
    contact: {
      address: '128 Wellness Avenue, Suite 300, San Francisco, CA 94105',
      phone: '+1 (555) 123-4567',
      mobile: '+1 (555) 987-6543',
      email: 'hello@radiancedental.example',
      hours: 'Mon–Fri: 9AM–6PM · Sat: 9AM–2PM',
      emergencyPhone: '+1 (555) 111-9999',
      parkingNote: 'Free basement parking for all patients',
      mapEmbedUrl: 'https://www.google.com/maps?q=San+Francisco+dental+clinic&output=embed',
    },
    social: { facebook: '#', instagram: '#', tiktok: '#', youtube: '#', messenger: '#', whatsapp: '#' },
    footer: { tagline: 'Premium dental care delivered with compassion, precision, and modern technology.' },
  },
  services: [
    { icon: 'fa-tooth', name: 'General Dentistry', desc: 'Comprehensive checkups and preventive care for lifelong oral health.' },
    { icon: 'fa-brush', name: 'Teeth Cleaning', desc: 'Professional cleaning to remove plaque and keep your smile fresh.' },
    { icon: 'fa-hand-sparkles', name: 'Oral Prophylaxis', desc: 'Deep cleaning treatment to prevent gum disease and decay.' },
    { icon: 'fa-tooth', name: 'Tooth Extraction', desc: 'Gentle, precise extractions performed with modern pain management.' },
    { icon: 'fa-fill-drip', name: 'Fillings', desc: 'Tooth-colored fillings that restore strength and natural appearance.' },
    { icon: 'fa-syringe', name: 'Root Canal Treatment', desc: 'Pain-free root canal therapy to save and protect your natural tooth.' },
    { icon: 'fa-crown', name: 'Dental Crowns', desc: 'Custom crowns crafted to restore function and a natural look.' },
    { icon: 'fa-grip-lines', name: 'Dental Bridges', desc: 'Reliable solutions to replace missing teeth and restore your bite.' },
    { icon: 'fa-teeth', name: 'Dentures', desc: 'Comfortable, natural-looking dentures tailored to your smile.' },
    { icon: 'fa-screwdriver-wrench', name: 'Dental Implants', desc: 'Permanent, natural-feeling replacements for missing teeth.' },
    { icon: 'fa-gem', name: 'Veneers', desc: 'Ultra-thin shells that transform the shape, size, and color of teeth.' },
    { icon: 'fa-sun', name: 'Teeth Whitening', desc: 'Professional whitening for a brighter smile in just one visit.' },
    { icon: 'fa-align-center', name: 'Invisalign', desc: 'Clear, comfortable aligners for a straighter smile — no metal brackets.' },
    { icon: 'fa-teeth-open', name: 'Orthodontics', desc: 'Braces and aligner solutions for patients of every age.' },
    { icon: 'fa-child', name: 'Pediatric Dentistry', desc: 'Gentle, friendly dental care designed especially for kids.' },
    { icon: 'fa-wand-magic-sparkles', name: 'Cosmetic Dentistry', desc: 'Aesthetic treatments to enhance and perfect your natural smile.' },
    { icon: 'fa-tooth', name: 'Wisdom Tooth Removal', desc: 'Safe, comfortable extraction of impacted or problematic wisdom teeth.' },
    { icon: 'fa-kit-medical', name: 'Emergency Dental Care', desc: 'Prompt relief and treatment when dental emergencies strike.' },
    { icon: 'fa-heart-pulse', name: 'Gum Treatment', desc: 'Advanced periodontal therapy to protect gum health.' },
    { icon: 'fa-face-smile-beam', name: 'Smile Makeover', desc: 'A fully personalized plan to design and achieve your dream smile.' },
  ],
  dentists: [
    { name: 'Dr. Amara Reyes', position: 'Lead Cosmetic Dentist', qualifications: 'DDS, Cosmetic & Restorative Dentistry', experienceYears: 14, specializations: 'Veneers · Smile Makeovers', photo: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=500&q=80', instagram: '#', linkedin: '#', facebook: '#' },
    { name: 'Dr. Daniel Cruz', position: 'Orthodontic Specialist', qualifications: 'DMD, Orthodontics', experienceYears: 11, specializations: 'Invisalign · Braces', photo: 'https://images.unsplash.com/photo-1622902046580-2b47f47f5471?auto=format&fit=crop&w=500&q=80', instagram: '#', linkedin: '#', facebook: '#' },
    { name: 'Dr. Maya Lin', position: 'Pediatric Dentist', qualifications: 'DDS, Pediatric Dentistry', experienceYears: 9, specializations: "Kids' Dentistry · Prevention", photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=500&q=80', instagram: '#', linkedin: '#', facebook: '#' },
    { name: 'Dr. Elias Navarro', position: 'Oral Surgeon', qualifications: 'DMD, Oral & Maxillofacial Surgery', experienceYears: 18, specializations: 'Implants · Wisdom Teeth', photo: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=500&q=80&sat=-100', instagram: '#', linkedin: '#', facebook: '#' },
  ],
  whyUs: [
    { icon: 'fa-microscope', title: 'Modern Equipment' },
    { icon: 'fa-user-doctor', title: 'Experienced Dentists' },
    { icon: 'fa-tags', title: 'Affordable Prices' },
    { icon: 'fa-face-smile', title: 'Pain-Free Procedures' },
    { icon: 'fa-hand-holding-heart', title: 'Personalized Care' },
    { icon: 'fa-couch', title: 'Comfortable Clinic' },
    { icon: 'fa-calendar-days', title: 'Flexible Scheduling' },
    { icon: 'fa-spray-can-sparkles', title: 'Sterilized Equipment' },
    { icon: 'fa-x-ray', title: 'Digital X-Ray' },
    { icon: 'fa-bolt', title: 'Latest Technology' },
  ],
  beforeAfter: [
    { category: 'veneers', label: 'Porcelain Veneers', beforeImage: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=700&q=60&sat=-100&blur=1', afterImage: 'https://images.unsplash.com/photo-1601058268499-e52658b8bb88?auto=format&fit=crop&w=700&q=80' },
    { category: 'whitening', label: 'Teeth Whitening', beforeImage: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=700&q=60&sat=-100&blur=1', afterImage: 'https://images.unsplash.com/photo-1517840901100-8179e982acb7?auto=format&fit=crop&w=700&q=80' },
    { category: 'braces', label: 'Orthodontic Braces', beforeImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=700&q=60&sat=-100&blur=1', afterImage: 'https://images.unsplash.com/photo-1523301343968-6a6ebf63c672?auto=format&fit=crop&w=700&q=80' },
    { category: 'makeover', label: 'Full Smile Makeover', beforeImage: 'https://images.unsplash.com/photo-1609840114035-3c981b782dcf?auto=format&fit=crop&w=700&q=60&sat=-100&blur=1', afterImage: 'https://images.unsplash.com/photo-1580281657702-257584239a55?auto=format&fit=crop&w=700&q=80' },
  ],
  gallery: [
    { category: 'interior', image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80', height: 380, label: 'Clinic Interior' },
    { category: 'team', image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80', height: 300, label: 'Our Friendly Team' },
    { category: 'interior', image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80', height: 440, label: 'Treatment Room' },
    { category: 'procedures', image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dcf?auto=format&fit=crop&w=600&q=80', height: 340, label: 'Modern Equipment' },
    { category: 'patients', image: 'https://images.unsplash.com/photo-1517840901100-8179e982acb7?auto=format&fit=crop&w=600&q=80', height: 300, label: 'Smiling Patient' },
    { category: 'interior', image: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=600&q=80', height: 400, label: 'Waiting Area' },
    { category: 'procedures', image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80', height: 360, label: 'Dental Procedure' },
    { category: 'team', image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80', height: 420, label: 'Dentist On Duty' },
    { category: 'patients', image: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=600&q=80', height: 320, label: 'Happy Patient' },
    { category: 'interior', image: 'https://images.unsplash.com/photo-1583912267550-d6c2ac3196c0?auto=format&fit=crop&w=600&q=80', height: 300, label: 'Reception Desk' },
    { category: 'procedures', image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80', height: 380, label: 'Precision Care' },
    { category: 'team', image: 'https://images.unsplash.com/photo-1622902046580-2b47f47f5471?auto=format&fit=crop&w=600&q=80', height: 340, label: 'Specialist Team' },
  ],
  testimonials: [
    { name: 'Sarah Jimenez', photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80', rating: 5, treatment: 'Smile Makeover', review: "Absolutely the best dental experience I've ever had. The team made me feel comfortable from start to finish, and my smile has never looked better!" },
    { name: 'Marcus Tan', photo: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=100&q=80', rating: 5, treatment: 'Dental Implants', review: 'Professional, gentle, and truly caring. Dr. Navarro explained every step and the results exceeded my expectations.' },
    { name: 'Elena Cruz', photo: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?auto=format&fit=crop&w=100&q=80', rating: 5, treatment: 'Invisalign', review: 'My Invisalign journey here was smooth and well-managed. The clinic itself feels more like a spa than a dental office!' },
    { name: 'James Wu', photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80', rating: 5, treatment: 'Teeth Whitening', review: 'Quick, painless, and the results were dramatic. Highly recommend Radiance Dental to anyone looking for quality care.' },
    { name: 'Priya Santos', photo: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=100&q=80', rating: 5, treatment: "Kids' Dentistry", review: 'My daughter used to be terrified of dentists — Dr. Lin changed that completely. So patient and kind with children.' },
  ],
  promotions: [
    { badge: 'Limited Time', title: '20% Off Teeth Whitening', desc: 'Brighten your smile this month with our professional whitening treatment.', color: 'sky' },
    { badge: 'New Patients', title: 'Free Dental Consultation', desc: 'Book your first visit and receive a complimentary consultation and X-ray.', color: 'mint' },
    { badge: 'Family Package', title: 'Family Dental Packages', desc: 'Bundle checkups and cleanings for the whole family at a special rate.', color: 'amber' },
    { badge: 'Students', title: 'Student Discount — 15% Off', desc: 'Show your student ID and save on general dentistry services.', color: 'violet' },
    { badge: 'Seniors', title: 'Senior Citizen Discount', desc: 'Special pricing and priority scheduling for our senior patients.', color: 'rose' },
    { badge: 'Ongoing', title: 'Refer & Earn Rewards', desc: 'Refer a friend and both of you receive a treatment credit.', color: 'emerald' },
  ],
  insurance: [{ name: 'Delta Dental' }, { name: 'MetLife' }, { name: 'Cigna' }, { name: 'Aetna' }, { name: 'Guardian' }, { name: 'United Healthcare' }],
  facilities: [
    { icon: 'fa-x-ray', title: 'Digital X-Ray' },
    { icon: 'fa-cube', title: '3D Scanner' },
    { icon: 'fa-couch', title: 'Comfortable Waiting Area' },
    { icon: 'fa-wifi', title: 'Free WiFi' },
    { icon: 'fa-square-parking', title: 'Parking' },
    { icon: 'fa-wheelchair', title: 'Wheelchair Accessible' },
    { icon: 'fa-door-closed', title: 'Private Consultation Rooms' },
    { icon: 'fa-child-reaching', title: "Kids' Play Area" },
    { icon: 'fa-mug-hot', title: 'Coffee Corner' },
    { icon: 'fa-snowflake', title: 'Air-Conditioned Clinic' },
  ],
  faqs: [
    { question: 'Do you accept walk-ins?', answer: 'Yes, we welcome walk-ins whenever possible, though we recommend booking an appointment to guarantee your preferred time slot.' },
    { question: 'How often should I visit the dentist?', answer: 'We recommend a checkup and cleaning every six months to maintain optimal oral health, though your dentist may suggest a different schedule based on your needs.' },
    { question: 'Do you offer payment plans?', answer: 'Yes, we offer flexible 0% interest installment plans for most major treatments. Speak with our front desk team for details.' },
    { question: 'What insurance do you accept?', answer: 'We accept most major insurance providers including Delta Dental, MetLife, Cigna, Aetna, Guardian, and United Healthcare.' },
    { question: 'How long does teeth whitening take?', answer: 'In-office professional whitening typically takes about 60–90 minutes and delivers immediate, visible results.' },
    { question: 'What should I do in a dental emergency?', answer: 'Call our 24/7 emergency line immediately at +1 (555) 111-9999. For knocked-out teeth, keep the tooth moist and come in as soon as possible.' },
  ],
  blog: [
    { tag: 'Oral Health', title: 'How to Maintain Healthy Teeth', excerpt: 'Simple daily habits that make a lasting difference in your oral health and confidence.', image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80', date: '2026-06-12', readTime: '4 min read' },
    { tag: 'Treatments', title: 'Signs You Need a Root Canal', excerpt: 'Learn the warning signs and how modern root canal therapy is virtually pain-free.', image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80', date: '2026-06-03', readTime: '5 min read' },
    { tag: 'Nutrition', title: 'Foods That Damage Teeth', excerpt: 'Discover which everyday foods and drinks may be silently harming your enamel.', image: 'https://images.unsplash.com/photo-1517840901100-8179e982acb7?auto=format&fit=crop&w=600&q=80', date: '2026-05-22', readTime: '3 min read' },
    { tag: 'Prevention', title: 'Benefits of Regular Dental Cleaning', excerpt: 'Why professional cleanings matter more than brushing alone for long-term health.', image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dcf?auto=format&fit=crop&w=600&q=80', date: '2026-05-10', readTime: '4 min read' },
    { tag: 'Orthodontics', title: 'How Invisalign Works', excerpt: 'A step-by-step look at the clear aligner journey, from consultation to your new smile.', image: 'https://images.unsplash.com/photo-1523301343968-6a6ebf63c672?auto=format&fit=crop&w=600&q=80', date: '2026-04-28', readTime: '6 min read' },
    { tag: 'Cosmetic', title: 'Is a Smile Makeover Right for You?', excerpt: 'Explore the treatments that combine into a fully personalized smile transformation.', image: 'https://images.unsplash.com/photo-1580281657702-257584239a55?auto=format&fit=crop&w=600&q=80', date: '2026-04-15', readTime: '5 min read' },
  ],
};

const PROMO_GRADIENTS = {
  sky: 'linear-gradient(135deg,#38bdf8,#0ea5e9)',
  mint: 'linear-gradient(135deg,#63cfa6,#3fb98c)',
  amber: 'linear-gradient(135deg,#f6c667,#f59e0b)',
  violet: 'linear-gradient(135deg,#a78bfa,#7c3aed)',
  rose: 'linear-gradient(135deg,#fb7185,#e11d48)',
  emerald: 'linear-gradient(135deg,#34d399,#059669)',
};

/* Fetch JSON with graceful fallback (works over http/https; falls back silently over file://) */
async function loadJSON(path, fallback) {
  try {
    const res = await fetch(path, { cache: 'no-cache' });
    if (!res.ok) throw new Error('bad status ' + res.status);
    const data = await res.json();
    return data;
  } catch (err) {
    return fallback;
  }
}

/* Content collections edited via Decap CMS's "list" widget are stored on disk
   as { "items": [...] } (Decap's file-collection format), while the bundled
   fallback constants above are plain arrays. Normalize either shape to an array. */
function asList(raw, fallback) {
  if (Array.isArray(raw)) return raw;
  if (raw && Array.isArray(raw.items)) return raw.items;
  return fallback;
}

/* Fetch a list-type content file and always resolve to a plain array. */
async function loadList(path, fallback) {
  return asList(await loadJSON(path, fallback), fallback);
}

/* Resolve a dot-notation path like "about.mission.title" against an object */
function getPath(obj, path) {
  return path.split('.').reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj);
}

/* Hydrate every element carrying a data-cms* attribute from the site.json content */
function hydrateSiteContent(site) {
  document.querySelectorAll('[data-cms]').forEach(el => {
    const val = getPath(site, el.getAttribute('data-cms'));
    if (val !== undefined && val !== null && val !== '') el.textContent = val;
  });
  document.querySelectorAll('[data-cms-tel]').forEach(el => {
    const val = getPath(site, el.getAttribute('data-cms-tel'));
    if (val) { el.textContent = val; el.setAttribute('href', 'tel:' + val.replace(/[^\d+]/g, '')); }
  });
  document.querySelectorAll('[data-cms-mailto]').forEach(el => {
    const val = getPath(site, el.getAttribute('data-cms-mailto'));
    if (val) { el.textContent = val; el.setAttribute('href', 'mailto:' + val); }
  });
  document.querySelectorAll('[data-cms-href]').forEach(el => {
    const val = getPath(site, el.getAttribute('data-cms-href'));
    if (val) el.setAttribute('href', val);
  });
  document.querySelectorAll('[data-cms-img]').forEach(el => {
    const val = getPath(site, el.getAttribute('data-cms-img'));
    if (val) el.setAttribute('src', val);
  });
  document.querySelectorAll('[data-cms-src]').forEach(el => {
    const val = getPath(site, el.getAttribute('data-cms-src'));
    if (val) el.setAttribute('src', val);
  });

  // Hero + About counters (update data-target before they animate into view)
  const stats = site.about && site.about.stats;
  if (stats) {
    const map = {
      patientsServed: stats.patientsServed,
      yearsExperience: stats.yearsExperience,
      treatmentsCompleted: stats.treatmentsCompleted,
      satisfactionRate: stats.satisfactionRate,
    };
    document.querySelectorAll('.counter').forEach(el => {
      const current = el.getAttribute('data-target');
      if (current === '18000' && map.patientsServed) el.setAttribute('data-target', map.patientsServed);
      else if (current === '16' && map.yearsExperience) el.setAttribute('data-target', map.yearsExperience);
      else if (current === '42000' && map.treatmentsCompleted) el.setAttribute('data-target', map.treatmentsCompleted);
      else if (current === '99' && map.satisfactionRate) el.setAttribute('data-target', map.satisfactionRate);
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();

  /* ---------------- Page Loader ---------------- */
  window.addEventListener('load', () => {
    const loader = document.getElementById('page-loader');
    setTimeout(() => { loader.classList.add('loaded'); }, 350);
  });

  /* ---------------- AOS ---------------- */
  if (window.AOS) AOS.init({ duration: 800, once: true, offset: 60, easing: 'ease-out-cubic' });

  /* ---------------- Sticky Nav ---------------- */
  const navbar = document.getElementById('navbar');
  const backToTop = document.getElementById('back-to-top');

  /* Active nav link highlight */
  const sections = [...document.querySelectorAll('section[id]')];
  const navLinks = [...document.querySelectorAll('.nav-link')];
  function highlightActiveNav() {
    let current = '';
    sections.forEach(sec => {
      const top = sec.offsetTop - 140;
      if (window.scrollY >= top) current = sec.id;
    });
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
  }

  const onScroll = () => {
    if (window.scrollY > 40) { navbar.classList.add('scrolled'); } else { navbar.classList.remove('scrolled'); }
    if (window.scrollY > 500) { backToTop.classList.add('show'); } else { backToTop.classList.remove('show'); }
    highlightActiveNav();
  };
  document.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  /* ---------------- Mobile Menu ---------------- */
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileClose = document.getElementById('mobile-menu-close');
  const mobileOverlay = document.getElementById('mobile-menu-overlay');

  function openMobileMenu() {
    mobileMenu.classList.remove('hidden');
    requestAnimationFrame(() => mobileMenu.classList.add('open'));
    document.body.style.overflow = 'hidden';
  }
  function closeMobileMenu() {
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
    setTimeout(() => mobileMenu.classList.add('hidden'), 400);
  }
  mobileBtn.addEventListener('click', openMobileMenu);
  mobileClose.addEventListener('click', closeMobileMenu);
  mobileOverlay.addEventListener('click', closeMobileMenu);
  document.querySelectorAll('.mobile-link').forEach(l => l.addEventListener('click', closeMobileMenu));

  /* ---------------- Dark Mode ---------------- */
  const darkToggle = document.getElementById('dark-toggle');
  let isDark = false;
  darkToggle.addEventListener('click', () => {
    isDark = !isDark;
    document.documentElement.classList.toggle('dark', isDark);
    darkToggle.innerHTML = isDark ? '<i class="fa-solid fa-sun text-amber-300"></i>' : '<i class="fa-solid fa-moon text-slateink/70"></i>';
  });

  /* ---------------- Cookie Consent ---------------- */
  const cookieBanner = document.getElementById('cookie-banner');
  setTimeout(() => cookieBanner.classList.remove('translate-y-full'), 1200);
  function dismissCookie() { cookieBanner.classList.add('translate-y-full'); }
  document.getElementById('cookie-accept').addEventListener('click', dismissCookie);
  document.getElementById('cookie-decline').addEventListener('click', dismissCookie);

  /* ---------------- Animated Counters ---------------- */
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });
  function observeCounters() {
    document.querySelectorAll('.counter').forEach(c => counterObserver.observe(c));
  }

  function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-target'), 10) || 0;
    const duration = 1600;
    const start = performance.now();
    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target).toLocaleString();
      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = target.toLocaleString();
    }
    requestAnimationFrame(tick);
  }

  /* ---------------- Booking Form ---------------- */
  const bookingForm = document.getElementById('booking-form');
  const successModal = document.getElementById('success-modal');
  bookingForm.addEventListener('submit', e => {
    e.preventDefault();
    let valid = true;
    bookingForm.querySelectorAll('[required]').forEach(field => {
      const group = field.closest('.form-group');
      if (!field.value.trim()) { group.classList.add('error'); valid = false; }
      else group.classList.remove('error');
    });
    if (!valid) return;
    successModal.classList.remove('hidden');
    successModal.classList.add('flex');
    document.body.style.overflow = 'hidden';
    bookingForm.reset();
  });
  function closeSuccess() {
    successModal.classList.add('hidden');
    successModal.classList.remove('flex');
    document.body.style.overflow = '';
  }
  document.getElementById('success-close').addEventListener('click', closeSuccess);
  document.getElementById('success-ok').addEventListener('click', closeSuccess);

  /* ---------------- Newsletter forms ---------------- */
  ['newsletter-form', 'footer-newsletter'].forEach(id => {
    const form = document.getElementById(id);
    if (!form) return;
    form.addEventListener('submit', e => {
      e.preventDefault();
      const btn = form.querySelector('button');
      const original = btn.innerHTML;
      btn.innerHTML = '<i class="fa-solid fa-check"></i>';
      setTimeout(() => { btn.innerHTML = original; form.reset(); }, 1800);
    });
  });

  /* ---------------- Virtual Tour Modal ---------------- */
  const tourModal = document.getElementById('tour-modal');
  document.getElementById('virtual-tour-trigger').addEventListener('click', () => {
    tourModal.classList.remove('hidden'); tourModal.classList.add('flex');
    document.body.style.overflow = 'hidden';
  });
  document.getElementById('tour-close').addEventListener('click', () => {
    tourModal.classList.add('hidden'); tourModal.classList.remove('flex');
    document.body.style.overflow = '';
  });

  /* ---------------- Floating Action Menu ---------------- */
  const fabToggle = document.getElementById('fab-toggle');
  const fabMenu = document.getElementById('fab-menu');
  const fabIcon = document.getElementById('fab-icon');
  let fabOpen = true;
  fabToggle.addEventListener('click', () => {
    fabOpen = !fabOpen;
    fabMenu.classList.toggle('hidden-fab', !fabOpen);
    fabIcon.classList.toggle('fa-plus', !fabOpen);
    fabIcon.classList.toggle('fa-xmark', fabOpen);
  });
  fabIcon.classList.remove('fa-plus'); fabIcon.classList.add('fa-xmark');

  /* ---------------- Chatbot Widget ---------------- */
  const chatbot = document.getElementById('chatbot');
  const chatbotBody = document.getElementById('chatbot-body');
  const chatbotForm = document.getElementById('chatbot-form');
  const chatbotInput = document.getElementById('chatbot-input');

  // Floating chat bubble launcher — sits to the left of the FAB stack so the
  // two never overlap at any screen size (see css/styles.css for FAB position).
  const chatLauncher = document.createElement('button');
  chatLauncher.id = 'chat-launcher';
  chatLauncher.setAttribute('aria-label', 'Open chat assistant');
  chatLauncher.className = 'fixed z-40 bottom-24 sm:bottom-6 right-24 w-14 h-14 rounded-full bg-charcoal text-white shadow-soft flex items-center justify-center text-lg';
  chatLauncher.innerHTML = '<i class="fa-solid fa-comment-dots"></i>';
  document.body.appendChild(chatLauncher);

  function addBotMessage(text) {
    const div = document.createElement('div');
    div.className = 'flex gap-2 items-start';
    div.innerHTML = `<div class="w-7 h-7 rounded-full bg-gradient-to-br from-sky-400 to-mint-400 flex items-center justify-center text-white text-xs shrink-0"><i class="fa-solid fa-robot"></i></div><div class="bg-white rounded-2xl rounded-tl-sm px-3.5 py-2.5 shadow-softer max-w-[80%]">${text}</div>`;
    chatbotBody.appendChild(div);
    chatbotBody.scrollTop = chatbotBody.scrollHeight;
  }
  function addUserMessage(text) {
    const div = document.createElement('div');
    div.className = 'flex justify-end';
    div.innerHTML = `<div class="bg-gradient-to-r from-sky-400 to-mint-400 text-white rounded-2xl rounded-tr-sm px-3.5 py-2.5 max-w-[80%]">${text}</div>`;
    chatbotBody.appendChild(div);
    chatbotBody.scrollTop = chatbotBody.scrollHeight;
  }

  let chatInitialized = false;
  function openChat() {
    chatbot.classList.remove('hidden');
    if (!chatInitialized) {
      addBotMessage("Hi there! 👋 I'm the Radiance Assistant. Ask me about our services, hours, or how to book an appointment.");
      chatInitialized = true;
    }
  }
  chatLauncher.addEventListener('click', openChat);
  document.getElementById('chatbot-close').addEventListener('click', () => chatbot.classList.add('hidden'));

  const CANNED_RESPONSES = [
    { keys: ['hour', 'open', 'time'], reply: "We're open Monday–Friday 9AM–6PM and Saturday 9AM–2PM. We're closed Sundays except for emergencies." },
    { keys: ['price', 'cost', 'much'], reply: "Pricing varies by treatment. Book a free consultation and we'll provide a personalized quote!" },
    { keys: ['whiten'], reply: 'Our professional teeth whitening takes about 60–90 minutes and is currently 20% off — check our Promotions section!' },
    { keys: ['implant'], reply: 'We offer full dental implant services with our oral surgery specialist. Want to book a consultation?' },
    { keys: ['invisalign', 'braces', 'align'], reply: "We'd love to assess your smile for Invisalign or braces — shall I help you book?" },
    { keys: ['emergency'], reply: 'For dental emergencies, please call our 24/7 line right away — see the Contact section for the number.' },
    { keys: ['book', 'appointment', 'schedule'], reply: 'You can book directly using our appointment form — scroll to the "Book Appointment" section or click the calendar icon!' },
    { keys: ['insurance'], reply: 'Check our Insurance Partners section for the full list of providers we accept.' },
  ];
  function botReply(msg) {
    const lower = msg.toLowerCase();
    const found = CANNED_RESPONSES.find(r => r.keys.some(k => lower.includes(k)));
    return found ? found.reply : 'Thanks for your message! For detailed questions, feel free to call us or book a consultation directly.';
  }
  chatbotForm.addEventListener('submit', e => {
    e.preventDefault();
    const msg = chatbotInput.value.trim();
    if (!msg) return;
    addUserMessage(msg);
    chatbotInput.value = '';
    setTimeout(() => addBotMessage(botReply(msg)), 550);
  });

  /* ---------------- Smooth scroll offset for in-page anchors ---------------- */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      if (id.length > 1) {
        const target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          const y = target.getBoundingClientRect().top + window.scrollY - 90;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }
    });
  });

  /* =====================================================================
     LOAD CONTENT (from /content/*.json, Decap-CMS-editable) AND RENDER
     ===================================================================== */
  loadAllContent();

  async function loadAllContent() {
    const [site, services, dentists, whyUs, beforeAfter, gallery, testimonials, promotions, insurance, facilities, faqs, blog] = await Promise.all([
      loadJSON('content/site.json', FALLBACK.site),
      loadList('content/services.json', FALLBACK.services),
      loadList('content/dentists.json', FALLBACK.dentists),
      loadList('content/why-us.json', FALLBACK.whyUs),
      loadList('content/before-after.json', FALLBACK.beforeAfter),
      loadList('content/gallery.json', FALLBACK.gallery),
      loadList('content/testimonials.json', FALLBACK.testimonials),
      loadList('content/promotions.json', FALLBACK.promotions),
      loadList('content/insurance.json', FALLBACK.insurance),
      loadList('content/facilities.json', FALLBACK.facilities),
      loadList('content/faqs.json', FALLBACK.faqs),
      loadList('content/blog.json', FALLBACK.blog),
    ]);

    hydrateSiteContent(site);
    renderDentists(dentists);
    renderServices(services);
    renderWhyUs(whyUs);
    renderBeforeAfter(beforeAfter);
    renderGallery(gallery);
    renderTestimonials(testimonials);
    renderPromotions(promotions);
    renderInsurance(insurance);
    renderFacilities(facilities);
    renderFAQ(faqs);
    renderBlog(blog);
    populateDentistSelect(dentists);

    observeCounters();
    if (window.AOS) AOS.refreshHard();
  }

  /* ---------------- Dentists ---------------- */
  function renderDentists(dentists) {
    const grid = document.getElementById('dentists-grid');
    grid.innerHTML = dentists.map((d, i) => `
      <div class="dentist-card" data-aos="fade-up" data-aos-delay="${(i % 4) * 100}">
        <div class="dentist-photo"><img src="${d.photo}" alt="${d.name}" loading="lazy"/></div>
        <div class="p-5 text-center">
          <h3 class="font-heading font-semibold text-lg text-charcoal">${d.name}</h3>
          <p class="text-sky-500 text-sm font-accent font-medium">${d.position}</p>
          <p class="text-xs text-slateink/55 mt-2">${d.qualifications} · ${d.experienceYears} yrs experience</p>
          <p class="text-xs text-slateink/55 mt-1">${d.specializations}</p>
          <div class="flex justify-center gap-3 mt-4 text-slateink/40">
            <a href="${d.instagram || '#'}" class="social-ic"><i class="fa-brands fa-instagram"></i></a>
            <a href="${d.linkedin || '#'}" class="social-ic"><i class="fa-brands fa-linkedin"></i></a>
            <a href="${d.facebook || '#'}" class="social-ic"><i class="fa-brands fa-facebook"></i></a>
          </div>
        </div>
      </div>`).join('');
  }

  function populateDentistSelect(dentists) {
    const select = document.getElementById('dentist');
    if (!select) return;
    select.innerHTML = '<option>No preference</option>' + dentists.map(d => `<option>${d.name}</option>`).join('');
  }

  /* ---------------- Services ---------------- */
  function renderServices(services) {
    const servicesGrid = document.getElementById('services-grid');
    servicesGrid.innerHTML = services.map((s, i) => `
      <div class="service-card" data-aos="fade-up" data-aos-delay="${(i % 4) * 80}">
        <div class="service-icon"><i class="fa-solid ${s.icon}"></i></div>
        <h3>${s.name}</h3>
        <p>${s.desc}</p>
        <a href="#booking" class="service-link">Learn More <i class="fa-solid fa-arrow-right"></i></a>
      </div>`).join('');
  }

  /* ---------------- Why Choose Us ---------------- */
  function renderWhyUs(items) {
    document.getElementById('why-us-grid').innerHTML = items.map((w, i) => `
      <div class="feature-card" data-aos="zoom-in" data-aos-delay="${(i % 5) * 70}">
        <i class="fa-solid ${w.icon}"></i>
        <h4>${w.title}</h4>
      </div>`).join('');
  }

  /* ---------------- Before / After ---------------- */
  let BEFORE_AFTER_DATA = [];
  function renderBeforeAfter(data) {
    BEFORE_AFTER_DATA = data;
    renderBA('all');
    document.getElementById('ba-filters').addEventListener('click', e => {
      const btn = e.target.closest('.ba-filter-btn');
      if (!btn) return;
      document.querySelectorAll('#ba-filters .ba-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderBA(btn.dataset.filter);
    });
  }

  const baGrid = document.getElementById('ba-grid');
  function renderBA(filter) {
    const items = BEFORE_AFTER_DATA.filter(b => filter === 'all' || b.category === filter);
    baGrid.innerHTML = items.map(b => `
      <div data-aos="fade-up">
        <div class="ba-slider" data-key="${b.category}">
          <img class="ba-after" src="${b.afterImage}" alt="${b.label} after" loading="lazy" />
          <div class="ba-before-wrap">
            <img src="${b.beforeImage}" alt="${b.label} before" loading="lazy" />
          </div>
          <div class="ba-handle"><div class="ba-handle-knob"><i class="fa-solid fa-arrows-left-right"></i></div></div>
          <span class="ba-label before">Before</span>
          <span class="ba-label after">After</span>
        </div>
        <p class="ba-caption">${b.label}</p>
      </div>`).join('');
    initBASliders();
  }

  // Before/after sliders use event delegation (one set of listeners on
  // document/window, reused across re-renders) so re-filtering never stacks
  // up duplicate global listeners or leaks references to detached nodes.
  let baDragSlider = null;

  function setBASliderPos(slider, clientX) {
    const wrap = slider.querySelector('.ba-before-wrap');
    const handle = slider.querySelector('.ba-handle');
    if (!wrap || !handle) return;
    const rect = slider.getBoundingClientRect();
    let pct = ((clientX - rect.left) / rect.width) * 100;
    pct = Math.max(0, Math.min(100, pct));
    wrap.style.width = pct + '%';
    handle.style.left = pct + '%';
  }

  // Keep each "before" image sized to exactly match its full slider,
  // regardless of how narrow the reveal panel currently is (fixes
  // distortion on mobile/tablet widths where the slider itself resizes).
  function syncAllBeforeImageSizes() {
    document.querySelectorAll('.ba-slider').forEach(slider => {
      const wrap = slider.querySelector('.ba-before-wrap');
      const img = wrap && wrap.querySelector('img');
      if (!img) return;
      const rect = slider.getBoundingClientRect();
      img.style.width = rect.width + 'px';
      img.style.height = rect.height + 'px';
      img.style.maxWidth = 'none';
    });
  }

  function initBASliders() {
    syncAllBeforeImageSizes();
  }

  document.addEventListener('mousedown', e => {
    const handle = e.target.closest('.ba-handle');
    if (handle) { baDragSlider = handle.closest('.ba-slider'); }
  });
  document.addEventListener('touchstart', e => {
    const handle = e.target.closest('.ba-handle');
    if (handle) { baDragSlider = handle.closest('.ba-slider'); }
  }, { passive: true });
  window.addEventListener('mouseup', () => { baDragSlider = null; });
  window.addEventListener('touchend', () => { baDragSlider = null; });
  window.addEventListener('mousemove', e => {
    if (baDragSlider) setBASliderPos(baDragSlider, e.clientX);
  });
  window.addEventListener('touchmove', e => {
    if (baDragSlider && e.touches[0]) setBASliderPos(baDragSlider, e.touches[0].clientX);
  }, { passive: true });
  document.addEventListener('click', e => {
    const slider = e.target.closest('.ba-slider');
    if (slider && !e.target.closest('.ba-handle')) setBASliderPos(slider, e.clientX);
  });
  let baResizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(baResizeTimer);
    baResizeTimer = setTimeout(syncAllBeforeImageSizes, 150);
  });

  /* ---------------- Gallery Masonry ---------------- */
  let GALLERY_DATA = [];
  function renderGallery(data) {
    GALLERY_DATA = data;
    renderMasonry('all');
    document.getElementById('gallery-filters').addEventListener('click', e => {
      const btn = e.target.closest('.ba-filter-btn');
      if (!btn) return;
      document.querySelectorAll('#gallery-filters .ba-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderMasonry(btn.dataset.filter);
    });
  }

  const masonryGrid = document.getElementById('masonry-grid');
  function renderMasonry(filter) {
    const items = GALLERY_DATA.filter(g => filter === 'all' || g.category === filter);
    masonryGrid.innerHTML = items.map(g => `
      <div class="masonry-item" data-aos="fade-up">
        <img src="${g.image}" alt="${g.label}" loading="lazy" style="height:${g.height}px;object-fit:cover;" data-full="${g.image.replace('w=600', 'w=1400')}" />
        <div class="overlay">${g.label}</div>
      </div>`).join('');
  }

  // Lightbox
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  masonryGrid.addEventListener('click', e => {
    const img = e.target.closest('img');
    if (!img) return;
    lightboxImg.src = img.dataset.full || img.src;
    lightbox.classList.remove('hidden');
    lightbox.classList.add('flex');
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(() => lightboxImg.classList.remove('scale-95'));
  });
  function closeLightbox() {
    lightbox.classList.add('hidden');
    lightbox.classList.remove('flex');
    lightboxImg.classList.add('scale-95');
    document.body.style.overflow = '';
  }
  document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

  /* ---------------- Testimonials ---------------- */
  function renderTestimonials(items) {
    const tWrapper = document.getElementById('testimonial-wrapper');
    tWrapper.innerHTML = items.map(t => `
      <div class="swiper-slide">
        <div class="testimonial-card">
          <div class="stars">${'<i class="fa-solid fa-star"></i>'.repeat(t.rating)}</div>
          <p class="review">"${t.review}"</p>
          <div class="patient">
            <img src="${t.photo}" alt="${t.name}" loading="lazy" />
            <div>
              <h5>${t.name}</h5>
              <span>${t.treatment}</span>
            </div>
          </div>
        </div>
      </div>`).join('');

    if (window.Swiper) {
      new Swiper('.testimonial-swiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: { delay: 4500, disableOnInteraction: false },
        navigation: { nextEl: '.testimonial-next', prevEl: '.testimonial-prev' },
        breakpoints: { 640: { slidesPerView: 1, spaceBetween: 24 }, 768: { slidesPerView: 2, spaceBetween: 24 }, 1100: { slidesPerView: 3, spaceBetween: 24 } },
      });
    }
  }

  /* ---------------- Promotions ---------------- */
  function renderPromotions(items) {
    document.getElementById('promo-grid').innerHTML = items.map((p, i) => `
      <div class="promo-card" style="background:${PROMO_GRADIENTS[p.color] || PROMO_GRADIENTS.sky}" data-aos="fade-up" data-aos-delay="${(i % 3) * 90}">
        <span class="badge">${p.badge}</span>
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <a href="#booking">Claim Offer <i class="fa-solid fa-arrow-right"></i></a>
      </div>`).join('');
  }

  /* ---------------- Insurance ---------------- */
  function renderInsurance(items) {
    document.getElementById('insurance-grid').innerHTML = items.map(i => `
      <div class="insurance-logo" data-aos="fade-up"><span class="font-heading font-bold text-xs sm:text-sm text-slateink/70 text-center">${i.name}</span></div>`).join('');
  }

  /* ---------------- Facilities ---------------- */
  function renderFacilities(items) {
    document.getElementById('facilities-grid').innerHTML = items.map((f, i) => `
      <div class="facility-card" data-aos="zoom-in" data-aos-delay="${(i % 5) * 70}">
        <i class="fa-solid ${f.icon}"></i>
        <h4>${f.title}</h4>
      </div>`).join('');
  }

  /* ---------------- FAQ ---------------- */
  function renderFAQ(items) {
    const faqAccordion = document.getElementById('faq-accordion');
    faqAccordion.innerHTML = items.map((f, i) => `
      <div class="faq-item" data-aos="fade-up" data-aos-delay="${i * 50}">
        <button class="faq-question" aria-expanded="false">
          <span>${f.question}</span>
          <i class="fa-solid fa-plus faq-icon"></i>
        </button>
        <div class="faq-answer"><div class="faq-answer-inner">${f.answer}</div></div>
      </div>`).join('');

    faqAccordion.addEventListener('click', e => {
      const btn = e.target.closest('.faq-question');
      if (!btn) return;
      const item = btn.closest('.faq-item');
      const answer = item.querySelector('.faq-answer');
      const isOpen = item.classList.contains('open');
      faqAccordion.querySelectorAll('.faq-item.open').forEach(o => {
        o.classList.remove('open');
        o.querySelector('.faq-answer').style.maxHeight = null;
        o.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        item.classList.add('open');
        answer.style.maxHeight = answer.scrollHeight + 'px';
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  }

  /* ---------------- Blog ---------------- */
  function renderBlog(posts) {
    document.getElementById('blog-grid').innerHTML = posts.map((b, i) => `
      <article class="blog-card" data-aos="fade-up" data-aos-delay="${(i % 3) * 90}">
        <img src="${b.image}" alt="${b.title}" loading="lazy" />
        <div class="body">
          <span class="tag">${b.tag}</span>
          <h3>${b.title}</h3>
          <p>${b.excerpt}</p>
          <div class="meta"><i class="fa-regular fa-calendar"></i> ${formatDate(b.date)} <span>&middot;</span> ${b.readTime}</div>
        </div>
      </article>`).join('');
  }

  function formatDate(iso) {
    if (!iso) return '';
    const d = new Date(iso + 'T00:00:00');
    if (isNaN(d.getTime())) return iso;
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  }
});

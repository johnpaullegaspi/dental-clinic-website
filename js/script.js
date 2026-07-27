/* ==========================================================================
   Radiance Dental Studio — Site Interactions
   ========================================================================== */

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
  const mobilePanel = document.getElementById('mobile-menu-panel');

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
  const counters = document.querySelectorAll('.counter');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });
  counters.forEach(c => counterObserver.observe(c));

  function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-target'), 10);
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

  /* =====================================================================
     DATA-DRIVEN CONTENT
     ===================================================================== */

  const SERVICES = [
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
  ];

  const servicesGrid = document.getElementById('services-grid');
  servicesGrid.innerHTML = SERVICES.map((s, i) => `
    <div class="service-card" data-aos="fade-up" data-aos-delay="${(i % 4) * 80}">
      <div class="service-icon"><i class="fa-solid ${s.icon}"></i></div>
      <h3>${s.name}</h3>
      <p>${s.desc}</p>
      <a href="#booking" class="service-link">Learn More <i class="fa-solid fa-arrow-right"></i></a>
    </div>`).join('');

  const WHY_US = [
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
  ];
  document.getElementById('why-us-grid').innerHTML = WHY_US.map((w, i) => `
    <div class="feature-card" data-aos="zoom-in" data-aos-delay="${(i % 5) * 70}">
      <i class="fa-solid ${w.icon}"></i>
      <h4>${w.title}</h4>
    </div>`).join('');

  /* ---------------- Before / After ---------------- */
  const BEFORE_AFTER = [
    { cat: 'veneers', label: 'Porcelain Veneers', before: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=700&q=60&sat=-100&blur=1', after: 'https://images.unsplash.com/photo-1601058268499-e52658b8bb88?auto=format&fit=crop&w=700&q=80' },
    { cat: 'whitening', label: 'Teeth Whitening', before: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=700&q=60&sat=-100&blur=1', after: 'https://images.unsplash.com/photo-1517840901100-8179e982acb7?auto=format&fit=crop&w=700&q=80' },
    { cat: 'braces', label: 'Orthodontic Braces', before: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=700&q=60&sat=-100&blur=1', after: 'https://images.unsplash.com/photo-1523301343968-6a6ebf63c672?auto=format&fit=crop&w=700&q=80' },
    { cat: 'makeover', label: 'Full Smile Makeover', before: 'https://images.unsplash.com/photo-1609840114035-3c981b782dcf?auto=format&fit=crop&w=700&q=60&sat=-100&blur=1', after: 'https://images.unsplash.com/photo-1580281657702-257584239a55?auto=format&fit=crop&w=700&q=80' },
  ];

  const baGrid = document.getElementById('ba-grid');
  function renderBA(filter = 'all') {
    const items = BEFORE_AFTER.filter(b => filter === 'all' || b.cat === filter);
    baGrid.innerHTML = items.map(b => `
      <div data-aos="fade-up">
        <div class="ba-slider" data-key="${b.cat}">
          <img class="ba-after" src="${b.after}" alt="${b.label} after" loading="lazy" />
          <div class="ba-before-wrap">
            <img src="${b.before}" alt="${b.label} before" loading="lazy" style="width:200%;max-width:none;position:absolute;left:0;top:0;height:100%;object-fit:cover;" />
          </div>
          <div class="ba-handle"><div class="ba-handle-knob"><i class="fa-solid fa-arrows-left-right"></i></div></div>
          <span class="ba-label before">Before</span>
          <span class="ba-label after">After</span>
        </div>
        <p class="ba-caption">${b.label}</p>
      </div>`).join('');
    initBASliders();
  }
  renderBA();

  document.getElementById('ba-filters').addEventListener('click', e => {
    const btn = e.target.closest('.ba-filter-btn');
    if (!btn) return;
    document.querySelectorAll('#ba-filters .ba-filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderBA(btn.dataset.filter);
  });

  function initBASliders() {
    document.querySelectorAll('.ba-slider').forEach(slider => {
      const wrap = slider.querySelector('.ba-before-wrap');
      const beforeImg = wrap.querySelector('img');
      const handle = slider.querySelector('.ba-handle');
      let dragging = false;

      function setPos(clientX) {
        const rect = slider.getBoundingClientRect();
        let pct = ((clientX - rect.left) / rect.width) * 100;
        pct = Math.max(0, Math.min(100, pct));
        wrap.style.width = pct + '%';
        handle.style.left = pct + '%';
        beforeImg.style.width = (rect.width / (rect.width * (pct / 100) || 1)) * 100 + '%';
      }
      // simplified: keep before image full-width relative to wrap
      function setPosSimple(clientX) {
        const rect = slider.getBoundingClientRect();
        let pct = ((clientX - rect.left) / rect.width) * 100;
        pct = Math.max(0, Math.min(100, pct));
        wrap.style.width = pct + '%';
        handle.style.left = pct + '%';
      }

      const start = () => { dragging = true; };
      const stop = () => { dragging = false; };
      const move = (e) => {
        if (!dragging) return;
        const x = e.touches ? e.touches[0].clientX : e.clientX;
        setPosSimple(x);
      };

      handle.addEventListener('mousedown', start);
      handle.addEventListener('touchstart', start, { passive: true });
      window.addEventListener('mouseup', stop);
      window.addEventListener('touchend', stop);
      window.addEventListener('mousemove', move);
      window.addEventListener('touchmove', move, { passive: true });
      slider.addEventListener('click', (e) => setPosSimple(e.clientX));
    });
    // fix before image sizing (make it match container, not stretched double)
    document.querySelectorAll('.ba-before-wrap img').forEach(img => {
      img.style.width = '';
      img.style.maxWidth = 'none';
    });
    document.querySelectorAll('.ba-slider').forEach(slider => {
      const rect = slider.getBoundingClientRect();
      const wrap = slider.querySelector('.ba-before-wrap');
      const img = wrap.querySelector('img');
      img.style.width = rect.width + 'px';
      img.style.height = rect.height + 'px';
    });
  }

  /* ---------------- Gallery Masonry ---------------- */
  const GALLERY = [
    { cat: 'interior', src: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80', h: 380, label: 'Clinic Interior' },
    { cat: 'team', src: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80', h: 300, label: 'Our Friendly Team' },
    { cat: 'interior', src: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80', h: 440, label: 'Treatment Room' },
    { cat: 'procedures', src: 'https://images.unsplash.com/photo-1609840114035-3c981b782dcf?auto=format&fit=crop&w=600&q=80', h: 340, label: 'Modern Equipment' },
    { cat: 'patients', src: 'https://images.unsplash.com/photo-1517840901100-8179e982acb7?auto=format&fit=crop&w=600&q=80', h: 300, label: 'Smiling Patient' },
    { cat: 'interior', src: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=600&q=80', h: 400, label: 'Waiting Area' },
    { cat: 'procedures', src: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80', h: 360, label: 'Dental Procedure' },
    { cat: 'team', src: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80', h: 420, label: 'Dentist On Duty' },
    { cat: 'patients', src: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=600&q=80', h: 320, label: 'Happy Patient' },
    { cat: 'interior', src: 'https://images.unsplash.com/photo-1583912267550-d6c2ac3196c0?auto=format&fit=crop&w=600&q=80', h: 300, label: 'Reception Desk' },
    { cat: 'procedures', src: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80', h: 380, label: 'Precision Care' },
    { cat: 'team', src: 'https://images.unsplash.com/photo-1622902046580-2b47f47f5471?auto=format&fit=crop&w=600&q=80', h: 340, label: 'Specialist Team' },
  ];

  const masonryGrid = document.getElementById('masonry-grid');
  function renderGallery(filter = 'all') {
    const items = GALLERY.filter(g => filter === 'all' || g.cat === filter);
    masonryGrid.innerHTML = items.map(g => `
      <div class="masonry-item" data-aos="fade-up">
        <img src="${g.src}" alt="${g.label}" loading="lazy" style="height:${g.h}px;object-fit:cover;" data-full="${g.src.replace('w=600','w=1400')}" />
        <div class="overlay">${g.label}</div>
      </div>`).join('');
  }
  renderGallery();
  document.getElementById('gallery-filters').addEventListener('click', e => {
    const btn = e.target.closest('.ba-filter-btn');
    if (!btn) return;
    document.querySelectorAll('#gallery-filters .ba-filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderGallery(btn.dataset.filter);
  });

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
  const TESTIMONIALS = [
    { name: 'Sarah Jimenez', photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80', rating: 5, treatment: 'Smile Makeover', review: '"Absolutely the best dental experience I\'ve ever had. The team made me feel comfortable from start to finish, and my smile has never looked better!"' },
    { name: 'Marcus Tan', photo: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=100&q=80', rating: 5, treatment: 'Dental Implants', review: '"Professional, gentle, and truly caring. Dr. Navarro explained every step and the results exceeded my expectations."' },
    { name: 'Elena Cruz', photo: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?auto=format&fit=crop&w=100&q=80', rating: 5, treatment: 'Invisalign', review: '"My Invisalign journey here was smooth and well-managed. The clinic itself feels more like a spa than a dental office!"' },
    { name: 'James Wu', photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80', rating: 5, treatment: 'Teeth Whitening', review: '"Quick, painless, and the results were dramatic. Highly recommend Radiance Dental to anyone looking for quality care."' },
    { name: 'Priya Santos', photo: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=100&q=80', rating: 5, treatment: "Kids' Dentistry", review: '"My daughter used to be terrified of dentists — Dr. Lin changed that completely. So patient and kind with children."' },
  ];
  const tWrapper = document.getElementById('testimonial-wrapper');
  tWrapper.innerHTML = TESTIMONIALS.map(t => `
    <div class="swiper-slide">
      <div class="testimonial-card">
        <div class="stars">${'<i class="fa-solid fa-star"></i>'.repeat(t.rating)}</div>
        <p class="review">${t.review}</p>
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
      spaceBetween: 24,
      loop: true,
      autoplay: { delay: 4500, disableOnInteraction: false },
      navigation: { nextEl: '.testimonial-next', prevEl: '.testimonial-prev' },
      breakpoints: { 768: { slidesPerView: 2 }, 1100: { slidesPerView: 3 } },
    });
  }

  /* ---------------- Promotions ---------------- */
  const PROMOS = [
    { badge: 'Limited Time', title: '20% Off Teeth Whitening', desc: 'Brighten your smile this month with our professional whitening treatment.', bg: 'linear-gradient(135deg,#38bdf8,#0ea5e9)' },
    { badge: 'New Patients', title: 'Free Dental Consultation', desc: 'Book your first visit and receive a complimentary consultation and X-ray.', bg: 'linear-gradient(135deg,#63cfa6,#3fb98c)' },
    { badge: 'Family Package', title: 'Family Dental Packages', desc: 'Bundle checkups and cleanings for the whole family at a special rate.', bg: 'linear-gradient(135deg,#f6c667,#f59e0b)' },
    { badge: 'Students', title: 'Student Discount — 15% Off', desc: 'Show your student ID and save on general dentistry services.', bg: 'linear-gradient(135deg,#a78bfa,#7c3aed)' },
    { badge: 'Seniors', title: 'Senior Citizen Discount', desc: 'Special pricing and priority scheduling for our senior patients.', bg: 'linear-gradient(135deg,#fb7185,#e11d48)' },
    { badge: 'Ongoing', title: 'Refer & Earn Rewards', desc: 'Refer a friend and both of you receive a treatment credit.', bg: 'linear-gradient(135deg,#34d399,#059669)' },
  ];
  document.getElementById('promo-grid').innerHTML = PROMOS.map((p, i) => `
    <div class="promo-card" style="background:${p.bg}" data-aos="fade-up" data-aos-delay="${(i % 3) * 90}">
      <span class="badge">${p.badge}</span>
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <a href="#booking">Claim Offer <i class="fa-solid fa-arrow-right"></i></a>
    </div>`).join('');

  /* ---------------- Insurance ---------------- */
  const INSURERS = ['Delta Dental','MetLife','Cigna','Aetna','Guardian','United Healthcare'];
  document.getElementById('insurance-grid').innerHTML = INSURERS.map(name => `
    <div class="insurance-logo" data-aos="fade-up"><span class="font-heading font-bold text-sm text-slateink/70">${name}</span></div>`).join('');

  /* ---------------- Facilities ---------------- */
  const FACILITIES = [
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
  ];
  document.getElementById('facilities-grid').innerHTML = FACILITIES.map((f, i) => `
    <div class="facility-card" data-aos="zoom-in" data-aos-delay="${(i % 5) * 70}">
      <i class="fa-solid ${f.icon}"></i>
      <h4>${f.title}</h4>
    </div>`).join('');

  /* ---------------- FAQ ---------------- */
  const FAQS = [
    { q: 'Do you accept walk-ins?', a: 'Yes, we welcome walk-ins whenever possible, though we recommend booking an appointment to guarantee your preferred time slot.' },
    { q: 'How often should I visit the dentist?', a: 'We recommend a checkup and cleaning every six months to maintain optimal oral health, though your dentist may suggest a different schedule based on your needs.' },
    { q: 'Do you offer payment plans?', a: 'Yes, we offer flexible 0% interest installment plans for most major treatments. Speak with our front desk team for details.' },
    { q: 'What insurance do you accept?', a: 'We accept most major insurance providers including Delta Dental, MetLife, Cigna, Aetna, Guardian, and United Healthcare.' },
    { q: 'How long does teeth whitening take?', a: 'In-office professional whitening typically takes about 60–90 minutes and delivers immediate, visible results.' },
    { q: 'What should I do in a dental emergency?', a: 'Call our 24/7 emergency line immediately at +1 (555) 111-9999. For knocked-out teeth, keep the tooth moist and come in as soon as possible.' },
  ];
  const faqAccordion = document.getElementById('faq-accordion');
  faqAccordion.innerHTML = FAQS.map((f, i) => `
    <div class="faq-item" data-aos="fade-up" data-aos-delay="${i * 50}">
      <button class="faq-question" aria-expanded="false">
        <span>${f.q}</span>
        <i class="fa-solid fa-plus faq-icon"></i>
      </button>
      <div class="faq-answer"><div class="faq-answer-inner">${f.a}</div></div>
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

  /* ---------------- Blog ---------------- */
  const BLOG_POSTS = [
    { tag: 'Oral Health', title: 'How to Maintain Healthy Teeth', excerpt: 'Simple daily habits that make a lasting difference in your oral health and confidence.', img: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80', date: 'Jun 12, 2026', read: '4 min read' },
    { tag: 'Treatments', title: 'Signs You Need a Root Canal', excerpt: 'Learn the warning signs and how modern root canal therapy is virtually pain-free.', img: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80', date: 'Jun 3, 2026', read: '5 min read' },
    { tag: 'Nutrition', title: 'Foods That Damage Teeth', excerpt: 'Discover which everyday foods and drinks may be silently harming your enamel.', img: 'https://images.unsplash.com/photo-1517840901100-8179e982acb7?auto=format&fit=crop&w=600&q=80', date: 'May 22, 2026', read: '3 min read' },
    { tag: 'Prevention', title: 'Benefits of Regular Dental Cleaning', excerpt: 'Why professional cleanings matter more than brushing alone for long-term health.', img: 'https://images.unsplash.com/photo-1609840114035-3c981b782dcf?auto=format&fit=crop&w=600&q=80', date: 'May 10, 2026', read: '4 min read' },
    { tag: 'Orthodontics', title: 'How Invisalign Works', excerpt: 'A step-by-step look at the clear aligner journey, from consultation to your new smile.', img: 'https://images.unsplash.com/photo-1523301343968-6a6ebf63c672?auto=format&fit=crop&w=600&q=80', date: 'Apr 28, 2026', read: '6 min read' },
    { tag: 'Cosmetic', title: 'Is a Smile Makeover Right for You?', excerpt: 'Explore the treatments that combine into a fully personalized smile transformation.', img: 'https://images.unsplash.com/photo-1580281657702-257584239a55?auto=format&fit=crop&w=600&q=80', date: 'Apr 15, 2026', read: '5 min read' },
  ];
  document.getElementById('blog-grid').innerHTML = BLOG_POSTS.map((b, i) => `
    <article class="blog-card" data-aos="fade-up" data-aos-delay="${(i % 3) * 90}">
      <img src="${b.img}" alt="${b.title}" loading="lazy" />
      <div class="body">
        <span class="tag">${b.tag}</span>
        <h3>${b.title}</h3>
        <p>${b.excerpt}</p>
        <div class="meta"><i class="fa-regular fa-calendar"></i> ${b.date} <span>&middot;</span> ${b.read}</div>
      </div>
    </article>`).join('');

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
    fabToggle.style.transform = fabOpen ? 'rotate(0deg)' : 'rotate(0deg)';
  });
  fabIcon.classList.remove('fa-plus'); fabIcon.classList.add('fa-xmark');

  /* ---------------- Chatbot Widget ---------------- */
  const chatbot = document.getElementById('chatbot');
  const chatbotBody = document.getElementById('chatbot-body');
  const chatbotForm = document.getElementById('chatbot-form');
  const chatbotInput = document.getElementById('chatbot-input');

  // Floating chat bubble launcher (bottom-right, above FAB stack is left side for chat)
  const chatLauncher = document.createElement('button');
  chatLauncher.id = 'chat-launcher';
  chatLauncher.className = 'fixed z-40 bottom-24 right-6 sm:bottom-6 sm:right-24 w-14 h-14 rounded-full bg-charcoal text-white shadow-soft flex items-center justify-center text-lg';
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
    { keys: ['hour', 'open', 'time'], reply: 'We\'re open Monday–Friday 9AM–6PM and Saturday 9AM–2PM. We\'re closed Sundays except for emergencies.' },
    { keys: ['price', 'cost', 'much'], reply: 'Pricing varies by treatment. Book a free consultation and we\'ll provide a personalized quote!' },
    { keys: ['whiten'], reply: 'Our professional teeth whitening takes about 60–90 minutes and is currently 20% off — check our Promotions section!' },
    { keys: ['implant'], reply: 'We offer full dental implant services with our oral surgery specialist, Dr. Elias Navarro. Want to book a consultation?' },
    { keys: ['invisalign', 'braces', 'align'], reply: 'Dr. Daniel Cruz specializes in Invisalign and orthodontics. We\'d love to assess your smile — shall I help you book?' },
    { keys: ['emergency'], reply: 'For dental emergencies, please call our 24/7 line at +1 (555) 111-9999 right away.' },
    { keys: ['book', 'appointment', 'schedule'], reply: 'You can book directly using our appointment form — scroll to the "Book Appointment" section or click the calendar icon!' },
    { keys: ['insurance'], reply: 'We accept Delta Dental, MetLife, Cigna, Aetna, Guardian, and United Healthcare.' },
  ];
  function botReply(msg) {
    const lower = msg.toLowerCase();
    const found = CANNED_RESPONSES.find(r => r.keys.some(k => lower.includes(k)));
    return found ? found.reply : "Thanks for your message! For detailed questions, feel free to call us at +1 (555) 123-4567 or book a consultation directly.";
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
});

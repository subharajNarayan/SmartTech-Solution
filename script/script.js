document.addEventListener("DOMContentLoaded", function () {
  // 1. INITIALIZE SWIPER SLIDER
  const swiper = new Swiper('.client-logo-swiper', {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      576: { slidesPerView: 3, spaceBetween: 30 },
      768: { slidesPerView: 4, spaceBetween: 30 },
      1024: { slidesPerView: 5, spaceBetween: 40 },
    },
  });

  // REGISTER GSAP PLUGINS
  gsap.registerPlugin(ScrollTrigger);

  // ==========================================
  // A. TOP BANNER ANIMATIONS (Load on Reveal)
  // ==========================================
  const bannerTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".top-banner",
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });

  // Staggered text presentation
  bannerTimeline.from(".banner_frame-2 div", {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out"
  });

  // Reveal description paragraphs
  bannerTimeline.from(".we-deliver", {
    y: 30,
    opacity: 0,
    duration: 0.6,
    ease: "power2.out"
  }, "-=0.4");

  // Snap interaction buttons into action
  bannerTimeline.from(".inner_banner_frame-4 button", {
    scale: 0.9,
    opacity: 0,
    duration: 0.5,
    stagger: 0.15,
    ease: "back.out(1.7)"
  }, "-=0.3");

  // Subtle drift for structural mock/text container on the right
  bannerTimeline.from(".frame-9", {
    x: 40,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
  }, "-=0.6");



  // ==========================================
  // IDEA TO IMPACT SECTION ANIMATION
  // ==========================================
  const ideaImpactTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".idea-impact-section",
      start: "top 75%",
      toggleActions: "play none none reverse",
    },
  });

  // 1. Reveal Title with upward slide
  ideaImpactTimeline.from(".idea-impact-section .idea-impact-title", {
    y: 40,
    opacity: 0,
    duration: 0.6,
    ease: "power2.out",
  });

  // 2. Reveal Paragraph Text
  ideaImpactTimeline.from(".idea-impact-section .idea-impact-desc", {
    y: 30,
    opacity: 0,
    duration: 0.6,
    ease: "power2.out",
  }, "-=0.4");

  // 3. Pop in Learn More CTA Button
  ideaImpactTimeline.from(".idea-impact-section .btn-learn-more", {
    y: 20,
    opacity: 0,
    scale: 0.95,
    duration: 0.5,
    ease: "back.out(1.5)",
  }, "-=0.3");

  // 4. Slide in Right Graphic/Image from the right with smooth scale
  ideaImpactTimeline.from(".idea-impact-section .impact-graphic", {
    x: 60,
    opacity: 0,
    scale: 0.95,
    duration: 0.8,
    ease: "power3.out",
  }, "-=0.6");
  // ==========================================
  // B. SOLUTIONS SECTION ANIMATIONS (FIXED REVEAL)
  // ==========================================
  const solutionsTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".solutions-section",
      start: "top 75%",
      toggleActions: "play none none reverse"
    }
  });

  // Scale up the inner center node circle
  solutionsTimeline.fromTo(".solutions-section .center-node .inner-circle",
    { scale: 0, opacity: 0 },
    { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.4)" }
  );

  // Spin outer decoration ring into frame
  solutionsTimeline.fromTo(".solutions-section .center-node .outer-ring",
    { scale: 0.8, rotation: 45, opacity: 0 },
    { scale: 1, rotation: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
    "-=0.3"
  );

  // Grow vector structural grid connector lines safely
  solutionsTimeline.fromTo(".solutions-section .connector-line",
    { opacity: 0 },
    { opacity: 1, duration: 0.4, stagger: 0.1, ease: "power1.inOut" },
    "-=0.2"
  );

  // Slide contextual identity components into place smoothly
  solutionsTimeline.fromTo(".solutions-section .solution-card.card-left",
    { x: -50, opacity: 0 },
    { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
    "-=0.2"
  );

  solutionsTimeline.fromTo(".solutions-section .solution-card.card-right",
    { x: 50, opacity: 0 },
    { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
    "-=0.4"
  );

  solutionsTimeline.fromTo(".solutions-section .solution-card.card-bottom",
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
    "-=0.4"
  );

  // ==========================================
  // C. MID BANNER IMAGE (Parallax Reveal)
  // ==========================================
  gsap.from(".mid_banner-image img", {
    scrollTrigger: {
      trigger: ".mid_banner-image",
      start: "top 85%",
      end: "bottom 15%",
      scrub: true
    },
    scale: 1.15,
    yPercent: -10,
    ease: "none"
  });


  // ==========================================
  // D. OUR SERVICES SECTION (Existing + Cleaned up)
  // ==========================================
  const servicesTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".services-node-section",
      start: "top 70%",
      toggleActions: "play none none reverse",
    }
  });

  // Reveal overarching header title
  servicesTimeline.from(".services-main-title", {
    y: -40,
    opacity: 0,
    duration: 0.6,
    ease: "power2.out"
  });

  // Pop central services anchor node
  servicesTimeline.to(".inner-service-circle", {
    scale: 1,
    opacity: 1,
    duration: 0.5,
    ease: "back.out(1.5)"
  }, "-=0.2");

  servicesTimeline.fromTo(".outer-dashed-ring",
    { scale: 0.8, opacity: 0, rotation: -30 },
    { scale: 1, opacity: 1, rotation: 0, duration: 0.5, ease: "power2.out" },
    "-=0.2"
  );

  // Flow cards in sequence cleanly
  servicesTimeline.fromTo(".card-left-node",
    { opacity: 0, x: -100 },
    { opacity: 1, x: 0, duration: 0.6, ease: "power3.out" },
    "-=0.2"
  );
  servicesTimeline.to(".card-left-node .service-icon-node", {
    scale: 1,
    duration: 0.4,
    ease: "back.out(1.8)"
  }, "-=0.3");

  servicesTimeline.fromTo(".card-right-node",
    { opacity: 0, x: 100 },
    { opacity: 1, x: 0, duration: 0.6, ease: "power3.out" },
    "-=0.4"
  );
  servicesTimeline.to(".card-right-node .service-icon-node", {
    scale: 1,
    duration: 0.4,
    ease: "back.out(1.8)"
  }, "-=0.3");

  servicesTimeline.fromTo(".card-bottom-node",
    { opacity: 0, y: 100 },
    { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
    "-=0.4"
  );
  servicesTimeline.to(".card-bottom-node .service-icon-node", {
    scale: 1,
    duration: 0.4,
    ease: "back.out(1.8)"
  }, "-=0.3");


  // ==========================================
  // E. LOWER BANNER IMAGE (Parallax Reveal)
  // ==========================================
  gsap.from(".lower_banner-image img", {
    scrollTrigger: {
      trigger: ".lower_banner-image",
      start: "top 85%",
      end: "bottom 15%",
      scrub: true
    },
    scale: 1.15,
    yPercent: -10,
    ease: "none"
  });


  // ==========================================
  // F. CLIENTS & METRICS SECTION
  // ==========================================
  const clientsTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".clients-section",
      start: "top 75%",
      toggleActions: "play none none reverse"
    }
  });

  clientsTimeline.from(".clients-section .section-title", {
    y: 30,
    opacity: 0,
    duration: 0.5,
    ease: "power2.out"
  });

  // Animate the values counting up smoothly to target targets
  clientsTimeline.from(".clients-section .stat-number", {
    textContent: 0,
    duration: 1.5,
    ease: "power2.out",
    snap: { textContent: 1 },
    stagger: 0.1
  }, "-=0.5");

  // Slide Swiper slider wrapper into focus seamlessly
  clientsTimeline.from(".clients-section .slider-wrapper", {
    y: 30,
    opacity: 0,
    duration: 0.6,
    ease: "power2.out"
  }, "-=0.8");

  // ==========================================
  // G. FOOTER REVEAL ANIMATION
  // ==========================================
  gsap.from(".site-footer .footer-col", {
    scrollTrigger: {
      trigger: ".site-footer",
      start: "top 85%",
      toggleActions: "play none none reverse",
    },
    y: 40,
    opacity: 0,
    duration: 0.6,
    stagger: 0.15,
    ease: "power2.out",
  });

  // ==========================================
  // H. PAGE TRANSITIONS & HEADER ANIMATIONS
  // ==========================================
  // 1. Setup Page Transition Overlay Structure
  let overlay = document.querySelector('.page-transition-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.className = 'page-transition-overlay';
    document.body.appendChild(overlay);
  }

  // Fade Page In on Initial Page Load
  gsap.to(overlay, {
    opacity: 0,
    y: '-100%',
    duration: 0.6,
    ease: 'power2.out',
  });

  // 2. Initial Entrance Animation for Header
  gsap.from('.nav-bar', {
    y: -80,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
  });

  gsap.from('.nav-bar .image-1', {
    x: -30,
    opacity: 0,
    duration: 0.8,
    delay: 0.3,
    ease: 'power2.out',
  });

  gsap.from('.nav-bar .nav-link', {
    y: -20,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    delay: 0.4,
    ease: 'power2.out',
  });

  gsap.from('.nav-bar .button-2', {
    scale: 0.8,
    opacity: 0,
    duration: 0.6,
    delay: 0.8,
    ease: 'back.out(1.7)',
  });




  // ==========================================
  // J. TRUST & IMPACT BANNER (Stat Boxes)
  // ==========================================
  gsap.from(".banner-section .stat-box", {
    scrollTrigger: {
      trigger: ".banner-section",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
    y: 40,
    opacity: 0,
    duration: 0.7,
    stagger: 0.2,
    ease: "power2.out",
  });

  gsap.from(".banner-section .center-section", {
    scrollTrigger: {
      trigger: ".banner-section",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
    scale: 0.9,
    opacity: 0,
    duration: 0.7,
    delay: 0.2,
    ease: "back.out(1.4)",
  });

  // ==========================================
  // K. WHAT WE BUILD SECTION
  // ==========================================
  const wwbTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".what-we-build",
      start: "top 75%",
      toggleActions: "play none none reverse",
    },
  });

  wwbTimeline.from(".wwb-title-group", {
    y: 30,
    opacity: 0,
    duration: 0.6,
    ease: "power2.out",
  });

  wwbTimeline.from(".wwb-controls", {
    opacity: 0,
    x: 20,
    duration: 0.5,
    ease: "power2.out",
  }, "-=0.3");

  wwbTimeline.from(".wwb-card-frame", {
    y: 50,
    opacity: 0,
    duration: 0.7,
    ease: "power3.out",
  }, "-=0.3");

  // ==========================================
  // L. CTA BANNER (Start Your Project)
  // ==========================================
  gsap.from(".cta-banner-section .cta-card", {
    scrollTrigger: {
      trigger: ".cta-banner-section",
      start: "top 85%",
      toggleActions: "play none none reverse",
    },
    y: 40,
    opacity: 0,
    duration: 0.7,
    ease: "power3.out",
  });

  // ==========================================
  // M. TRUST & EXPERTISE (Bento Grid)
  // ==========================================
  const trustTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".trust-expertise-section",
      start: "top 75%",
      toggleActions: "play none none reverse",
    },
  });

  trustTimeline.from(".trust-title", {
    y: 30,
    opacity: 0,
    duration: 0.6,
    ease: "power2.out",
  });

  trustTimeline.from(".trust-col-left .stat-card", {
    y: 40,
    opacity: 0,
    duration: 0.6,
    stagger: 0.15,
    ease: "power3.out",
  }, "-=0.2");

  trustTimeline.from(".trust-col-right .feature-card", {
    x: 40,
    opacity: 0,
    duration: 0.6,
    stagger: 0.15,
    ease: "power3.out",
  }, "-=0.4");

  // Animate the stat numbers counting up
  gsap.utils.toArray(".trust-card .stat-number").forEach((el) => {
    const endValue = parseInt(el.textContent.replace(/\D/g, ""), 10);
    gsap.fromTo(
      el,
      { textContent: 0 },
      {
        textContent: endValue,
        duration: 1.5,
        ease: "power2.out",
        snap: { textContent: 1 },
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        onUpdate: function () {
          el.textContent = Math.ceil(this.targets()[0].textContent) + " +";
        },
      }
    );
  });

  // ==========================================
  // N. WHERE AI FITS SECTION
  // ==========================================
  const aiTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".ai-fits-section",
      start: "top 75%",
      toggleActions: "play none none reverse",
    },
  });

  aiTimeline.from(".ai-fits-left", {
    x: -50,
    opacity: 0,
    duration: 0.7,
    ease: "power3.out",
  });

  aiTimeline.from(".ai-workflow-badge", {
    opacity: 0,
    y: -10,
    duration: 0.5,
    ease: "power2.out",
  }, "-=0.4");

  aiTimeline.from(".ai-step", {
    y: 30,
    opacity: 0,
    duration: 0.5,
    stagger: 0.15,
    ease: "power3.out",
  }, "-=0.2");

  aiTimeline.from(".ai-wave-graphic img", {
    opacity: 0,
    scale: 0.95,
    duration: 0.6,
    ease: "power2.out",
  }, "-=0.2");

  // ==========================================
  // O. FAQ SECTION
  // ==========================================
  const faqTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".faq-section",
      start: "top 75%",
      toggleActions: "play none none reverse",
    },
  });

  faqTimeline.from(".faq-main-title", {
    y: 30,
    opacity: 0,
    duration: 0.6,
    ease: "power2.out",
  });

  faqTimeline.from(".faq-left-col", {
    x: -30,
    opacity: 0,
    duration: 0.6,
    ease: "power2.out",
  }, "-=0.3");

  faqTimeline.from(".faq-item", {
    y: 20,
    opacity: 0,
    duration: 0.5,
    stagger: 0.1,
    ease: "power2.out",
  }, "-=0.3");

  // ==========================================
  // P. TALK TO US CTA SECTION
  // ==========================================
  gsap.from(".talk-cta-section .talk-cta-card", {
    scrollTrigger: {
      trigger: ".talk-cta-section",
      start: "top 85%",
      toggleActions: "play none none reverse",
    },
    y: 40,
    opacity: 0,
    duration: 0.7,
    ease: "power3.out",
  });


  // 3. Highlight Active Page Link Automatically based on Current URL
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-bar a.nav-link');

  navLinks.forEach((link) => {
    const href = link.getAttribute('href').replace('/', '');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // 4. Smooth Exit Redirect Transitions on Click
  const pageLinks = document.querySelectorAll(
    '.nav-bar a[href], .page-transition-btn'
  );

  pageLinks.forEach((link) => {
    link.addEventListener('click', function (e) {
      const targetUrl = this.getAttribute('href');

      // Check if URL is local and not an anchor/external link
      if (
        targetUrl &&
        !targetUrl.startsWith('#') &&
        !targetUrl.startsWith('http') &&
        !targetUrl.startsWith('tel:') &&
        !targetUrl.startsWith('mailto:')
      ) {
        e.preventDefault();

        // Animate overlay transition prior to location push
        gsap.set(overlay, { y: '100%', opacity: 1 });
        gsap.to(overlay, {
          y: '0%',
          duration: 0.5,
          ease: 'power2.in',
          onComplete: () => {
            window.location.href = targetUrl;
          },
        });
      }
    });
  });

  // 5. Shrink & Background Blur Transition Header on Scroll
  window.addEventListener('scroll', function () {
    const navBar = document.querySelector('.nav-bar');
    if (window.scrollY > 50) {
      navBar.classList.add('scrolled');
    } else {
      navBar.classList.remove('scrolled');
    }
  });

  // ==========================================
  // I. MOBILE DRAWER TOGGLE & SCROLL LOCK
  // ==========================================
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  // Helper function to toggle background scrolling
  function setScrollLock(isLocked) {
    if (isLocked) {
      document.body.classList.add('no-scroll');
      document.documentElement.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
      document.documentElement.classList.remove('no-scroll');
    }
  }

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function (e) {
      e.stopPropagation();
      const isOpen = navMenu.classList.toggle('open');
      navToggle.classList.toggle('open');

      // Lock/Unlock background scroll reliably across all browsers
      setScrollLock(isOpen);
    });

    // Close menu and unlock scroll on link click inside drawer
    navMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        navToggle.classList.remove('open');
        setScrollLock(false);
      });
    });

    // Close drawer and unlock scroll when clicking outside
    document.addEventListener('click', function (e) {
      if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
        navMenu.classList.remove('open');
        navToggle.classList.remove('open');
        setScrollLock(false);
      }
    });
  }















  // ==========================================
  // FLOATING HAMBURGER & ANIMATED DRAWER (GSAP)
  // ==========================================
  const floatingToggle = document.getElementById('floatingNavToggle');
  const drawerCloseBtn = document.getElementById('drawerCloseBtn');
  const navDrawer = document.getElementById('animatedNavDrawer');
  const backdrop = navDrawer.querySelector('.drawer-backdrop');
  const drawerContent = navDrawer.querySelector('.drawer-content');
  const drawerItems = navDrawer.querySelectorAll('.drawer-link-item');
  const drawerCta = navDrawer.querySelector('.drawer-cta-wrapper');

  // Create GSAP Timeline for smooth drawer reveal
  const navTL = gsap.timeline({ paused: true, reversed: true });

  navTL
    .set(navDrawer, { visibility: 'visible' })
    .to(backdrop, { opacity: 1, duration: 0.4, ease: 'power2.out' })
    .to(drawerContent, { x: '0%', duration: 0.5, ease: 'power3.out' }, '-=0.3')
    .from(
      drawerItems,
      {
        x: 40,
        opacity: 0,
        duration: 0.4,
        stagger: 0.08,
        ease: 'power2.out',
      },
      '-=0.2'
    )
    .from(
      drawerCta,
      {
        y: 20,
        opacity: 0,
        duration: 0.4,
        ease: 'power2.out',
      },
      '-=0.2'
    );

  function openDrawer() {
    floatingToggle.classList.add('active');
    navDrawer.classList.add('active');
    setScrollLock(true);
    navTL.play();
  }

  function closeDrawer() {
    floatingToggle.classList.remove('active');
    navTL.reverse();
    navTL.eventCallback('onReverseComplete', () => {
      navDrawer.classList.remove('active');
      setScrollLock(false);
    });
  }

  if (floatingToggle) {
    floatingToggle.addEventListener('click', () => {
      if (navTL.reversed()) {
        openDrawer();
      } else {
        closeDrawer();
      }
    });
  }

  if (drawerCloseBtn) {
    drawerCloseBtn.addEventListener('click', closeDrawer);
  }

  if (backdrop) {
    backdrop.addEventListener('click', closeDrawer);
  }

  // Close drawer on ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !navTL.reversed()) {
      closeDrawer();
    }
  });

  // Automatically highlight active page link inside the animated mobile drawer
  const drawerNavLinks = document.querySelectorAll('.animated-nav-drawer a.drawer-link');

  drawerNavLinks.forEach((link) => {
    const href = link.getAttribute('href').replace('/', '');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});
















document.addEventListener('DOMContentLoaded', function () {
  const counterEl = document.getElementById('wwbCounter');

  const wwbSwiper = new Swiper('.wwb-swiper', {
    loop: true,
    speed: 500,
    navigation: {
      nextEl: '.wwb-next',
      prevEl: '.wwb-prev',
    },
    on: {
      init: function (swiper) {
        updateCounter(swiper);
      },
      slideChange: function (swiper) {
        updateCounter(swiper);
      },
    },
  });

  function updateCounter(swiper) {
    if (!counterEl) return;
    const current = swiper.realIndex + 1;
    const totalRealSlides = 5;
    counterEl.textContent = `${current}/${totalRealSlides}`;
  }
});



document.addEventListener('DOMContentLoaded', function () {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach((item) => {
    const questionBtn = item.querySelector('.faq-question');
    const icon = item.querySelector('.faq-icon i');

    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all other active items
      faqItems.forEach((otherItem) => {
        otherItem.classList.remove('active');
        const otherBtn = otherItem.querySelector('.faq-question');
        const otherIcon = otherItem.querySelector('.faq-icon i');

        if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
        if (otherIcon) {
          otherIcon.className = 'fa-solid fa-plus';
        }
      });

      // Toggle current item
      if (!isActive) {
        item.classList.add('active');
        questionBtn.setAttribute('aria-expanded', 'true');
        if (icon) icon.className = 'fa-solid fa-xmark';
      }
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  // Register GSAP ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  // 1. Hero / About Us Header Section Animation
  const aboutTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".about-us",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  aboutTl
    .from(".about-us .about-us_", {
      opacity: 0,
      y: 20,
      duration: 0.5,
      ease: "power2.out",
    })
    .from(
      ".about-us .smart-digital-solutions",
      {
        opacity: 0,
        y: 30,
        duration: 0.5,
        ease: "power2.out",
      },
      "-=0.3"
    )
    .from(
      ".about-us .since",
      {
        opacity: 0,
        y: 30,
        duration: 0.5,
        ease: "power2.out",
      },
      "-=0.3"
    )
    .from(
      ".about-us .about-paragraph",
      {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: "power2.out",
      },
      "-=0.3"
    )
    .from(
      ".about-us .button",
      {
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: "power2.out",
      },
      "-=0.3"
    )
    .from(
      ".about-us .about-img",
      {
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        ease: "back.out(1.4)",
      },
      "-=0.6"
    );

  // 2. Vision, Mission & Goal (VMG) Section Animation
  // Animate the background SVG Arc
  gsap.from(".vmg-arc-svg path", {
    scrollTrigger: {
      trigger: ".vmg-section",
      start: "top 75%",
      toggleActions: "play none none reverse",
    },
    strokeDashoffset: 1000,
    opacity: 0,
    duration: 1.5,
    ease: "power2.inOut",
  });

  // Staggered entrance for Vision, Mission, Goal Cards
  gsap.from(".vmg-card", {
    scrollTrigger: {
      trigger: ".vmg-container",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
    opacity: 0,
    y: 50,
    scale: 0.95,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out",
  });

  // Fade-in bottom banner mesh image
  gsap.from(".vmg-bottom-banner", {
    scrollTrigger: {
      trigger: ".vmg-bottom-banner",
      start: "top 85%",
      toggleActions: "play none none reverse",
    },
    opacity: 0,
    y: 40,
    duration: 1,
    ease: "power2.out",
  });

  // 3. Meet Our Team Section Animation
  const teamTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".our-team-section",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  teamTl
    .from(".team-subheading", {
      opacity: 0,
      y: 20,
      duration: 0.4,
      ease: "power2.out",
    })
    .from(
      ".team-heading",
      {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: "power2.out",
      },
      "-=0.2"
    )
    .from(
      ".team-swiper",
      {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.4"
    );

  
});
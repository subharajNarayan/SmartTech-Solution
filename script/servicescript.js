document.addEventListener("DOMContentLoaded", () => {
  // Register GSAP ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  // 1. Animate Hero Section Elements on Load / Scroll
  const heroTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".services",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  heroTl
    .from(".services .your-journey", {
      opacity: 0,
      y: 30,
      duration: 0.6,
      ease: "power2.out",
    })
    .from(
      ".services .from-concept-to",
      {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: "power2.out",
      },
      "-=0.4"
    )
    .from(
      ".services .engineering-trusted-solutions",
      {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: "power2.out",
      },
      "-=0.4"
    )
    .from(
      ".services .service-img",
      {
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        ease: "back.out(1.4)",
      },
      "-=0.6"
    );

  // 2. Animate Section Title
  gsap.from(".phases-title", {
    scrollTrigger: {
      trigger: ".phases",
      start: "top 85%",
      toggleActions: "play none none reverse",
    },
    opacity: 0,
    y: 40,
    duration: 0.8,
    ease: "power3.out",
  });

  // 3. Staggered Scroll Animation for Phase Cards
  const cards = gsap.utils.toArray(".phase-card");

  cards.forEach((card) => {
    // Find step number inside card to apply pop effect
    const numberBadge = card.querySelector(".step-number");

    gsap.fromTo(
      card,
      {
        opacity: 0,
        y: 60,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Number Badge Pop-in
    if (numberBadge) {
      gsap.fromTo(
        numberBadge,
        {
          scale: 0,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          delay: 0.2,
          ease: "back.out(2)",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  });

  // 4. Connecting SVG Lines Draw/Fade Animation
  const connectingLines = gsap.utils.toArray(".connecting-line");

  connectingLines.forEach((line) => {
    gsap.fromTo(
      line,
      {
        opacity: 0,
        scaleY: 0,
        transformOrigin: "top center",
      },
      {
        opacity: 1,
        scaleY: 1,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: line,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });
});
document.addEventListener("DOMContentLoaded", () => {
  // Register GSAP ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  // 1. Hero / CAD Software Banner Animation (Matches About Us Header Timeline)
  const portfolioTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".portfolio",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  portfolioTl
    .from(".portfolio .cad-software", {
      opacity: 0,
      y: 20,
      duration: 0.5,
      ease: "power2.out",
    })
    .from(
      ".portfolio .we-build-and",
      {
        opacity: 0,
        y: 30,
        duration: 0.5,
        ease: "power2.out",
      },
      "-=0.3"
    )
    .from(
      ".portfolio .button",
      {
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: "power2.out",
      },
      "-=0.3"
    )
    .from(
      ".portfolio .portfolio-img",
      {
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        ease: "back.out(1.4)",
      },
      "-=0.6"
    );

  // 2. Featured Projects Section Animation (Matches VMG Cards Staggered Animation)
  // Section Heading
  gsap.from(".featured-title", {
    scrollTrigger: {
      trigger: ".featured-project",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
    opacity: 0,
    y: 30,
    duration: 0.6,
    ease: "power2.out",
  });

  // Staggered entrance for Project Cards (identical trigger setup to .vmg-card)
  gsap.from(".project-card", {
    scrollTrigger: {
      trigger: ".projects-grid",
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

  // 3. Valued Clients Section Animation (Matches Meet Our Team Timeline)
  // const clientsTl = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: ".clients-section",
  //     start: "top 80%",
  //     toggleActions: "play none none reverse",
  //   },
  // });

  clientsTl
    .from(".clients-section .section-title", {
      opacity: 0,
      y: 20,
      duration: 0.4,
      ease: "power2.out",
    })
    .from(
      ".clients-section .stat-card",
      {
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
      },
      "-=0.2"
    )
    .from(
      ".clients-section .slider-wrapper",
      {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.3"
    );
});
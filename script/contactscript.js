document.addEventListener("DOMContentLoaded", function () {
  // Register GSAP Plugins
  if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);

    // ==========================================
    // A. HERO SECTION ANIMATIONS (.contact-us)
    // ==========================================
    const heroTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".contact-us",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    heroTl
      .from(".contact-us .your-vision-our", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
      })
      .from(
        ".contact-us .engineering-your-vision",
        {
          y: 40,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
        },
        "-=0.4"
      )
      .from(
        ".contact-us .together",
        {
          y: 40,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
        },
        "-=0.5"
      )
      .from(
        ".contact-us .right-image img",
        {
          scale: 0.85,
          x: 50,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
        },
        "-=0.6"
      );

    // ==========================================
    // B. CONTACT HEADER & EMAIL BUTTON REVEAL
    // ==========================================
    const headerTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".contact-form",
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
    });

    headerTl
      .from(".contact-header h2", {
        y: 40,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
      })
      .from(
        ".reach-out p",
        {
          y: 20,
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.4"
      )
      .from(
        ".contact-info_button",
        {
          scale: 0.9,
          opacity: 0,
          duration: 0.5,
          ease: "back.out(10.1)",
          clearProps: "opacity,transform", // Clears inline styles so CSS hover works perfectly
        },
        "-=0.3"
      )

    // ==========================================
    // C. CONVERSATIONAL FORM SCROLL REVEAL
    // ==========================================
    gsap.from(".conversational-form .field-group", {
      scrollTrigger: {
        trigger: ".conversational-form",
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
      y: 35,
      opacity: 0,
      duration: 0.6,
      stagger: 0.12,
      ease: "power2.out",
    });

    gsap.from(".form-actions", {
      scrollTrigger: {
        trigger: ".form-actions",
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
      scale: 0.9,
      opacity: 0,
      duration: 0.5,
      ease: "back.out(1.5)",
    });

    // ==========================================
    // D. INTERACTIVE FIELD HIGHLIGHT
    // ==========================================
    const fieldInputs = document.querySelectorAll(".conversational-form input");

    fieldInputs.forEach((input) => {
      input.addEventListener("focus", () => {
        gsap.to(input, {
          borderColor: "var(--brand-500, #007bff)",
          duration: 0.3,
          ease: "power2.out",
        });
      });

      input.addEventListener("blur", () => {
        gsap.to(input, {
          borderColor: "rgba(255, 255, 255, 0.3)",
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });
  }
});
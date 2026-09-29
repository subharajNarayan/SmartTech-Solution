// document.addEventListener('DOMContentLoaded', function () {
//   const teamSwiper = new Swiper('.team-swiper', {
//     slidesPerView: 'auto',
//     centeredSlides: true,
//     spaceBetween: 30,
//     loop: true,
//     speed: 800,
//     autoplay: {
//       delay: 2500,
//       disableOnInteraction: false,
//       pauseOnMouseEnter: true,
//     },
//     breakpoints: {
//       320: {
//         slidesPerView: 1.3,
//         spaceBetween: 15,
//       },
//       768: {
//         slidesPerView: 3,
//         spaceBetween: 25,
//       },
//       1200: {
//         slidesPerView: 5,
//         spaceBetween: 35,
//       },
//       1920: {
//         slidesPerView: 5,
//         spaceBetween: 40,
//       },
//     },
//   });
// });

document.addEventListener('DOMContentLoaded', function () {
  const teamSwiper = new Swiper('.team-swiper', {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 30,
    loop: true,
    speed: 800,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    breakpoints: {
      // Mobile View: Displays 1 team card centered cleanly
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      // Small Tablet View
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      // Tablet Landscape / 1080px View (Fixes zero-gap collision)
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
      // Laptop / Desktop Views (1200px and up)
      1200: {
        slidesPerView: 5,
        spaceBetween: 35,
      },
      1920: {
        slidesPerView: 5,
        spaceBetween: 40,
      },
    },
  });
});
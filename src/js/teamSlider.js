import Swiper from "https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js"

// Team slider page d'accueil
const swiperSlider = new Swiper(".team-slider-container", {
  direction: "horizontal",
  loop: true,
  grabCursor: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
})

// Slider pa
const CaseStudyTeamSlider = new Swiper(".swiper_rea", {
  direction: "horizontal",

  slidesPerView: 1,
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },

  breakpoints: {
    // Quand la largeur de la fenêtre est >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
})

export { swiperSlider, CaseStudyTeamSlider }

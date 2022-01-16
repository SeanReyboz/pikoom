import Swiper from "https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js"

const swiperSlider = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  grabCursor: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
})

export { swiperSlider }

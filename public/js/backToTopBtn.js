"use strict"

const backToTopBtn = document.querySelector(".back-to-top-btn")
const triggerHeight = 450

const verticalScrollPosition = () => {
  if (
    document.body.scrollTop > triggerHeight ||
    document.documentElement.scrollTop > triggerHeight
  ) {
    backToTopBtn.style.visibility = "visible"
    backToTopBtn.style.opacity = "1"
  } else {
    backToTopBtn.style.visibility = "hidden"
    backToTopBtn.style.opacity = "0"
  }
}

const scrollTop = () => {
  document.body.scrollTop = 0 // Pour Safari
  document.documentElement.scrollTop = 0 // Pour les vrais navigateurs
}

export { verticalScrollPosition, scrollTop }

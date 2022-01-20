"use strict"

import Swiper from "https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js"

import { swiperSlider, CaseStudyTeamSlider } from "./teamSlider.js"
import { verticalScrollPosition, scrollTop } from "./backToTopBtn.js"
import { Cursor } from "./cursor.js"

// Créer le curseur
window.onload = () => {
  const cursor = new Cursor(document.querySelector(".cursor"))
}

// Ajout d'un écouteur d'évènement sur le bouton retour en haut
window.onscroll = () => verticalScrollPosition()

const body = document.querySelector("body")
const transition = document.querySelector(".page-transition")
const tl = new TimelineMax()

function delay(n) {
  return new Promise(done => {
    setTimeout(() => {
      done()
    }, n)
  })
}

barba.init({
  sync: true,
  transitions: [
    {
      // En quittant chaque page
      async leave() {
        const done = this.async()
        tl.to(".page-transition", {
          top: "0%",
          height: "100%",
          duration: 0.6,
          transition: "Power3.easeOut",
        })
        await delay(1000)
        done()
      },

      // En arrivant sur une nouvelle page
      enter() {
        tl.to(".page-transition", {
          top: "100%",
          height: "100%",
          duration: 0.6,
          delay: 0.2,
          transition: "Power3.easeOut",
        }).set(".page-transition", { top: "0%", height: "0%" })

        // Positionner l'utilisateur en haut du document
        scrollTop()
      },

      // Avant chaque transition
      before() {
        body.classList.add("no-scroll")
      },

      // Après chaque transition
      after() {
        body.classList.remove("no-scroll")
        // Recréer un curseur
        // Rafraichir la page
        const teamSlider = new Swiper(".team-slider-container", {
          direction: "horizontal",
          loop: true,
          grabCursor: true,
          initialSlide: Math.floor(Math.random() * 14),

          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        })
        const reaSlider = new Swiper(".swiper_rea", {
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
        return new Cursor(document.querySelector(".cursor"))
      },
    },
  ],
})

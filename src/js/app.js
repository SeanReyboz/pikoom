"use strict"

import { swiperSlider, CaseStudyTeamSlider } from "./teamSlider.js"
import { Cursor } from "./cursor.js"

// Créer le curseur
window.onload = () => {
  const cursor = new Cursor(document.querySelector(".cursor"))
}

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
          duration: 1,
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
          delay: 0.3,
          transition: "Power3.easeOut",
        }).set(".page-transition", { top: "0%", height: "0%" })
      },

      // Avant chaque transition
      before() {
        body.classList.add("no-scroll")
      },

      // Après chaque transition
      after() {
        body.classList.remove("no-scroll")
        // Recréer un curseur
        return new Cursor(document.querySelector(".cursor"))
      },
    },
  ],
})

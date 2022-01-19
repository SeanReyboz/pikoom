"use strict"

import { lerp, getMousePos } from "./utils.js"

// Grab mouse position and set it to the mouse state
let mouse = { x: 0, y: 0 }
window.addEventListener("mousemove", ev => (mouse = getMousePos(ev)))

class Cursor {
  constructor(el) {
    // variables
    this.Cursor = el
    this.Cursor.style.opacity = 0
    this.Size = Number.parseInt(this.Cursor.getAttribute("data-size")) || 10

    this.Links = document.querySelectorAll(".clickable-indicator")
    this.Buttons = document.querySelectorAll(".button")
    this.DiscoverableLinks = document.querySelectorAll(".discoverable")
    this.DraggableContent = document.querySelectorAll(".draggable")

    this.cursorConfigs = {
      x: { previous: 0, current: 0, amt: 0.2 },
      y: { previous: 0, current: 0, amt: 0.2 },
    }

    // define move function
    this.onMouseMoveEv = () => {
      this.cursorConfigs.x.previous = this.cursorConfigs.x.current = mouse.x
      this.cursorConfigs.y.previous = this.cursorConfigs.y.current = mouse.y

      // Set cursor opacity to 1 when hovered on the screen
      gsap.to(this.Cursor, {
        duration: 1,
        ease: "Power3.easeOut",
        opacity: 1,
        "--size": this.Size + "px",
      })
      // handle mouse scaling
      this.onScaleMouse()

      // raf
      requestAnimationFrame(() => this.render())
      // Clean up function
      window.removeEventListener("mousemove", this.onMouseMoveEv)
    }

    window.addEventListener("mousemove", this.onMouseMoveEv)
  }

  onScaleMouse() {
    // loop through each link in the page
    this.Links.forEach(link => {
      // scale the cursor up
      link.addEventListener("mouseenter", () => {
        this.scaleCursor(this.Cursor, 8)
        this.Cursor.classList.add("hovering-link")
      })

      // Scale it back to 0
      link.addEventListener("mouseleave", () => {
        this.scaleCursor(this.Cursor, 1)
        this.Cursor.classList.remove("hovering-link")
      })
    })

    // loop through every button like element
    this.Buttons.forEach(btn => {
      btn.addEventListener("mouseenter", () => {
        // this.scaleCursor(this.Cursor, 0)
        gsap.to(this.Cursor, {
          "--size": "0px",
          opacity: 0,
          duration: 0.6,
          ease: "Power3.easeOut",
        })
      })

      btn.addEventListener("mouseleave", () => {
        // this.scaleCursor(this.Cursor, 1)
        gsap.to(this.Cursor, {
          "--size": this.Size + "px",
          opacity: 1,
          duration: 0.6,
          ease: "Power3.easeOut",
        })
      })
    })

    // loop through every discoverable item
    this.DiscoverableLinks.forEach(link => {
      link.addEventListener("mouseenter", () => {
        this.scaleCursor(this.Cursor, 12)
        this.Cursor.classList.add("hovering-discoverable")
      })
      link.addEventListener("mouseleave", () => {
        this.scaleCursor(this.Cursor, 1)
        this.Cursor.classList.remove("hovering-discoverable")
      })
    })

    // loop through every draggable item
    this.DraggableContent.forEach(el => {
      el.addEventListener("mouseenter", () => {
        this.scaleCursor(this.Cursor, 12)
        this.Cursor.classList.add("hovering-draggable")
      })
      el.addEventListener("mouseleave", () => {
        this.scaleCursor(this.Cursor, 1)
        this.Cursor.classList.remove("hovering-draggable")
      })
    })
  }

  scaleCursor(el, amount) {
    gsap.to(el, {
      duration: 0.6,
      "--size": this.Size * amount + "px",
      ease: "Power3.easeOut",
    })
  }

  render() {
    this.cursorConfigs.x.current = mouse.x
    this.cursorConfigs.y.current = mouse.y

    // linear interpolation function
    for (const key in this.cursorConfigs) {
      this.cursorConfigs[key].previous = lerp(
        this.cursorConfigs[key].previous,
        this.cursorConfigs[key].current,
        this.cursorConfigs[key].amt
      )
    }

    // setting the cursor x and y to the html cursor element
    this.Cursor.style.transform = `translateX(${this.cursorConfigs.x.previous}px) translateY(${this.cursorConfigs.y.previous}px)`
    requestAnimationFrame(() => this.render())
  }
}

export { Cursor }

// vim:ts=2:ft=javascript

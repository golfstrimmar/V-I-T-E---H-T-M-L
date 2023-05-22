"use strict";

export class GAL {
  constructor(elem) {
    this.GAL = elem;
    this.GALitems = [...this.GAL.querySelectorAll(".GAL-item-js")];
    this.GALbutton = this.GAL.nextElementSibling;
    this.tempHeight = this.GAL.querySelector(".GAL-item-js").clientHeight;
  }
  open() {
    this.GALbutton.classList.add("_is-active");
    this.GALbutton.querySelector("span").innerHTML = "Свернуть";
    for (let i = 0; i < this.GALitems.length; i++) {
      if (this.GALitems[i].classList.contains("_is-hidden")) {
        this.GALitems[i].classList.remove("_is-hidden");
      }
    }
    this.GAL.animate([{ height: `${this.tempHeight}px` }, { height: "auto" }], {
      duration: 300,
      easing: "ease-in-out",
    });
    
    this.GAL.style.height = "auto";
  }
  close() {
    this.GALbutton.classList.remove("_is-active");
    this.GALbutton.querySelector("span").innerHTML = "Загрузить еще";
    this.GAL.style.height = this.tempHeight + "px";
    for (let i = 0; i < this.GALitems.length; i++) {
      if (i > 2) {
        this.GALitems[i].classList.add("_is-hidden");
        var tempHeight = this.GAL.querySelector(".GAL-item-js").clientHeight;
      }
    }
  }
  start() {
    for (let i = 0; i < this.GALitems.length; i++) {
      if (i > 2) {
        this.GALitems[i].classList.add("_is-hidden");
      }
    }
    this.GAL.style.height = this.tempHeight + "px";

    this.GALbutton.addEventListener("click", (e) => {
      if (!this.GALbutton.classList.contains("_is-active")) {
        this.open();
      } else {
        this.close();
      }
    });
  }
}

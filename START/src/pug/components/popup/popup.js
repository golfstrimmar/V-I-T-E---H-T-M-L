"use strict";
import Plyr from "plyr";
import Swiper, { Navigation } from "swiper";
// import { MyGalery } from "../galery/galery";

export class Popup {
  constructor(pop) {
    this.popInit = pop;
    this.rel = this.popInit.getAttribute("rel");
    this.pop = document.querySelector(".popup-js");
    this.content = "";
    this.linkPlyr = "";
    this.popoverlay = this.pop.querySelector(".popup__overlay");
    this.newPlayer = "";
    this.body = document.querySelector("body");
  }

  newPlyr(arg) {
    let r = `#${arg}`;
    this.newPlayer = new Plyr(r);
    this.newPlayer.play();
  }

  // =====================
  open() {
    this.pop.classList.add("_is-active");
    this.content = this.pop.querySelector(this.rel);
    this.content.classList.add("_is-active");
    if (this.content.matches(".popup__content--plyr")) {
      this.linkPlyr = this.content.querySelector("video").getAttribute("id");
      if (this.linkPlyr) {
        this.newPlyr(this.linkPlyr);
      }
    }
  }
  // =====================
  closePlyr() {
    document.addEventListener('click',(e) =>{ 
          if (this.newPlayer) {
            this.newPlayer.destroy();
            this.newPlayer = "";
          }
    });
  }
  // =====================
  startGalary(plasa, itemIndex) {
    this.body.classList.add("lock");
    var popupGalerySwiper = this.pop.querySelector("#popupGalerySwiper");
    popupGalerySwiper.innerHTML = "";
    for (var i = 0; i < plasa.length; i++) {
      var temp = document.createElement("li");
      temp.classList.add("slider__item", "swiper-slide");
      temp.innerHTML = ` <div class="imgs">
        <img src= "${plasa[i]}"> </img>
      </div>`;
      popupGalerySwiper.append(temp);
    }

    this.pop
      .querySelector(".popup__inner")
      .classList.add("popup__inner--galary");
    this.pop.querySelector(".popup-close-js").classList.add("close--galary");
    const mySwiperGalary = new Swiper(".slider-js-galery", {
      slidesPerView: 1,
      speed: 500,
      modules: [Navigation],
      navigation: {
        nextEl: ".arrow-galery-next",
        prevEl: ".arrow-galery-prev",
      },
      initialSlide: itemIndex,
      grabCursor: true,
    });
    setTimeout(() => {
      this.open();
    }, 200);
    this.closePlyr();
  }
  // ==========="

  // =====================
  start() {
    this.body.classList.add("lock");
    setTimeout(() => {
      this.open();
    }, 200);
    this.closePlyr();
  }
  // =====================
  static close() {
    document.querySelector("body").classList.remove("lock");
    document.querySelector(".popup-js").classList.remove("_is-active");
    document
      .querySelector(".popup-js")
      .querySelectorAll(".popup__content").forEach(element => {
        element.classList.remove("_is-active"); 
      });
    if (
      document
        .querySelector(".popup-js")
        .querySelector(".popup__inner")
        .classList.contains("popup__inner--galary")
    ) {
      document
        .querySelector(".popup-js")
        .querySelector(".popup__inner")
        .classList.remove("popup__inner--galary");

      document
        .querySelector(".popup-js")
        .querySelector(".popup-close-js")
        .classList.remove("close--galary");
    }
  }
}

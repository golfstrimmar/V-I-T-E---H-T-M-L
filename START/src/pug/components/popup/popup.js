"use strict";
import Plyr from "plyr";
import Swiper, { Navigation } from "swiper";
// import { MyGalery } from "../galery/galery";

export class Popup {
  constructor(pop) {
    this.popInit = pop;
    if (this.popInit.closest("._galery-item-js")) {
      this.category = this.popInit
        .closest("._galery-item-js")
        .getAttribute("data");
    }
    this.rel = this.popInit.getAttribute("rel");
    this.pop = document.querySelector(".popup-js");
    this.plasa = this.popInit.closest("._plasa-js");
    this.plasaRelItems = [... this.plasa.querySelectorAll("._galery-item-js")]
    this.plasaRelIt = this.plasaRelItems
      .map((el) => {
        if (el.getAttribute("data") === this.category ) {
          return el;
        }
      })
      .filter((el) => el !== undefined);
      this.initialSlide = this.plasaRelIt.indexOf(this.popInit.closest("._galery-item-js"));
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
  close() {
    this.body.classList.remove("lock");
    this.pop.classList.remove("_is-active");
    this.content.classList.remove("_is-active");
    if (this.newPlayer) {
      this.newPlayer.destroy();
      this.newPlayer = "";
    }
    if (this.rel === "#popupGalery") {
      this.pop
        .querySelector(".popup__inner")
        .classList.remove("popup__inner--galary");
      this.pop
        .querySelector(".popup-close-js")
        .classList.remove("close--galary");
    }
  }
  // =====================
  start() {
    console.log(this.plasaRelIt);
    this.body.classList.add("lock");
    if (this.rel === "#popupGalery") {
      var tempStoragePop = JSON.parse(localStorage.getItem("object"));
      var popupGalerySwiper = this.pop.querySelector("#popupGalerySwiper");
      var temp = "";
      var tempSrc = "";
      popupGalerySwiper.innerHTML = "";
      for (var i = 0; i < tempStoragePop.length; i++) {
         temp = document.createElement("li");
        tempSrc = tempStoragePop[i];
        temp.classList.add("slider__item", "swiper-slide");
        temp.innerHTML = `
          <div class="imgs">
            <img src= "${tempSrc}"> </img>
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
        initialSlide: this.initialSlide,
        grabCursor: true,
      });
    }

    setTimeout(() => {
      this.open();
    }, 200);
    document.addEventListener("click", (e) => {
      if (
        e.target.closest(".popup-overlay-js") &&
        !e.target.closest(".popup-inner-js")
      ) {
        this.close();
      }
      if (e.target.closest(".popup-close-js")) {
        this.close();
      }
    });
  }
}

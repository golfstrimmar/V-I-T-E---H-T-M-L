"use strict";
import Plyr from "plyr";
import Swiper, { Navigation } from "swiper";

export const Popup = () => {
  class Popup {
    constructor(popup) {
      this.popInit = popup;
      this.rel = this.popInit.getAttribute("rel");
      this.pop = document.querySelector(".popup-js");
      this.content = "";
      this.newPlayer = "";
      this.body = document.querySelector("body");
    }

    newPlyr(arg) {
      let r = `#${arg}`;
      this.newPlayer = new Plyr(r);
      this.newPlayer.play();
    }
    // =====================
    closePlyr() {
      if (this.newPlayer) {
        this.newPlayer.destroy();
        this.newPlayer = "";
      }
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
    startGalary(plasa, itemIndex) {
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
      mySwiperGalary.update();
      mySwiperGalary.slideTo(itemIndex, 0);
    }
    // =====================
    start() {
      this.body.classList.add("lock");
      setTimeout(() => {
        this.open();
      }, 200);
    }
    // =====================
    static close() {
      document.querySelector("body").classList.remove("lock");
      document.querySelector(".popup-js").classList.remove("_is-active");
      document
        .querySelector(".popup__content._is-active")
        .classList.remove("_is-active");
    }
  }

  const popupsInit = [...document.querySelectorAll(".popups-init-js")];
  var newPopup = {};
  var mySwiperGalary = {};
  if (document.querySelector("#slider-galery")) {
    mySwiperGalary = new Swiper(".slider-js-galery", {
      slidesPerView: 1,
      speed: 500,
      modules: [Navigation],
      navigation: {
        nextEl: ".arrow-galery-next",
        prevEl: ".arrow-galery-prev",
      },
      grabCursor: true,
    });
  }

  document.addEventListener("click", (e) => {
    popupsInit.forEach((popup) => {
      if (e.target.closest(".popups-init-js") == popup) {
        newPopup = new Popup(popup);
        newPopup.start();
      }
    });

    if (
      e.target == document.querySelector(".popup-overlay-js") ||
      e.target.closest(".popup-close-js")
    ) {
      newPopup.closePlyr();
      Popup.close();
      document.querySelector(".popup__content").classList.remove("_is-active");
    }

    if (e.target.closest("._galery-item-js")) {
      let plasa = "";
      let item = "";
      let itemIndex = 0;
      item = e.target.closest(".popups-init-js").closest("._galery-item-js");
      plasa = [...item.closest("._plasa-js").children];
      plasa = plasa.filter((el) => el.classList.contains("_is-active"));
      itemIndex = plasa.indexOf(item);
      plasa = plasa.map((el) => el.querySelector("img").getAttribute("src"));
      newPopup.startGalary(plasa, itemIndex);
    }
  });
};

"use strict";

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

    // =====================
    open() {
      this.pop.classList.add("_is-active");
      this.content = this.pop.querySelector(this.rel);
      this.content.classList.add("_is-active");
    }

    // =====================
    start(tempPopup) {
      this.popInit = tempPopup;
      this.rel = this.popInit.getAttribute("rel");
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

  var mySwiperGalary = {};

  const logikPopup = () => {
    var newPopup = new Popup(document.querySelector(".popups-init-js"));
    var tempPopup = [];

    document.addEventListener("click", (e) => {
      if (e.target.closest(".popups-init-js")) {
        tempPopup = e.target.closest(".popups-init-js");
        newPopup.start(tempPopup);
      }

      if (
        e.target == document.querySelector(".popup-overlay-js") ||
        e.target.closest(".popup-close-js")
      ) {
        Popup.close();
        document
          .querySelector(".popup__content")
          .classList.remove("_is-active");
      }
    });
  };

  logikPopup();
};

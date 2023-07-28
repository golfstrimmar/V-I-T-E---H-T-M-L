"use ctrict";
// import { Polifils } from "/src/functions";
import Swiper, { Navigation } from "swiper";

export const MyGalery = () => {
  class Galery {
    constructor(item) {
      this.Item = item;
      this.nav = this.Item.closest("._galery-nav-js");
      this.navItems = [...this.nav.querySelectorAll("._galery-nav-item-js")];
      this.body = this.Item.closest("._galery-body-js");
      this.plaza = this.body.querySelector("._plasa-js");
      this.plazaItems = [...this.plaza.querySelectorAll("._galery-item-js")];
      this.navData = this.Item.getAttribute("data");
    }

    activeNavItem() {
      this.navItems.forEach((cell) => {
        if (cell == this.Item) {
          cell.classList.add("_is-active");
          cell.setAttribute("disabled", true);
        } else {
          cell.classList.remove("_is-active");
          cell.removeAttribute("disabled");
        }
      });
    }
    startStatement() {
      this.plazaItems.forEach((cell) => {
        if (!cell.classList.contains("_is-active")) {
          setTimeout(() => {
            cell.classList.add("_is-active");
          }, 200);
        }
      });
    }
    //   // ==================================
    start() {
      this.activeNavItem();
      this.plazaItems.forEach((cell) => {
        cell.classList.remove("_is-active");
      });

      this.plazaItems.forEach((cell) => {
        var temp = cell.getAttribute("data");
        if (temp == this.navData) {
          setTimeout(() => {
            cell.classList.add("_is-active");
          }, 300);
        }
      });

      if (this.navData == "all") {
        this.startStatement();
      }
    }
    //   // ==================================
    static resetAll() {
      // [...document.querySelectorAll("._galery-item-js")].forEach((cell) => {
      //   if (cell.classList.contains("_is-active")) {
      //     cell.classList.remove("_is-active");
      //   }
      // });
      [...document.querySelectorAll("._galery-item-js")].forEach((cell) => {
        if (!cell.classList.contains("_is-active")) {
          // setTimeout(() => {
          cell.classList.add("_is-active");
          // }, 200);
        }
      });

      const closeItems = [...document.querySelectorAll("._galery-nav-js")];
      closeItems.forEach((cell) => {
        var close = [...cell.querySelectorAll("._galery-nav-item-js")];
        for (let i = 0; i < close.length; ++i) {
          close[0].classList.add("_is-active");
          close[0].setAttribute("disabled", true);
          if (i > 0) {
            close[i].classList.remove("_is-active");
            close[i].removeAttribute("disabled");
          }
        }
      });
    }
  }

  const galeryAll = document.querySelectorAll("._galery-body-js");
  var galery = {};

  document.addEventListener("click", (e) => {
    if (e.target.closest("._galery-nav-item-js")) {
      galery = new Galery(e.target.closest("._galery-nav-item-js"));
      Galery.resetAll();
      galery.start();
    } else if (
      !e.target.closest("._galery-body-js") &&
      !e.target.closest(".popup-js")
    ) {
      Galery.resetAll();
    }
  });
};

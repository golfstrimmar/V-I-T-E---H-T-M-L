"use ctrict";

export class MySideMenu {
  constructor(tab) {
    this.title = tab;
    this.tab = tab.closest(".smenu-item-js");
    this.neibours = [...this.tab.closest(".smenu-js").children];
  }

  start() {
    this.neibours.forEach((cell) => {
      if (cell == this.tab) {
        if (this.tab.classList.contains("_is-active")) {
          this.tab.classList.remove("_is-active");
          this.tab.classList.add("_not-active");

          cell.querySelectorAll(".smenu-item-js").forEach((kab) => {
            kab.classList.add("_not-active");
            kab.classList.remove("_is-active");
          });
        } else {
          this.tab.classList.add("_is-active");
          this.tab.classList.remove("_not-active");
        }
      } else {
        if (cell.classList.contains("_is-active")) {
          cell.classList.remove("_is-active");
           cell.classList.add("_not-active");
        }

        cell.querySelectorAll(".smenu-item-js").forEach((kab) => {
           kab.classList.remove("_is-active");
           kab.classList.add("_not-active");
        });
      }
    });
  }

  static resetAll() {
    [...document.querySelectorAll(".smenu-item-js")].forEach((item) => {
      if (item.classList.contains("_is-active")) {
        item.classList.remove("_is-active");
        item.classList.add("_not-active");
        setTimeout(() => {
          item.classList.remove("_not-active");
        }, 4000);
      }
    });
  }
}

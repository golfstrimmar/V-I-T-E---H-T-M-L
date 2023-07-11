"use ctrict";

export class MyTabkurz {
  constructor(tab) {
    this.title = tab;
    this.tab = tab.closest(".kab-js");
    this.neibours = [...this.tab.closest(".tabkurz-body-js").children];
  }

  start() {
    this.neibours.forEach((cell) => {
      if (cell == this.tab) {
        if (this.tab.classList.contains("_is-active")) {
          this.tab.classList.remove("_is-active");
          cell.querySelectorAll(".kab-js").forEach((kab) => {
            kab.classList.remove("_is-active");
          });
        } else {
          this.tab.classList.add("_is-active");
        }
      } else {
        cell.classList.remove("_is-active");
        cell.querySelectorAll(".kab-js").forEach((kab) => {
          kab.classList.remove("_is-active");
        });
      }
    });
  }

  static resetAll() {
    [...document.querySelectorAll(".kab-js")].forEach((item) => {
      item.classList.remove("_is-active");
    });
  }
}

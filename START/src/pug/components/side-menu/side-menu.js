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
         
          cell.querySelectorAll(".smenu-item-js").forEach((kab) => {
            kab.classList.remove("_is-active");
          });
        } else {
          this.tab.classList.add("_is-active");
          
        }
      } else {
        cell.classList.remove("_is-active");

        cell.querySelectorAll(".smenu-item-js").forEach((kab) => {
          kab.classList.remove("_is-active");
        });
      }
    });
  }

  static resetAll() {
    [...document.querySelectorAll(".smenu-item-js")].forEach((item) => {
      item.classList.remove("_is-active");
    });
  }
}

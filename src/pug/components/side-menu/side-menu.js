"use ctrict";

export const SideMenu = () => {
  class Side {
    constructor() {
      this.title = document.querySelector("._smenu-title-js");
      this.tab = {};
      this.neibours = [];
    }

    start(el) {
      this.title = el;
      this.tab = this.title.closest("._smenu-item-js");
      this.neibours = [...this.tab.closest("._smenu-js ").children];

      this.neibours.forEach((cell) => {
        if (cell == this.tab) {
          if (this.tab.classList.contains("_is-active")) {
            this.tab.classList.remove("_is-active");
            this.tab.classList.add("_not-active");
            cell.querySelectorAll("._smenu-item-js").forEach((kab) => {
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

          cell.querySelectorAll("._smenu-item-js").forEach((kab) => {
            kab.classList.remove("_is-active");
            kab.classList.add("_not-active");
          });
        }
      });
    }

    static resetAll() {
      [...document.querySelectorAll("._smenu-item-js")].forEach((item) => {
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

  var SideMenu = new Side();

  document.addEventListener("click", (e) => {
    if (e.target.closest("._smenu-title-js")) {
      SideMenu.start(e.target.closest("._smenu-title-js"));
    }

    if (!e.target.closest("._smenu-js")) {
      Side.resetAll();
    }
  });
};

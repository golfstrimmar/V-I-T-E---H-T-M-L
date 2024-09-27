"use strict";

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
      this.neibours = [...this.tab.parentElement.children];

      this.neibours.forEach((cell) => {
        const isActive = cell.classList.contains("_is-active");
        const nestedItems = cell.querySelectorAll("._smenu-item-js");

        if (cell === this.tab) {
          if (isActive) {
            this.tab.classList.remove("_is-active");
            this.tab.classList.add("_not-active");
            nestedItems.forEach((kab) => {
              kab.classList.add("_not-active");
              kab.classList.remove("_is-active");
            });
          } else {
            this.tab.classList.add("_is-active");
            this.tab.classList.remove("_not-active");
          }
        } else {
          if (isActive) {
            cell.classList.remove("_is-active");
            cell.classList.add("_not-active");
          }

          nestedItems.forEach((kab) => {
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
          }, 4000); // Таймаут можно вынести в константу
        }
      });
    }
  }

  const sideMenu = new Side();

  document.addEventListener("click", (e) => {
    if (e.target.closest("._smenu-title-js")) {
      sideMenu.start(e.target.closest("._smenu-title-js"));
    }

    if (!e.target.closest("._smenu-js")) {
      Side.resetAll();
    }
  });
};

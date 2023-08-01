"use ctrict";

export const Tab = () => {
  class MyTab {
    constructor() {
      this.title = document.querySelector("._kab-title-js");
      this.tab = {};
      this.neibours = [];
    }

    start(el) {
      this.title = el;
      this.tab = this.title.closest("._kab-js");
      this.neibours = [...this.tab.closest("._tab-body-js").children];
      this.neibours.forEach((cell) => {
        if (cell == this.tab) {
          if (this.tab.classList.contains("_is-active")) {
            this.tab.classList.remove("_is-active");
            cell.querySelectorAll("._kab-js").forEach((kab) => {
              kab.classList.remove("_is-active");
            });
          } else {
            this.tab.classList.add("_is-active");
          }
        } else {
          cell.classList.remove("_is-active");
          cell.querySelectorAll("._kab-js").forEach((kab) => {
            kab.classList.remove("_is-active");
          });
        }
      });
    }
    static resetAll() {
      [...document.querySelectorAll("._kab-js")].forEach((item) => {
        item.classList.remove("_is-active");
      });
    }
  }

  var newTab = new MyTab();
  const tabsConteiners = document.querySelectorAll("._tabs-container-js ");

  document.addEventListener("click", (e) => {
    if (e.target.closest("._kab-title-js")) {
      newTab.start(e.target.closest("._kab-title-js"));
    }
    if (!e.target.closest("._tabs-container-js ")) {
      MyTab.resetAll();
    }
 

    if (e.target.closest("._tabs-container-js ")) {
      var tempContainer = e.target.closest("._tabs-container-js ");

      tabsConteiners.forEach((cell) => {
        if (cell !== tempContainer) {
           [...cell.querySelectorAll("._kab-js")].forEach((item) => {
             item.classList.remove("_is-active");
           });
        }
      });
    }
  });
};

"use strict";

export const Tab = (e) => {
  class NewTab {
    constructor() {
      this.tabParent = e.target.closest(".tabs-container");
      this.tab = e.target.closest(".tab");
      this.title = this.tab.querySelector(".tab-header");
      this.content = this.tab.querySelector(".tab-content");
      this.children = Array.from(this.tab.querySelectorAll(".tab"));
      this.nabour = Array.from(this.tab.parentNode.children).filter(
        (sibling) => sibling !== this.tab
      );
    }

    close() {
      this.tab.classList.remove("_is-active");
      this.children.forEach((car) => {
        car.classList.remove("_is-active");
      });
    }

    start() {
      if (this.tab.classList.contains("_is-active")) {
        this.tab.classList.remove("_is-active");
        this.children.forEach((car) => {
          car.classList.remove("_is-active");
        });
      } else {
        this.tab.classList.add("_is-active");
        this.nabour.forEach((car) => {
          car.classList.remove("_is-active");
          Array.from(car.querySelectorAll(".tab")).forEach((car) => {
            car.classList.remove("_is-active");
          });
        });
      }
    }
  }

  if (e.target.closest(".tab-header")) {
    var newTab = new NewTab();
    newTab.start();
  }
};

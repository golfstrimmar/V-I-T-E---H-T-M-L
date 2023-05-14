"use ctrict";

export class MyTab {
  constructor(tab) {
    this.tab = tab;
    this.neibours = [...this.tab.closest(".tabs-container-js").children];
    this.title = this.tab.querySelector(".tab-title-js");
    this.hidden = this.tab.querySelector(".tab-hidden-js");
  }
  // ==================================
  close() {
    this.tab.classList.remove("_is-active");
    this.title.classList.remove("_is-active");
    this.hidden.classList.remove("_is-active");
    this.hidden.animate(
      [{ height: `${this.hidden.scrollHeight}px` }, { height: "0px" }],
      {
        duration: 200,
        easing: "ease-in-out",
      }
    );
    this.hidden.style.height = `0px`;
  }
  // ==================================
  open() {
    for (let i = 0; i < this.neibours.length; i++) {
      if (this.neibours[i] !== this.tab) {
        this.neibours[i]
          .querySelector(".tab-title-js")
          .classList.remove("_is-active");
        this.neibours[i]
          .querySelector(".tab-hidden-js")
          .classList.remove("_is-active");
        this.neibours[i].querySelector(".tab-hidden-js").style.height = 0;
        this.neibours[i].classList.remove("_is-active");
      }
    }

    this.tab.classList.add("_is-active");
    this.title.classList.add("_is-active");
    this.hidden.classList.add("_is-active");
    this.hidden.animate(
      [{ height: "0px" }, { height: `${this.hidden.scrollHeight}px` }],
      {
        duration: 200,
        easing: "ease-in-out",
      }
    );
    this.hidden.style.height = `auto`;
  }
  // ==================================
  closeNabours() {
    for (let i = 0; i < this.neibours.length; i++) {
      if (
        this.neibours[i]
          .querySelector(".tab-hidden-js")
          .querySelector(".tabs-container-js")
      ) {
        let nabourContainers = this.neibours[i]
          .querySelector(".tab-hidden-js")
          .querySelectorAll(".tabs-container-js");
        nabourContainers.forEach((el) => {
          el.querySelectorAll(".tab-js").forEach((elem) => {
            if (elem.classList.contains("_is-active")) {
              elem.classList.remove("_is-active");
            }
          });
          el.querySelectorAll(".tab-hidden-js").forEach((elem) => {
            if (elem.classList.contains("_is-active")) {
              elem.classList.remove("_is-active");
              elem.animate(
                [{ height: `${elem.scrollHeight}px` }, { height: "0px" }],
                {
                  duration: 200,
                  easing: "ease-in-out",
                }
              );
              elem.style.height = 0;
            }
          });
          el.querySelectorAll(".tab-title-js").forEach((elem) => {
            if (elem.classList.contains("_is-active")) {
              elem.classList.remove("_is-active");
            }
          });
        });
      }
    }
  }
  // ==================================
  start() {
    this.closeNabours();
    if (this.tab.classList.contains("_is-active")) {
      this.close();
    } else {
      this.open();
    }
  }

  static resetAll() {
    [...document.querySelectorAll(".tab-js")].forEach((item) => {
      item.classList.remove("_is-active");
    });
    [...document.querySelectorAll(".tab-title-js")].forEach((item) => {
      item.classList.remove("_is-active");
    });
    [...document.querySelectorAll(".tab-hidden-js")].forEach((item) => {
      item.classList.remove("_is-active");
      if (item.style.height > 0) {
        item.animate(
          [{ height: `${item.scrollHeight}px` }, { height: "0px" }],
          {
            duration: 200,
            easing: "ease-in-out",
          }
        );
        item.style.height = 0;
      }
      item.style.height = 0;
    });
  }
}

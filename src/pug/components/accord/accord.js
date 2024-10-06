"use ctrict";
export const Accords = () => {
  class Accord {
    constructor(e) {
      this.Accord = e.target.closest("._accord-js");
      this.button = e.target.closest("._accord-nav-js button");
      this.nav = e.target.closest("._accord-nav-js");
      this.nabours = [...this.nav.querySelectorAll("button")].filter(
        (el) => el !== this.button && el.classList.contains("_is-active")
      );
      this.nabour = this.nabours[0];
      this.index = [...this.nav.querySelectorAll("button")].indexOf(
        this.button
      );
      this.hidden = this.Accord.querySelector("._accord-hidden-js");
      this.units = [...this.hidden.querySelectorAll("._accord-hidden-wrap li")];
      this.flag = false;
    }

    isOpen() {
      this.hidden.classList.remove("_is-closed");
      this.hidden.classList.add("_is-open");
      this.button.classList.add("_is-active");
      const temp = [...this.nav.querySelectorAll("button")].indexOf(
        this.button
      );
      this.units[temp].classList.add("_is-active");
    }

    isClose() {
      this.hidden.classList.remove("_is-open");
      this.hidden.classList.add("_is-closed");
      setTimeout(() => {
        this.units.forEach((car) => {
          car.classList.remove("_is-active");
        });
        this.hidden.classList.remove("_is-closed");
      }, 1000);
    }

    start() {
      if (this.button.classList.contains("_is-active")) {
        this.button.classList.remove("_is-active");
        this.isClose();
      } else {
        if (this.nabours.length > 0) {
          this.nabour.classList.remove("_is-active");
          this.isClose();
          setTimeout(() => {
            this.isOpen();
          }, 1000);
        } else {
          this.isOpen();
        }
      }
    }
  }

  // ==================================
  const accordAll = [...document.querySelectorAll("._accord-js")];
  if (accordAll.length > 0) {
    accordAll.forEach((cell) => {
      document.addEventListener("click", (e) => {
        if (e.target.closest("._accord-nav-js button")) {
          const NewAccord = new Accord(e);
          NewAccord.start();
        }
      });
    });
  }
  // ==================================
};

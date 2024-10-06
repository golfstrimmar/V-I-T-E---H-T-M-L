"use ctrict";
export const Accords = () => {
  class Accord {
    constructor(e) {
      this.Accord = e.target.closest("._accord-js");
      this.button = e.target.closest("._accord-nav-js button");
      this.nav = e.target.closest("._accord-nav-js");
      this.buttons = [...this.nav.querySelectorAll("button")];
      this.nabours = [...this.nav.querySelectorAll("button")].filter(
        (el) => el !== this.button && el.classList.contains("_is-active")
      );
      this.nabour = this.nabours[0];
      this.index = [...this.nav.querySelectorAll("button")].indexOf(
        this.button
      );
      this.hidden = this.Accord.querySelector("._accord-hidden-js");
      this.units = [...this.hidden.querySelectorAll("._accord-hidden-wrap li")];
      this.indexNabour = 0;
    }

    isOpen() {
      this.units[this.index].classList.add("_is-active");
      this.button.classList.add("_is-active");
      const anim = this.hidden.animate(
        [{ gridTemplateRows: "0fr" }, { gridTemplateRows: "1fr" }],
        {
          duration: 200,
          easing: "ease-in-out",
        }
      );
      anim.finished.then(() => {
        this.hidden.style.gridTemplateRows = "1fr";
      });
    }

    isClose() {
      const anim = this.hidden.animate(
        [{ gridTemplateRows: "1fr" }, { gridTemplateRows: "0fr" }],
        {
          duration: 200,
          easing: "ease-in-out",
        }
      );
      anim.finished.then(() => {
        this.hidden.style.gridTemplateRows = "0fr";
        this.button.classList.remove("_is-active");
        this.units[this.index].classList.remove("_is-active");
      });
    }

    start() {
      if (!this.button.classList.contains("_is-active")) {
        if (this.nabours.length == 0) {
          this.isOpen();
        } else if (this.nabours.length > 0) {
          const anim = this.hidden.animate(
            [{ gridTemplateRows: "1fr" }, { gridTemplateRows: "0fr" }],
            {
              duration: 200,
              easing: "ease-in-out",
            }
          );
          anim.finished.then(() => {
            this.nabour.classList.remove("_is-active");
            this.button.classList.add("_is-active");
            this.hidden.style.gridTemplateRows = "0fr";
            this.indexNabour = this.buttons.indexOf(this.nabour);
            this.units[this.indexNabour].classList.remove("_is-active");
            this.units[this.index].classList.add("_is-active");
            this.isOpen();
          });
        }
      } else if (this.button.classList.contains("_is-active")) {
        this.isClose();
      }
    }

    static closeAll(item) {
      const accordAll = [...document.querySelectorAll("._accord-js")];
      const anderenAll = accordAll.filter((el) => el !== item);
      anderenAll.forEach((cell) => {
        const anim = cell
          .querySelector("._accord-hidden-js")
          .animate([{ gridTemplateRows: "1fr" }, { gridTemplateRows: "0fr" }], {
            duration: 200,
            easing: "ease-in-out",
          });
        anim.finished.then(() => {
          [...cell.querySelectorAll("button")].forEach((car) => {
            car.classList.remove("_is-active");
          });

          [...cell.querySelectorAll("._accord-hidden-wrap li")].forEach(
            (car) => {
              car.classList.remove("_is-active");
            }
          );
        });
      });
    }
  }

  // ==================================
  const accordAll = [...document.querySelectorAll("._accord-js")];
  if (accordAll.length > 0) {
    document.addEventListener("click", (e) => {
      if (e.target.closest("._accord-nav-js button")) {
        Accord.closeAll(e.target.closest("._accord-js"));
        const NewAccord = new Accord(e);
        NewAccord.start();
      } else if (!e.target.closest("._accord-js")) {
        Accord.closeAll(e.target);
      }
    });
  }
  // ==================================
};

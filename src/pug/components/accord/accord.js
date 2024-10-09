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

      this.units = [
        ...this.hidden
          .querySelector("._accord-hidden-wrap")
          .querySelectorAll(":scope > li"),
      ];
      this.indexNabour = 0;
    }

    isOpen() {
      this.units[this.index].classList.add("_is-active");
      this.button.classList.add("_is-active");
      const height = this.hidden.offsetHeight;
      const anim = this.hidden.animate(
        [
          { gridTemplateRows: "0fr", minHeight: "0px" },
          { gridTemplateRows: "1fr", minHeight: `${height}` + "px" },
        ],
        {
          duration: 200,
          easing: "ease-in-out",
        }
      );
      anim.finished.then(() => {
        this.hidden.style.gridTemplateRows = "1fr";
        this.hidden.style.minHeight = `${height}` + "px";
        this.hidden.classList.add("_is-active");
      });
    }

    isClose() {
      const height = this.hidden.offsetHeight;
      const anim = this.hidden.animate(
        [
          { gridTemplateRows: "1fr", minHeight: `${height}` + "px" },
          { gridTemplateRows: "0fr", minHeight: "0px" },
        ],
        {
          duration: 200,
          easing: "ease-in-out",
        }
      );
      anim.finished.then(() => {
        this.hidden.style.gridTemplateRows = "0fr";
        this.hidden.style.minHeight = "0px";
        this.hidden.classList.remove("_is-active");
        this.button.classList.remove("_is-active");
        this.units[this.index].classList.remove("_is-active");
      });
    }

    start() {
      if (!this.button.classList.contains("_is-active")) {
        if (this.nabours.length == 0) {
          this.isOpen();
        } else if (this.nabours.length > 0) {
          const height = this.hidden.offsetHeight;
          const anim = this.hidden.animate(
            [
              { gridTemplateRows: "1fr", minHeight: `${height}` + "px" },
              { gridTemplateRows: "0fr", minHeight: "0px" },
            ],
            {
              duration: 200,
              easing: "ease-in-out",
            }
          );
          anim.finished.then(() => {
            this.hidden.style.gridTemplateRows = "0fr";
            this.hidden.style.minHeight = "0px";
            this.hidden.classList.remove("_is-active");
            this.nabour.classList.remove("_is-active");
            this.button.classList.add("_is-active");
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
        if (
          cell
            .querySelector("._accord-hidden-js")
            .classList.contains("_is-active")
        ) {
          const hidden = cell.querySelector("._accord-hidden-js");
          const height = hidden.offsetHeight;
          const anim = hidden.animate(
            [
              { gridTemplateRows: "1fr", minHeight: `${height}` + "px" },
              { gridTemplateRows: "0fr", minHeight: "0px" },
            ],
            {
              duration: 200,
              easing: "ease-in-out",
            }
          );
          anim.finished.then(() => {
            [...cell.querySelectorAll("button")].forEach((car) => {
              car.classList.remove("_is-active");
            });

            [...cell.querySelectorAll("._accord-hidden-wrap li")].forEach(
              (car) => {
                car.classList.remove("_is-active");
              }
            );
            hidden.classList.remove("_is-active");
            hidden.style.gridTemplateRows = "0fr";
            hidden.style.minHeight = "0px";
          });
        }
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
      }
      //  else if (
      //   !e.target.closest("._accord-js") &&
      //   !e.target.closest(".popup-overlay-js")
      // ) {
      //   Accord.closeAll(e.target);
      // }
    });
  }
  // ==================================
};

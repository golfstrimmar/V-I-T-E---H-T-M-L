"use strict";

export const GalCases = () => {
  class GALCASE {
    constructor(elem, options) {
      this.elem = elem;
      this.GAL = elem.querySelector("._galCases-plaza-js");
      this.Button = elem.querySelector("._galCases-button-js");
      this.Columns = options.numberColumns;
      this.Items = options.numberItems;
      this.NumberAddItems = this.Columns;
      this.tempActive = [];
      this.elements = [...this.GAL.querySelectorAll("._galCases-item-js")];
    }

    startOrigin() {
      for (let i = 0; i < this.elements.length; ++i) {
        if (i < this.Columns) {
          this.elements[i].classList.contains("_is-active")
            ? this.elements[i]
            : this.elements[i].classList.add("_is-active");
        } else {
          this.elements[i].classList.contains("_is-active")
            ? this.elements[i].classList.remove("_is-active")
            : this.elements[i];
        }
      }
    }

    buttonActive() {
      if (this.Button.querySelector("svg")) {
        var buttonSvg = this.Button.querySelector("svg");
        buttonSvg.classList.add("_is-active");
        setTimeout(() => {
          buttonSvg.classList.remove("_is-active");
        }, 500);
      }
    }

    checkNummbersItems() {
      this.tempActive = this.elements.filter(function (el) {
        return el.classList.contains("_is-active");
      });
    }
    close() {
      this.tempActive = [];
      this.NumberAddItems = this.Columns;
      this.startOrigin();
      this.Button.innerHTML =
        '<span>more</span><svg><use xlink:href="#load"></use></svg>';
    }

    addItems() {
      this.checkNummbersItems();

      if (this.tempActive.length === this.elements.length) {
        this.close();
      } else {
        this.NumberAddItems = this.NumberAddItems + this.Items;
        for (let i = 0; i < this.elements.length; ++i) {
          if (i < this.NumberAddItems) {
            this.elements[i].classList.add("_is-active");
          }
        }

        this.checkNummbersItems();
        if (this.tempActive.length === this.elements.length) {
          this.Button.innerHTML = "close";
        }
      }
    }

    start() {
      this.startOrigin();
      document.addEventListener("click", (e) => {
        if (!e.target.closest(".galCases__body")) {
          this.close();
        }

        if (e.target.closest(".galCases") !== this.elem) {
          this.close();
        } else if (e.target.closest("._galCases-button-js ") == this.Button) {
          this.buttonActive(),
            setTimeout(() => {
              this.addItems();
            }, 300);
        }
      });
    }
  }

  // ============
  if (document.querySelector("#galCases1 ")) {
    const galCases1 = document.querySelector("#galCases1 ");
    const galCases1Act = new GALCASE(galCases1, {
      numberColumns: 3,
      numberItems: 3,
    });
    galCases1Act.start();
  }

  if (document.querySelector("#galCases2 ")) {
    const galCases2 = document.querySelector("#galCases2 ");
    const galCases2Act = new GALCASE(galCases2, {
      numberColumns: 3,
      numberItems: 3,
    });
    galCases2Act.start();
  }

  if (document.querySelector("#galCases3 ")) {
    const galCases3 = document.querySelector("#galCases3 ");
    const galCases3Act = new GALCASE(galCases3, {
      numberColumns: 3,
      numberItems: 3,
    });
    galCases3Act.start();
  }

  // =================
};

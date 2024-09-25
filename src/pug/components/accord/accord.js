"use ctrict";
export const Accords = () => {
  class Accord {
    constructor(accord) {
      this.Accord = accord;
      this.NavButtons = [
        ...this.Accord.querySelectorAll("._accord-nav-js button"),
      ];
      this.Hidden = this.Accord.querySelector("._accord-hidden-js");
      this.HiddenWrap = this.Accord.querySelector("._accord-hidden-wrap-js");
      this.Hiddens = [...this.Accord.querySelectorAll("._accord-content-js")];
      this.Index;
    }

    activItem() {
      for (let i = 0; i < this.NavButtons.length; ++i) {
        this.NavButtons[i].addEventListener("click", (e) => {
          this.resetClasses();
          this.itemsReset();
          this.NavButtons[i].classList.add("_is-active");
          this.NavButtons[i].setAttribute("disabled", true);

          if (!this.Hidden.classList.contains("_is-active")) {
            this.Hidden.classList.add("_is-active");
            for (let k = 0; k < this.Hiddens.length; ++k) {
              this.Hiddens[k].classList.remove("_is-active");
              this.Hiddens[i].classList.add("_is-active");
            }
          } else {
            this.Hidden.classList.remove("_is-active");

            setTimeout(() => {
              for (let l = 0; l < this.Hiddens.length; ++l) {
                this.Hiddens[l].classList.remove("_is-active");
                this.Hiddens[i].classList.add("_is-active");
              }
              this.Hidden.classList.add("_is-active");
            }, 200);
          }
        });
      }
    }

    itemsReset() {
      for (let i = 0; i < this.NavButtons.length; ++i) {
        this.NavButtons[i].classList.remove("_is-active");
        this.NavButtons[i].removeAttribute("disabled");
      }
    }

    hiddenReset() {
      this.Hidden.classList.remove("_is-active");
      setTimeout(() => {
        for (let i = 0; i < this.Hiddens.length; ++i) {
          this.Hiddens[i].classList.remove("_is-active");
        }
      }, 200);
    }
    resetAll() {
      document.addEventListener("click", (e) => {
        if (!e.target.closest("._accord-js")) {
          this.itemsReset();
          this.hiddenReset();
        }
      });
    }

    resetClasses() {
      for (let j = 0; j < allClassAccords.length; ++j) {
        if (allClassAccords[j].el !== this.Accord) {
          if (allClassAccords[j].el.querySelector("._accord-default-js")) {
            var ddd = allClassAccords[j].el.querySelector(
              "._accord-default-js"
            );

            if (!ddd.classList.contains("_is-active")) {
              allClassAccords[j].elClass.itemsReset();
              allClassAccords[j].elClass.hiddenReset();
              setTimeout(() => {
                allClassAccords[j].elClass.openDefault();
              }, 200);
            }
          } else {
            allClassAccords[j].elClass.itemsReset();
            allClassAccords[j].elClass.hiddenReset();
          }
        }
      }
    }

    start() {
      this.activItem();
      this.resetAll();
    }
  }

  // ====================================

  const accordAll = [...document.querySelectorAll("._accord-js")];
  var allClassAccords = [];
  var temp = {};
  
  class AccordGefault extends Accord {
    constructor(accord) {
      super(accord);
      this.Default = this.Accord.querySelector("._accord-default-js");
      this.Index = this.Hiddens.indexOf(this.Default);
    }
    openDefault() {
      this.NavButtons[this.Index].classList.add("_is-active");
      this.NavButtons[this.Index].setAttribute("disabled", true);
      this.Hiddens[this.Index].classList.add("_is-active");
      this.Hidden.classList.add("_is-active");
    }

    resetAll() {
      document.addEventListener("click", (e) => {
        if (!e.target.closest("._accord-js")) {
          allClassAccords.forEach((cell) => {
            if (cell.el.querySelector("._accord-default-js")) {
              var ddd = cell.el.querySelector("._accord-default-js");
              if (!ddd.classList.contains("_is-active")) {
                cell.elClass.itemsReset();
                cell.elClass.hiddenReset();
                setTimeout(() => {
                  cell.elClass.openDefault();
                }, 200);
              }
            }
          });
        }
      });
    }
  }

  accordAll.forEach((cell) => {
    if (cell.querySelector("._accord-default-js")) {
      temp = new AccordGefault(cell);
      temp.openDefault();
    } else {
      temp = new Accord(cell);
    }
    allClassAccords.push({
      el: cell,
      elClass: temp,
    });
  });

  allClassAccords.forEach((cell) => {
    Object.assign(Accord.prototype, allClassAccords);
    cell.elClass.start();
  });
};

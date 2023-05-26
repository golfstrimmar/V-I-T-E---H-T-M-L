"use strict";

export class GAL {
  constructor(elem, options) {
    this.GAL = elem;
    this.GALitems = [...this.GAL.querySelectorAll(".GAL-item-js")];
    this.GALbutton = this.GAL.nextElementSibling.closest(".gal__link");
    this.tempHeight = this.GAL.querySelector(".GAL-item-js").clientHeight;
    this.OptionsNumer = options.Anzahl * 2;
    this.Anzahl = options.Anzahl-1;
    this.numer = options.Anzahl * 2;
    this.time = 300;
    this.Addtime = 300;
  }

  //  ===============================

  open() {
    if (this.numer === this.GALitems.length) {
      this.GALbutton.querySelector("span").innerHTML = "Свернуть";
      this.GALbutton.querySelector("svg").style.display = "none";
    }

    if (this.numer <= this.GALitems.length) {
      for (let i = 0; i < this.GALitems.length; i++) {
        if (this.Anzahl < i && i < this.numer) {
          var animheight = this.GALitems[i].animate(
            [{ height: 0 + "px", height: `${this.tempHeight}px` }],

            {
              duration: this.time,
              easing: "ease-in-out",
            }
          );
          var animmargin = this.GALitems[i].animate(
            [{ marginTop: 0 + "px", marginTop: `30px` }],

            {
              duration: this.time,
              easing: "ease-in-out",
            }
          );
          const beendet = () => {
            this.GALitems[i].style.height = `${this.tempHeight}px`;
            this.GALitems[i].style.marginTop = `30px`;
          };
          animheight.addEventListener("finish", (e) => {
            beendet();
          });
          animmargin.addEventListener("finish", (e) => {
            beendet();
          });
        }
      }
      this.numer = this.numer + this.OptionsNumer/2;
    } else {
      this.numer = this.OptionsNumer;

      this.close();
    }
  }

  //  ===============================

  close() {
    for (let i = 0; i < this.GALitems.length; i++) {
      if (i > this.Anzahl) {
        var anim = this.GALitems[i].animate(
          [{ height: `${this.tempHeight}px`, height: 0 + "px" }],
          {
            duration: this.time,
            easing: "ease-in-out",
          }
        );
        var animmargin = this.GALitems[i].animate(
          [{ marginTop: `30px`, marginTop: 0 + "px" }],

          {
            duration: this.time,
            easing: "ease-in-out",
          }
        );
        const beendet = () => {
          this.GALbutton.classList.remove("_is-active");
          this.GALbutton.querySelector("span").innerHTML = "Загрузить еще";
          this.GALitems[i].style.height = 0;
          this.GALbutton.querySelector("svg").style.display = "block";
          this.GALitems[i].style.marginTop = `0px`;
        };
        anim.addEventListener("finish", (e) => {
          beendet();
        });
        animmargin.addEventListener("finish", (e) => {
          beendet();
        });
      }
    }
  }

  //  ===============================

  start() {
    this.close();
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".gal")) {
        this.close();
      } else if (e.target.closest(".gal__link") == this.GALbutton) {
        this.GALbutton.classList.add("_is-active");
        if (this.numer > this.GALitems.length) {
          this.Addtime = -300;
        }
        setTimeout(() => {
          this.GALbutton.classList.remove("_is-active");
          this.open();
          this.Addtime = 300;
        }, this.time + this.Addtime);
      }
    });
  }
}

"use strict";

export class GAL {
  constructor(elem) {
    this.GAL = elem;
    this.GALitems = [...this.GAL.querySelectorAll(".GAL-item-js")];
    this.GALbutton = this.GAL.nextElementSibling;
    this.tempHeight = this.GAL.querySelector(".GAL-item-js").scrollHeight;
    this.numer = 6;
  }

  //  ===============================

  open() {


    var ani = this.GAL.animate([{ rowGap: 0 + "px", rowGap: `30px` }], {
      duration: 1000,
      easing: "ease-in-out",
    });
    const endet = () => {
      this.GAL.style.rowGap = `30px`;
    };
    ani.addEventListener("finish", (e) => {
      endet();
    });

    if (this.numer === this.GALitems.length) {
      this.GALbutton.querySelector("span").innerHTML = "Свернуть";
      
      this.GALbutton.querySelector("svg").style.display = 'none';
    }

    if (this.numer <= this.GALitems.length) {
      for (let i = 0; i < this.GALitems.length; i++) {
        if (2 < i && i < this.numer) {
          var anim = this.GALitems[i].animate(
            [{ height: 0 + "px", height: `${this.tempHeight}px` }],
            {
              duration: 1000,
              easing: "ease-in-out",
            }
          );
          const beendet = () => {
            this.GALitems[i].style.height = `${this.tempHeight}px`;
          };
          anim.addEventListener("finish", (e) => {
            beendet();
          });
        }
      }
      this.numer = this.numer + 3;
    } else {
      this.numer = 6;
      this.close();
    }
  }

  //  ===============================

  close() {
    var ani = this.GAL.animate([{ rowGap: `30px`, rowGap: 0 + "px" }], {
      duration: 1000,
      easing: "ease-in-out",
    });
    const endet = () => {
      this.GAL.style.rowGap = 0 + "px";
    };
    ani.addEventListener("finish", (e) => {
      endet();
    });

    for (let i = 0; i < this.GALitems.length; i++) {
      if (i > 2) {
        var anim = this.GALitems[i].animate(
          [{ height: `${this.tempHeight}px`, height: 0 + "px" }],
          {
            duration: 1000,
            easing: "ease-in-out",
          }
        );
        const beendet = () => {
          this.GALbutton.classList.remove("_is-active");
          this.GALbutton.querySelector("span").innerHTML = "Загрузить еще";
          this.GALitems[i].style.height = 0;
          this.GALbutton.querySelector("svg").style.display = "block";
        };
        anim.addEventListener("finish", (e) => {
          beendet();
        });
      }
    }
  }

  //  ===============================

  start() {
    this.close();
    this.GALbutton.addEventListener("click", (e) => {

          this.GALbutton.classList.add("_is-active");
      // if (!this.GALbutton.classList.contains("_is-active")) {
          setTimeout(() => {
             this.GALbutton.classList.remove("_is-active");
           
          }, 1000);
        this.open();
      // }
      //  else if (this.numer <= this.GALitems.length ) {
      //   this.close();
      // }
    });
  }
}

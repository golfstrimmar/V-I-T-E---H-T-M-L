"use strict";

export class GAL {
  constructor(elem) {
    this.GAL = elem;
    this.GALitems = [...this.GAL.querySelectorAll(".GAL-item-js")];
    this.GALbutton = this.GAL.nextElementSibling;
    this.tempHeight = this.GAL.querySelector(".GAL-item-js").scrollHeight;
    this.numer = 6;
    this.time  = 300
    this.Addtime = 300;
  }

  //  ===============================

  open() {

    if (this.numer === this.GALitems.length) {
      this.GALbutton.querySelector("span").innerHTML = "Свернуть";
      this.GALbutton.querySelector("svg").style.display = 'none';
    }

    if (this.numer <= this.GALitems.length) {
      
      for (let i = 0; i < this.GALitems.length; i++) {
        if (2 < i && i < this.numer) {
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
      this.numer = this.numer + 3;
    } else {
      this.numer = 6;
     
      this.close();
    }
  }

  //  ===============================

  close() {
    for (let i = 0; i < this.GALitems.length; i++) {
      if (i > 2) {
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
    this.GALbutton.addEventListener("click", (e) => {
           this.GALbutton.classList.add("_is-active");
           if (this.numer > this.GALitems.length) {
             this.Addtime = -300;
           }
             setTimeout(() => {
               this.GALbutton.classList.remove("_is-active");
               this.open();
               this.Addtime = 300;
             }, this.time + this.Addtime);
    });
  }
}

"use strict";

export class GAL {
  constructor(elem) {
    this.GAL = elem;
    this.GALitems = [...this.GAL.querySelectorAll(".GAL-item-js")];
    this.GALbutton = this.GAL.nextElementSibling;
    this.tempHeight = this.GAL.querySelector(".GAL-item-js").scrollHeight;
    this.numer = 0;
    this.time = 300;
    this.Addtime = 300;
    this.numberItems = 0;
  }

  //  ===============================

  open() {


    if (this.GAL.classList.contains("GAL-doctors")) {
     this.numer = 1;
    } else {
     this.numer = 6;
    }


    if (this.numer === this.GALitems.length) {
      this.GALbutton.querySelector("span").innerHTML = "Свернуть";
      this.GALbutton.querySelector("svg").style.display = "none";
    }

    if (this.numer <= this.GALitems.length) {
      for (let i = 0; i < this.GALitems.length; i++) {
        if (this.numberItems < i && i < this.numer) {
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

      
       if (this.GAL.classList.contains("GAL-doctors")) {
         this.numer = this.numer + 1;
       } else {
         this.numer = this.numer + 3;
       }
    } else {
      this.numer = 1;

      this.close();
    }
  }

  //  ===============================

  close() {
   
    if (this.GAL.classList.contains("GAL-doctors")) {
      this.numberItems = 0;
    
     
    } else {
      this.numberItems = 2;
    }
    for (let i = 0; i < this.GALitems.length; i++) {
      if (i > this.numberItems) {
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

  startGal() {
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

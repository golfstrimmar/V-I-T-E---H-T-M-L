"use ctrict";
// import { Polifils } from "/src/functions";
import Swiper, { Navigation } from "swiper";
export class MyGalery {
  constructor(Gal) {
    this.Gal = Gal;
    this.navItem = "";
    this.navData = "";
    this.nav = "";
    this.navItems = "";
    this.plasaItems = "";
    this.foto = "";
    this.tempdata = "";
    // this.navItems = [
    //   ...this.Gal.closest(".galery-nav-js").querySelectorAll(
    //     "._galery-nav-item-js"
    //   ),
    // ];
    // this.GalBody = Gal.closest("._galery-body-js");
    // this.numer = 0;
    // this.temp = "";
    // this.plaza =
    //   this.Gal.closest("._galery-body-js").querySelector("._plasa-js");
    // this.fotos = [...this.plaza.querySelectorAll("._galery-item-js")];
    // this.Attrdata = this.Gal.getAttribute("data");
    // this.fotoWidth = 0;
    // this.fotoHeight = 0;
    // this.tWidth=200;
    // this.tHeight=300;
  }
  // ==================================
  // close(foto) {
  //   var img = foto.querySelector(".galery__img");
  //   img.style.outlineWidth = 0;
  //   var anim = foto.animate(
  //     [
  //       {
  //         width: this.tWidth + "px",
  //         height: this.tHeight + "px",
  //         opacity: 1,
  //       },
  //       {
  //         width: `0px`,
  //         height: `0px`,
  //         opacity: 0,
  //       },
  //     ],
  //     {
  //       duration: 300,
  //       easing: "ease-in-out",
  //     }
  //   );
  //   const beendet = () => {
  //     foto.style.height = "0px";
  //     foto.style.width = "0px";
  //   };
  //   anim.addEventListener("finish", (e) => {
  //     beendet();
  //   });
  // }
  // // ==================================
  // open(foto) {
  //   foto.style.borderColor = "transparent";
  //   var img = foto.querySelector(".galery__img");
  //   var animopen = foto.animate(
  //     [
  //       {
  //         width: 0,
  //         height: 0,
  //         opacity: "0",
  //       },
  //       {
  //         width: this.tWidth + "px",
  //         height: this.tHeight + "px",
  //         opacity: "1",
  //       },
  //     ],
  //     {
  //       duration: 300,
  //       easing: "ease-in-out",
  //     }
  //   );
  //   const beendetopen = () => {
  //     foto.style.width = this.tWidth + "px";
  //     foto.style.height = this.tHeight + "px";
  //     foto.style.opacity = 1;
  //     img.style.outlineWidth = 1 + "px";
  //   };
  //   animopen.addEventListener("finish", (e) => {
  //     beendetopen();
  //   });
  // }
  // // ==================================
  // change(foto) {
  //   var img = foto.querySelector(".galery__img");
  //   img.style.outlineWidth = 0 + "px";
  //   var anim = foto.animate(
  //     [
  //       {
  //         width: this.tWidth + "px",
  //         height: this.tHeight + "px",
  //         opacity: "1",
  //       },
  //       {
  //         height: "0px",
  //         width: "0px",
  //         opacity: "0",
  //       },
  //     ],
  //     {
  //       duration: 300,
  //       easing: "ease-in-out",
  //     }
  //   );

  //   const beendet = () => {
  //     foto.style.height = "0px";
  //     foto.style.width = "0px";
  //     foto.style.opacity = 0;

  //     this.open(foto);
  //   };
  //   anim.addEventListener("finish", (e) => {
  //     beendet();
  //   });
  // }

  reset() {
    for (var i = 0; i < this.plasaItems.length; i++) {
      this.foto = this.plasaItems[i];

      var animclose = this.foto.animate(
        [
          {
            width: 200 + "px",
            height: 300 + "px",
          },
          {
            width: 0,
            height: 0,
          },
        ],
        {
          duration: 1000,
          easing: "ease-in-out",
        }
      );
      const beendetopenALL = () => {
        this.foto.style.width = 0 ;
        this.foto.style.height = 0 ;
      };
      animclose.addEventListener("finish", (e) => {
        // beendetopenALL();
      });
    }
    this.foto = "";
  }

  open() {
    for (var i = 0; i < this.plasaItems.length; i++) {
      this.foto = this.plasaItems[i];
      this.tempdata = this.foto.getAttribute("data");
      if (this.navData === this.tempdata) {
        this.foto.classList.remove("_is-none");
      }
    }

    for (var i = 0; i < this.plasaItems.length; i++) {
      this.foto = this.plasaItems[i];
      this.tempdata = this.foto.getAttribute("data");

      if (this.navData === this.tempdata) {
        var animclose = this.foto.animate(
          [
            {
              width: 0,
              height: 0,
            },
            {
              width: 200 + "px",
              height: 300 + "px",
            },
          ],
          {
            duration: 1000,
            easing: "ease-in-out",
          }
        );
        const beendetopenALL = () => {
          // this.foto.style.width = 200 + "px";
          // this.foto.style.height = 300 + "px";
        };
        animclose.addEventListener("finish", (e) => {
          beendetopenALL();
        });
      }
    }
    this.foto = "";
  }

  // ==================================
  start(e) {
    if (e.target.classList.contains("_galery-nav-item-js")) {
      this.Gal.classList.add("_is-active");
      this.navItem = e.target.closest("._galery-nav-item-js");
      this.nav = this.navItem.closest(".galery-nav-js");
      this.navItems = [...this.nav.querySelectorAll("._galery-nav-item-js")];

      for (var i = 0; i < this.navItems.length; i++) {
        var temp = this.navItems[i];
        if (temp == this.navItem) {
          this.navData = this.navItem.getAttribute("data");
          this.navItem.classList.add("_is-active");
          this.navItem.setAttribute("disabled", true);
        } else {
          temp.classList.remove("_is-active");
          temp.removeAttribute("disabled");
        }
      }
    }

    // =======================================
    this.plasaItems = [...this.Gal.querySelectorAll("._galery-item-js")];
   
    if (this.navData === "all") {
      MyGalery.resetAll();
    }else{
    this.reset();
    setTimeout(() => {
      for (var i = 0; i < this.plasaItems.length; i++) {
        this.foto = this.plasaItems[i];
        this.foto.classList.add("_is-none");
      }
      this.foto = '';
      this.open();
    }, 1000);
    }





    // this.resetAll();
    // setTimeout(() => {
    //   this.open();
    // }, 1000);

    // var animclose = foto.animate(
    //   [
    //     {
    //       // width: 200 + "px",
    //       height: 300 + "px",
    //     },
    //     {
    //       // width: "0px",
    //       height: "0px",
    //     },
    //   ],
    //   {
    //     duration: 1000,
    //     easing: "ease-in-out",
    //   }
    // );

    // const beendetclose = () => {
    // foto.style.height = "0px";
    // foto.style.width = "0px";
    // foto.style.display = "none";

    // };

    // animclose.onfinish = (event) => {
    //   beendetclose();
    // };

    //  var animopen = foto.animate(
    //    [
    //      {
    //        width: "0px",
    //        height: "0px",
    //      },
    //      { width: 200 + "px", height: 300 + "px" },
    //    ],
    //    {
    //      duration: 1000,
    //      easing: "ease-in-out",
    //    }
    //  );
    //  const beendetopen = () => {
    //    foto.style.height = "300px";
    //    foto.style.width = "200px";
    //    foto.style.display = "flex";
    //  };
    //  animopen.addEventListener("finish", (e) => {
    //  });
    // foto.style.height = "300px";
    // foto.style.width = "200px";
    // foto.style.display = "flex";

    // for (var i = 0; i < this.plasaItems.length; i++) {
    //   tempdata = this.plasaItems[i].getAttribute("data");
    //   if (tempdata === this.navData) {
    //     this.plasaItems[i].style.display = "flex";
    //     var animopen = el.animate([{ height: "0px" }, { height: 300 + "px" }], {
    //       duration: 1000,
    //       easing: "ease-in-out",
    //     });
    //     const beendetopen = () => {
    //       this.plasaItems[i].style.height = 300 + "px";
    //       this.plasaItems[i].style.width = 200 + "px";

    //     };
    //     animopen.addEventListener("finish", (e) => {
    //       beendetopen();
    //     });
    //   }
    // }

    //     this.GalBody.classList.add("_is-active");

    //     for (let i = 0; i < this.navItems.length; i++) {
    //       this.temp = this.navItems[i];
    //       if (this.Gal === this.temp) {
    //         this.numer = i;
    //         this.temp.classList.add("_is-active");
    //         this.temp.setAttribute("disabled", "true");
    //       } else if (this.temp.classList.contains("_is-active")) {
    //         this.temp.classList.remove("_is-active");
    //         this.temp.removeAttribute("disabled");
    //       }
    //     }
    //     // =======================================================

    // var tempchange = this.fotos.map((el) => {
    //   if (el.getAttribute("data") === this.Attrdata) {
    //     return el;
    //   }
    // });

    //     if (this.Attrdata === "all") {
    //       MyGalery.resetAll();
    //     } else {
    //       var tempclose = this.fotos.map((el) => {
    //         if (el.getAttribute("data") !== this.Attrdata) {
    //           return el;
    //         }
    //       });

    //       if (tempchange.length > 0) {
    //         tempchange.forEach((element) => {
    //           if (element) {
    //             if (element.clientHeight == 0) {
    //               this.open(element);
    //             } else {
    //               this.change(element);
    //             }
    //           }
    //         });
    //       }

    //       if (tempclose.length > 0) {
    //         tempclose.forEach((element) => {
    //           if (element) {
    //             if (element.clientHeight !== 0) {
    //               this.close(element);
    //             }
    //           }
    //         });
    //       }
    //     }
  }
  // ==================================
  static resetAll() {
    const All = document.querySelectorAll("._galery-body-js");
    All.forEach((el) => {
      if (el.classList.contains("_is-active")) {
        el.classList.remove("_is-active");
        el.querySelectorAll("._galery-nav-item-js").forEach((nav) => {
          nav.classList.remove("_is-none");
          if (nav.getAttribute("disabled")) {
            nav.removeAttribute("disabled");
          }
          if (nav.getAttribute("data") === "all") {
            nav.setAttribute("disabled", "true");
            nav.classList.add("_is-active");
          }
        });
        el.querySelectorAll("._galery-item-js").forEach((foto) => {
          var img = foto.querySelector(".galery__img");
          foto.style.display = "flex";
          var animopen = foto.animate(
            [
              {
                width: 0,
                height: 0,
                opacity: "0",
              },
              {
                width: 200 + "px",
                height: 300 + "px",
                opacity: "1",
              },
            ],
            {
              duration: 300,
              easing: "ease-in-out",
            }
          );
          const beendetopenALL = () => {
            foto.style.width = 200 + "px";
            foto.style.height = 300 + "px";
            foto.style.opacity = 1;

            img.style.outlineWidth = 1 + "px";
          };
          animopen.addEventListener("finish", (e) => {
            beendetopenALL();
          });
        });
      }
    });
  }
}

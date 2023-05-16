"use ctrict";
// import { Polifils } from "/src/functions";
import Swiper, { Navigation } from "swiper";

export class MyGalery {
  constructor(Gal) {
    this.Gal = Gal;
    this.navItems = [
      ...this.Gal.closest(".galery-nav-js").querySelectorAll(
        "._galery-nav-item-js"
      ),
    ];
    this.numer = 0;
    this.temp = "";
    this.plaza =
      this.Gal.closest("._galery-body-js").querySelector("._plasa-js");
    this.fotos = [...this.plaza.querySelectorAll("._galery-item-js")];
    this.Attr = this.Gal.getAttribute("data");
    this.fotoWidth = 0;
    this.fotoHeight = 0;
  }
  // ==================================
  addAct(arg) {
    arg.classList.add("_is-active");
  }
  // this.addAct();
  remAct(arg) {
    arg.classList.remove("_is-active");
  }
  // this.remAct();
  vechselAct(arg) {
    arg.classList.remove("_is-active");
    arg.classList.add("_is-active");
  }

  // ==================================
  close(foto, tWidth, tHeight) {
    var anim = foto.animate(
      [
        {
          width: tWidth + "px",
          height: tHeight + "px",
        },
        {
          width: `0px`,
          height: `0px`,
        },
      ],
      {
        duration: 3000,
        easing: "ease-in-out",
      }
    );
    const beendet = () => {
      foto.style.height = "0px";
      foto.style.width = "0px";
      foto.style.position = "absolute";
    };
    anim.addEventListener("finish", (e) => {
      beendet();
    });
  }
  // ==================================
  open(foto, tWidth, tHeight) {
    foto.style.position = "relative";
    var animopen = foto.animate(
      [
        {
          width: `0px`,
          height: `0px`,
        },
        {
          width: tWidth + "px",
          height: tHeight + "px",
        },
      ],
      {
        duration: 3000,
        easing: "ease-in-out",
      }
    );
    const beendetopen = () => {
      foto.style.width = tWidth + "px";
      foto.style.height = tHeight + "px";
    };
    animopen.addEventListener("finish", (e) => {
      beendetopen();
    });
  }
  // ==================================
  change(foto, tWidth, tHeight) {
    var anim = foto.animate(
      [
        {
          width: tWidth + "px",
          height: tHeight + "px",
        },
        { height: "0px", width: "0px" },
      ],
      {
        duration: 3000,
        easing: "ease-in-out",
      }
    );

    const beendet = () => {
      foto.style.height = "0px";
      foto.style.width = "0px";
      foto.style.position = "absolute";
      this.open(foto, tWidth, tHeight);
    };
    anim.addEventListener("finish", (e) => {
      beendet();
    });
  }
  // ==================================
  start(tWidth, tHeight) {
    for (let i = 0; i < this.navItems.length; i++) {
      this.temp = this.navItems[i];
      if (this.Gal === this.temp) {
        this.numer = i;
        this.addAct(this.temp);
      } else if (this.temp.classList.contains("_is-active")) {
        this.remAct(this.temp);
      }
    }


    var tempchange = this.fotos.map((el) => {
      if (el.getAttribute("data") === this.Attr) {
        return el;
      }
    });

    var tempclose = this.fotos.map((el) => {
      if (el.getAttribute("data") !== this.Attr) {
        return el;
      }
    });


    if (tempchange.length > 0) {
      tempchange.forEach((element) => {
        if (element ) {
          this.open(element, tWidth, tHeight);

        }
        
      });
    }

    if (tempclose.length > 0) {
      tempclose.forEach((element) => {
         if (element) {
           this.close(element, tWidth, tHeight);
         }
      });
    }

    if (this.Attr === "all") {
      this.fotos.forEach((foto) => {
        this.open(foto, tWidth, tHeight);
      });
    }
  }

  // const galery = document.querySelector("#galery ");
  // const body = document.querySelector("body");
  // const navItems = galery.querySelectorAll(".galery__nav-item"),
  //   galeryItems = [...galery.querySelectorAll(".galery__item")],
  //   plaza = galery.querySelector(".galery__items");
  // let pseudo = [],
  //   timeout = 0,
  //   temp;
  // // for (let i = 0; i < galeryItems.length; ++i) {

  // let i = 0;
  // while (i < galeryItems.length) {
  //   pseudo[i] = { data: "", src: "" };
  //   pseudo[i].data = galeryItems[i].getAttribute("data");
  //   pseudo[i].src = galeryItems[i].querySelector("img").getAttribute("src");
  //   pseudo.push(pseudo[i]);
  //   ++i;
  // }
  // pseudo.pop();

  // // =======================
  // const remove = () => {
  //   [...plaza.children].forEach((cell) => {
  //     cell.classList.remove("_is-anim-open");
  //     cell.classList.add("_is-anim-close");
  //     setTimeout(() => {
  //       cell.remove();
  //     }, timeout);
  //   });
  // };
  // // =======================
  // const create = (cell) => {
  //   let temp = document.createElement("li");
  //   temp.classList.add("galery__item", "rel", "_is-anim-open");
  //   temp.setAttribute("data", `${cell.data}`);
  //   temp.innerHTML = `<div class='imgs'><img src='${cell.src}' alt=''></div>`;
  //   plaza.append(temp);
  // };
  // // =======================
  // navItems.forEach((Item) => {
  //   Item.addEventListener("click", (e) => {
  //     if (Item == temp) {
  //       return;
  //     }

  //     galery.querySelector(".galery__nav-item").disabled = false;
  //     let data = Item.getAttribute("data");

  //     if (data == "all") {
  //       remove();
  //       navItems.forEach((sell) => {
  //         sell == Item ? sell.addAct : sell.remAct;
  //       });

  //       setTimeout(() => {
  //         plaza.remAct;
  //         pseudo.forEach((cell) => {
  //           create(cell);
  //         });
  //         temp = Item;
  //       }, timeout);
  //       return;
  //     }

  //     plaza.addAct;
  //     navItems.forEach((sell) => {
  //       sell == Item ? sell.addAct : sell.remAct;
  //     });
  //     if ([...plaza.children].length > 0) {
  //       timeout = 300;
  //     }
  //     remove();
  //     setTimeout(() => {
  //       pseudo.forEach((cell) => {
  //         if (cell.data == data) {
  //           create(cell);
  //         }
  //       });
  //     }, timeout);
  //     temp = Item;
  //   });
  // });

  // const TargetPop = (target) => {

  //   const imgSrc = target.querySelector("img").getAttribute("src"),
  //     popup = document.querySelector(".popup-js"),
  //     popupInner = popup.querySelector(".popup__inner"),
  //     popupContent = popup.querySelectorAll(".popup__content"),
  //     galerySlider = document.querySelector("#slider-galery");
  //   let plazaChildren = [...plaza.children];
  //   let plazaChildrenSrc = [];
  //   let indexOf = 0;

  //   galerySlider.style.display = "flex";
  //   galerySlider.classList.remove("_not-active");
  //   galerySlider.addAct;

  //   plazaChildren.forEach((cell) => {
  //     if (cell == target) {
  //       indexOf = plazaChildren.indexOf(cell);
  //     }
  //   });

  //   for (let i = 0; i < plazaChildren.length; ++i) {
  //     plazaChildrenSrc[i] = plazaChildren[i]
  //       .querySelector("img")
  //       .getAttribute("src");
  //   }

  //   document.querySelector(".slider-js-galery .swiper-wrapper").innerHTML = "";

  //   for (let i = 0; i < plazaChildrenSrc.length; ++i) {
  //     let create = document.createElement("div");
  //     create.classList.add("slider__item", "swiper-slide");
  //     let html = `<div class='imgs'><img src= ${plazaChildrenSrc[i]}></div>`;
  //     create.innerHTML = html;
  //     document
  //       .querySelector(".slider-js-galery .swiper-wrapper")
  //       .append(create);
  //   }

  //   plazaChildren.forEach((cell) => {
  //     if (cell == target) {
  //       indexOf = plazaChildren.indexOf(cell);
  //     }
  //   });

  //   const swiperGalery = new Swiper(".slider-js-galery", {
  //     navigation: {
  //       prevEl: ".arrow-galery-prev",
  //       nextEl: ".arrow-galery-next",
  //     },
  //     slidesPerView: 1,
  //     // loop: "false",
  //     speed: 800,
  //     initialSlide: indexOf,
  //     modules: [Navigation],
  //   });

  //   document.addEventListener("click", (e) => {
  //     if (
  //       e.target.matches("#slider-galery") ||
  //       e.target.matches(".galeryPopupClose")
  //     ) {
  //       body.classList.remove("lock");
  //       document.querySelector("#slider-galery .swiper-wrapper").innerHTML = "";
  //       galerySlider.remAct;
  //       galerySlider.classList.add("_not-active");
  //       setTimeout(() => {
  //         galerySlider.style.display = "none";
  //       }, 300);
  //       indexOf = 0;
  //       swiperGalery.destroy();
  //     }
  //   });
  // };

  // // ========================
  // document.addEventListener("click", (e) => {
  //   if (e.target.closest(".galery__item")) {
  //     let target = e.target.closest(".galery__item");
  //     TargetPop(target);
  //     body.classList.add("lock");
  //   }

  //   // else if (!e.target.closest(".galery") && !e.target.closest(".popup")) {

  //   //   for (let i = 0; i < navItems.length; ++i) {
  //   //     navItems[i].remAct;
  //   //   }
  //   //   navItems[0].addAct;
  //   //   navItems[0].disabled = true;
  //   //   remove();
  //   //   setTimeout(() => {
  //   //     pseudo.forEach((cell) => {
  //   //       create(cell);
  //   //     });
  //   //     temp = "";
  //   //     plaza.remAct;
  //   //   }, timeout);
  //   // }
  // });
}

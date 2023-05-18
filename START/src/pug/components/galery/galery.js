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
    this.GalBody = Gal.closest("._galery-body-js");
    this.numer = 0;
    this.temp = "";
    this.plaza =
      this.Gal.closest("._galery-body-js").querySelector("._plasa-js");
    this.fotos = [...this.plaza.querySelectorAll("._galery-item-js")];
    this.Attrdata = this.Gal.getAttribute("data");
    this.fotoWidth = 0;
    this.fotoHeight = 0;
  }
  // ==================================
  close(foto, tWidth, tHeight) {
    
    var img = foto.querySelector(".galery__img");
    img.style.outlineWidth = 0;
    var anim = foto.animate(
      [
        {
          width: tWidth + "px",
          height: tHeight + "px",
          opacity: 1,
        },
        {
          width: `0px`,
          height: `0px`,
          opacity: 0,
        },
      ],
      {
        duration: 300,
        easing: "ease-in-out",
      }
    );
    const beendet = () => {
      foto.style.height = "0px";
      foto.style.width = "0px";
      
      
    };
    anim.addEventListener("finish", (e) => {
      beendet();
    });
  }
  // ==================================
  open(foto, tWidth, tHeight) {
    foto.style.borderColor = "transparent";
    var img = foto.querySelector(".galery__img");
    var animopen = foto.animate(
      [
        {
          width: 0,
          height: 0,
          opacity: "0",
          
        },
        {
          width: tWidth + "px",
          height: tHeight + "px",
          opacity: "1",
        },
      ],
      {
        duration: 300,
        easing: "ease-in-out",
      }
    );
    const beendetopen = () => {
      foto.style.width = tWidth + "px";
      foto.style.height = tHeight + "px";
      foto.style.opacity = 1;
      img.style.outlineWidth = 1 + "px";
    };
    animopen.addEventListener("finish", (e) => {
      beendetopen();
    });
  }
  // ==================================
  change(foto, tWidth, tHeight) {
        var img = foto.querySelector(".galery__img");
        img.style.outlineWidth = 0 + "px";
    var anim = foto.animate(
      [
        {
          width: tWidth + "px",
          height: tHeight + "px",
          opacity: "1",
          
        },
        {
          height: "0px",
          width: "0px",
          opacity: "0",
        },
      ],
      {
        duration: 300,
        easing: "ease-in-out",
      }
    );

    const beendet = () => {
      foto.style.height = "0px";
      foto.style.width = "0px";
      foto.style.opacity = 0;
      
        this.open(foto, tWidth, tHeight);
    };
    anim.addEventListener("finish", (e) => {
      beendet();
    });
  }
  // ==================================
  start(tWidth, tHeight) {
    
    this.GalBody.classList.add("_is-active");

    for (let i = 0; i < this.navItems.length; i++) {
      this.temp = this.navItems[i];
      if (this.Gal === this.temp) {
        this.numer = i;
        this.temp.classList.add("_is-active");
        this.temp.setAttribute("disabled", "true");
      } else if (this.temp.classList.contains("_is-active")) {
        this.temp.classList.remove("_is-active");
        this.temp.removeAttribute("disabled");
      }
    }
    // =======================================================

var tempchange = this.fotos.map((el) => {
  if (el.getAttribute("data") === this.Attrdata) {
    return el;
  }
});

    if (this.Attrdata === "all") {
      MyGalery.resetAll(tWidth, tHeight);
    } else {
      var tempclose = this.fotos.map((el) => {
        if (el.getAttribute("data") !== this.Attrdata) {
          return el;
        }
      });

      if (tempchange.length > 0) {
        tempchange.forEach((element) => {
          if (element) {
            if (element.clientHeight == 0) {
              this.open(element, tWidth, tHeight);
            } else {
              this.change(element, tWidth, tHeight);
            }
          }
        });
      }

      if (tempclose.length > 0) {
        tempclose.forEach((element) => {
          if (element) {
            if (element.clientHeight !== 0) {
              this.close(element, tWidth, tHeight);
            }
          }
        });
      }
    }

  }
  // ==================================
  static resetAll(tWidth, tHeight) {
    const All = document.querySelectorAll("._galery-body-js");
    All.forEach((el) => {
      if (el.classList.contains("_is-active")) {
        el.classList.remove("_is-active");
        el.querySelectorAll("._galery-nav-item-js").forEach((nav) => {
          nav.classList.remove("_is-active");
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
          var animopen = foto.animate(
            [
              {
                width: 0,
                height: 0,
                opacity: "0",
              },
              {
                width: tWidth + "px",
                height: tHeight + "px",
                opacity: "1",
              },
            ],
            {
              duration: 300,
              easing: "ease-in-out",
            }
          );
          const beendetopen = () => {
            foto.style.width = tWidth + "px";
            foto.style.height = tHeight + "px";
            foto.style.opacity = 1;
            img.style.outlineWidth = 1 + "px";
          };
          animopen.addEventListener("finish", (e) => {
            beendetopen();
          });
        });
      }
    });
  }
}

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
    this.fotoWidth = 0;
    this.fotoHeight = 0;
  }

  reset() {
    for (var i = 0; i < this.plasaItems.length; i++) {
      this.foto = this.plasaItems[i];

      var animclose = this.foto.animate(
        [
          {
            width: `${this.fotoWidth}` + "px",
            height: `${this.fotoHeight}` + "px",
          },
          {
            width: 0,
            height: 0,
          },
        ],
        {
          duration: 300,
          easing: "ease-in-out",
        }
      );
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
              width: `${this.fotoWidth}` + "px",
              height: `${this.fotoHeight}` + "px",
            },
          ],
          {
            duration: 300,
            easing: "ease-in-out",
          }
        );
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

    for (var i = 0; i < this.plasaItems.length; i++) {
      if (!this.plasaItems[i].classList.contains("_is-none")) {
        this.fotoWidth = this.plasaItems[i].scrollWidth;
        this.fotoHeight = this.plasaItems[i].scrollHeight;
      }
    }

    if (this.navData === "all") {
      MyGalery.resetAll();
    } else {
      this.reset();
      setTimeout(() => {
        for (var i = 0; i < this.plasaItems.length; i++) {
          this.foto = this.plasaItems[i];
          this.foto.classList.add("_is-none");
        }
        this.foto = "";
        this.open();
      }, 250);
    }
  }
  // ==================================
  static resetAll() {
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

        var fotoWidth, fotoHeight;
        el.querySelectorAll("._galery-item-js").forEach((foto) => {
          if (!foto.classList.contains("_is-none")) {
            fotoWidth = foto.scrollWidth;
            fotoHeight = foto.scrollHeight;
          }
        });

        el.querySelectorAll("._galery-item-js").forEach((foto) => {
          var img = foto.querySelector(".galery__img");
          foto.style.display = "flex";
          foto.classList.remove("_is-none");
          var animopen = foto.animate(
            [
              {
                width: 0,
                height: 0,
              },
              {
                width: `${fotoWidth}` + "px",
                height: `${fotoHeight}` + "px",
              },
            ],
            {
              duration: 300,
              easing: "ease-in-out",
            }
          );
          const beendetopenALL = () => {
            foto.style.width = `${fotoWidth}` + "px";
            foto.style.height = `${fotoHeight}` + "px";

            // img.style.outlineWidth = 1 + "px";
          };
          animopen.addEventListener("finish", (e) => {
            beendetopenALL();
          });
        });
      }
    });
  }
}

"use ctrict";

export const Accords = () => {
  class Accord {
    constructor(accord) {
      this.Accord = accord;
      this.Nab = [...this.Accord.querySelectorAll(".accord-item-js")];
      this.Hidden = this.Accord.querySelector(".accord-hidden-js");
      this.Hiddens = [...this.Accord.querySelectorAll(".accord-content-js")];
    }

    navLogik(item) {
      if (item.classList.contains("_is-active")) {
        item.classList.remove("_is-active");
        item.removeAttribute("disabled");
      } else {
        item.classList.add("_is-active");
        item.setAttribute("disabled", true);
      }
      [...document.querySelectorAll(".accord-item-js")].forEach((el) => {
        if (el.classList.contains("_is-active") && el !== item) {
          el.classList.remove("_is-active");
          el.removeAttribute("disabled");
        }
      });
    }

    actHidden(indexItem) {
      for (let i = 0; i < this.Hiddens.length; ++i) {
        if (i === indexItem) {
          this.Hiddens[i].classList.add("_is-active");
        } else if (this.Hiddens[i].classList.contains("_is-active")) {
          this.Hiddens[i].classList.remove("_is-active");
        }
      }
    }

    activ(indexItem) {
      if (this.Hidden.classList.contains("_is-active")) {
        this.Hidden.classList.remove("_is-active");

        setTimeout(() => {
          this.Hidden.classList.add("_is-active");
          this.actHidden(indexItem);
        }, 300);
      } else {
        this.Hidden.classList.add("_is-active");
        this.actHidden(indexItem);
      }

      [...document.querySelectorAll(".accord-hidden-js")].forEach((item) => {
        if (item.classList.contains("_is-active") && item !== this.Hidden) {
          item.classList.remove("_is-active");
        }
      });
    }

    start() {
      document.addEventListener("click", (e) => {
        
        if (
          e.target.closest(".accord-item-js") &&
          e.target.closest(".accord-item-js").closest(".accord-js") ==
            this.Accord
        ) {
          var item = e.target.closest(".accord-item-js");
          var indexItem = this.Nab.indexOf(item);
          this.navLogik(item);
          this.activ(indexItem);
          setTimeout(() => {
            var temp = this.Nab.filter(function (el) {
              return el.classList.contains("_is-active");
            });
            if (temp.length === 0) {
              Accord.resetAll();
            }
          }, 300);
        }

        if (!e.target.closest(".accord-js")) {
          Accord.resetAll();
          // if (document.querySelector(".accord-galery-js")) {
          //   Accord.open0(document.querySelector(".accord-galery-js"));
          // }
        }
      });
    }

    static resetAll() {
      [...document.querySelectorAll(".accord-item-js")].forEach((item) => {
        if (item.classList.contains("_is-active")) {
          item.classList.remove("_is-active");
          item.removeAttribute("disabled");
        }
      });
      [...document.querySelectorAll(".accord-hidden-js")].forEach((item) => {
        if (item.classList.contains("_is-active")) {
          item.classList.remove("_is-active");
        }
      });
      setTimeout(() => {
        [...document.querySelectorAll(".accord-content-js")].forEach((item) => {
          if (item.classList.contains("_is-active")) {
            item.classList.remove("_is-active");
          }
        });
      }, 300);
    }

    // static open0(el) {
    //   var temp = [];
    //   var tempContent = [];
    //   setTimeout(() => {
    //         temp = [...el.querySelectorAll("._galery-item-js")];
    //         temp[0].classList.add("_is-active");
    //         temp[0].setAttribute("disabled", true);
    //         tempContent = [...el.querySelectorAll(".accord-content-js")];
    //         tempContent[0].classList.add("_is-active");
    //         el.querySelector(".accord-hidden-js").classList.add("_is-active");
    //   }, 300);
    // }
  }
  const accordAll = document.querySelectorAll(".accord-js");
  accordAll.forEach((cell) => {
    new Accord(cell).start();
  });

  const contentGallery = () => {
    var allcontentGallery = [
      ...document
        .querySelector(".accord--galery")
        .querySelectorAll(".accord-content-js "),
    ];

    var temp1 = [];
    for (let i = 0; i < allcontentGallery.length; ++i) {
      temp1[i] = allcontentGallery[i].innerHTML;
    }
    temp1 = temp1.join(" ");
    allcontentGallery[allcontentGallery.length - 1].innerHTML = temp1;
  };

  if (document.querySelector(".accord--galery")) {
    contentGallery();
  }
};

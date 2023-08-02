"use ctrict";

export const Accords = () => {
  class Accord {
    constructor(accord) {
      this.Accord = accord;
      this.NavButtons = [
        ...this.Accord.querySelectorAll("._accord-nav-js button"),
      ];
      this.Hidden = this.Accord.querySelector("._accord-hidden-js");
      this.Default = this.Accord.querySelector("._accord-default-js");
      this.HiddenWrap = this.Accord.querySelector("._accord-hidden-wrap-js");
      this.Hiddens = [...this.Accord.querySelectorAll("._accord-content-js")];
      this.Index = this.Hiddens.indexOf(this.Default);
      this.resetTime = 0;
    }

    activItem() {
      this.resetTime = 0;
      for (let i = 0; i < this.NavButtons.length; ++i) {
        if (this.NavButtons[i].classList.contains("_is-active")) {
          this.resetTime = 200;
        }
      }

      for (let i = 0; i < this.NavButtons.length; ++i) {
        if (this.NavButtons[i].classList.contains("_is-active")) {
          this.NavButtons[i].classList.remove("_is-active");
          this.NavButtons[i].removeAttribute("disabled");
        }
      }
      this.NavButtons[this.Index].classList.add("_is-active");
      this.NavButtons[this.Index].setAttribute("disabled", true);

      setTimeout(() => {
        for (let i = 0; i < this.Hiddens.length; ++i) {
          if (this.Hiddens[i].classList.contains("_is-active")) {
            this.Hiddens[i].classList.remove("_is-active");
          }
        }
        this.Hiddens[this.Index].classList.add("_is-active");
        this.Hidden.classList.add("_is-active");
      }, this.resetTime);
    }

    resetNull() {
      for (let i = 0; i < this.NavButtons.length; ++i) {
        if (this.NavButtons[i].classList.contains("_is-active")) {
          this.NavButtons[i].classList.remove("_is-active");
          this.NavButtons[i].removeAttribute("disabled");
        }
      }
      setTimeout(() => {
        for (let i = 0; i < this.Hiddens.length; ++i) {
          if (this.Hiddens[i].classList.contains("_is-active")) {
            this.Hiddens[i].classList.remove("_is-active");
          }
        }
      }, 1000);
      this.Hidden.classList.remove("_is-active");
    }

    start() {
      if (this.Index !== -1) {
        this.activItem();
      }
      for (let i = 0; i < this.NavButtons.length; ++i) {
        this.NavButtons[i].addEventListener("click", (e) => {
          this.Index = i;
          if (this.Index !== -1) {
            this.Hidden.classList.remove("_is-active");
          }
          this.activItem();
        });
      }

      document.addEventListener("click", (e) => {
        if (
          !e.target.closest("._accord-js") &&
          this.Hiddens.indexOf(this.Default) === -1
        ) {
          this.resetNull();
        } else if (
          !e.target.closest("._accord-js") &&
          this.Index !== this.Hiddens.indexOf(this.Default)
        ) {
          this.Index = this.Hiddens.indexOf(this.Default);
          this.Hidden.classList.remove("_is-active");
          this.activItem();
        }

        if (
          e.target.closest("._accord-js") !== this.Accord &&
          this.Index !== this.Hiddens.indexOf(this.Default)
        ) {
          if (this.Hiddens.indexOf(this.Default) !== -1) {
            this.Index = this.Hiddens.indexOf(this.Default);
            this.Hidden.classList.remove("_is-active");
            this.activItem();
          } else {
            this.resetNull();
          }
        }
      });
    }
  }

  const accordAll = document.querySelectorAll("._accord-js");
  accordAll.forEach((cell) => {
    new Accord(cell).start();
  });
  // ====================================
  class contentGallery {
    constructor(cell) {
      this.allcontentGallery = [
        ...cell.querySelectorAll("._accord-content-js "),
      ];
      this.temp1 = [];
    }

    start() {
      for (let i = 0; i < this.allcontentGallery.length; ++i) {
        this.temp1[i] = this.allcontentGallery[i].innerHTML;
      }
      this.temp1 = this.temp1.join(" ");
      this.allcontentGallery[this.allcontentGallery.length - 1].innerHTML =
        this.temp1;
    }
  }

  if (document.querySelector("._accord-galery-js")) {
    [...document.querySelectorAll("._accord-galery-js")].forEach((cell) => {
      new contentGallery(cell).start();
    });
  }
  // ==========================================
  class contentCases {
    constructor(cell) {
      this.cell = cell;
      this.allcontentCases = [...cell.querySelectorAll("._accord-content-js ")];
      this.content = {};
      this.temp = [];
      this.CaseSrc ='';
      this.StoreElement ={}
    }

    createSlide(StoreElement) {
      var tempSlide = document.createElement("li");
      tempSlide.classList.add("slider__item", "swiper-slide");
      tempSlide.innerHTML = `<div class="imgs"><img src="${StoreElement.src}"></div>`;
      this.cell.querySelector(".swiper-wrapper").append(tempSlide);

    }

    start() {

      // this.allcontentCases.forEach((sell) => {
      //   console.log(sell);
      //   if (sell.classList.contains("_is-active")) {
      //     this.content = sell;
      //     console.log(this.content);
      //   }
      // });

console.log(this.allcontentCases);

      //  [... this.content.querySelectorAll("img")].forEach((cell) => {
      //    this.CaseSrc = cell.getAttribute("src");
      //    this.StoreElement = {
      //      src: this.CaseSrc,
      //    };
      //    this.createSlide(this.StoreElement);
      //  });
    }
  }

  if (document.querySelector("._accord-galery-js")) {
    [...document.querySelectorAll("._accord-galery-js")].forEach((cell) => {
      new contentGallery(cell).start();
    });
  }

  if (document.querySelector("._accord-cases-js")) {
    [...document.querySelectorAll("._accord-cases-js")].forEach((cell) => {
      new contentCases(cell).start();
    });
  }
};

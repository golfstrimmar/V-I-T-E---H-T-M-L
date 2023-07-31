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
    var newAccord = new Accord(cell);
    newAccord.start();
  });

  const contentGallery = () => {
    var allcontentGallery = [
      ...document
        .querySelector("._accord-galery-js")
        .querySelectorAll("._accord-content-js "),
    ];
    var temp1 = [];
    for (let i = 0; i < allcontentGallery.length; ++i) {
      temp1[i] = allcontentGallery[i].innerHTML;
    }
    temp1 = temp1.join(" ");
    allcontentGallery[allcontentGallery.length - 1].innerHTML = temp1;
  };

  if (document.querySelector("._accord-galery-js")) {
    contentGallery();
  }
};

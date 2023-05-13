"use ctrict";

export class Accord {
  constructor(button) {
    this.button = button;
    this.Nab = [
      ...this.button.closest(".accord-js").querySelectorAll(".accord-item-js"),
    ];
    this.Nabours = this.Nab.map((el) => {
      if (!el.classList.contains("accord-hidden-js")) {
        return el;
      }
    });
    this.Hiddens = [
      ...this.button.closest(".accord-js").querySelector(".accord-hidden-js")
        .children,
    ];
    this.flag = false;
  }

 
  // -----------------------------------------------
  outOpen(i) {
    this.Hiddens[i].animate(
      [{ height: "0px" }, { height: `${this.Hiddens[i].scrollHeight}px` }],
      {
        duration: 200,
        easing: "ease-in-out",
      }
    );
    this.Nabours[i].classList.add("_is-active");
    this.Hiddens[i].classList.add("_is-active");
    setTimeout(() => {
      this.Hiddens[i].style.height = this.Hiddens[i].scrollHeight + "px";
    }, 150);
  }
  // -----------------------------------------------

  // -----------------------------------------------
  actionOpen() {
    for (let i = 0; i < this.Nabours.length; i++) {
      if (this.Nabours[i] === this.button) {
        this.outOpen(i);
      }
    }
  }
  // -----------------------------------------------
  actionClose() {
    for (let i = 0; i < this.Nabours.length; i++) {
      if (this.Nabours[i].classList.contains("_is-active")) {
        this.Hiddens[i].animate(
          [{ height: `${this.Hiddens[i].scrollHeight}px` }, { height: "0px" }],
          {
            duration: 200,
            easing: "ease-in-out",
          }
        );
        setTimeout(() => {
          this.Nabours[i].classList.remove("_is-active");
          this.Hiddens[i].classList.remove("_is-active");
          this.Hiddens[i].style.height = 0 + "px";
        }, 190);
      }
    }
  }
  // -----------------------------------------------
  start() {
    if (!this.button.classList.contains("_is-active")) {
      for (let i = 0; i < this.Nabours.length; i++) {
        if (this.Nabours[i].classList.contains("_is-active")) {
           this.Hiddens[i].animate(
             [
               { height: `${this.Hiddens[i].scrollHeight}px` },
               { height: "0px" },
             ],
             {
               duration: 200,
               easing: "ease-in-out",
             }
           );
           setTimeout(() => {
             this.Nabours[i].classList.remove("_is-active");
             this.Hiddens[i].classList.remove("_is-active");
             this.Hiddens[i].style.height = 0 + "px";
           }, 190);
        }
      }
      setTimeout(() => {
        this.actionOpen();
      }, 100);
    } else {
      this.actionClose();
    }
 
  }
  // -----------------------------------------------
  static resetAll() {
    [...document.querySelectorAll(".accord-item-js")].forEach((item) => {
      item.classList.remove("_is-active");
    });

    [...document.querySelector(".accord-hidden-js").children].forEach((item) => {
      if (item.classList.contains("_is-active")){
        var animation = item.animate(
          [{ height: `${item.scrollHeight}px` }, { height: "0px" }],
          {
            duration: 200,
            easing: "ease-in-out",
          }
        );
        animation.addEventListener(
          "finish",
          function () {
            item.style.height = 0;
          },
          false
        );
      }
    });
  }
  // -----------------------------------------------
}

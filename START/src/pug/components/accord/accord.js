"use ctrict";
import Plyr from "plyr";
export class Accord {
  constructor(button) {
    this.button = button;
    this.Accord = this.button.closest(".accord-js");
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
    this.nummer = 0;
    this.simplePlir = "";
  }

  // ================================
  // openPlyr() {
  //   if (this.Accord.querySelector("#player-1")) {
  //     var r = this.Accord.querySelector("#player-1");
  //     this.simplePlir = new Plyr(r);
  //     this.simplePlir.play();
  //   }
  // }
  // closePlyr() {
  //   document.addEventListener("click", (e) => {
  //     if (this.simplePlir) {
  //       this.simplePlir.destroy();
  //       this.simplePlir = "";
  //     }
  //   });
  // }
  // -----------------------------------------------

  close() {
    var temp1 = this.Hiddens[this.nummer];
    var temp2 = this.Nabours[this.nummer];

    var animation = this.Hiddens[this.nummer].animate(
      [
        { height: `${this.Hiddens[this.nummer].scrollHeight}px` },
        { height: "0px" },
      ],
      {
        duration: 200,
        easing: "ease-in-out",
      }
    );

    const activeHEAD = (e) => {
      temp2.classList.remove("_is-active");
      temp1.classList.remove("_is-active");
      temp1.style.height = 0;
    };
    animation.addEventListener(
      "finish",
      function () {
        activeHEAD();
      },
      false
    );
  }

  // ================================

  open() {
    [...document.querySelector(".accord-hidden-js").children].forEach(
      (item) => {
        item.style.display = "block";
      }
    );
    this.Nabours[this.nummer].classList.add("_is-active");
    var temp1 = this.Hiddens[this.nummer];
    temp1.classList.add("_is-active");

    var animation = temp1.animate(
      [{ height: "0px" }, { height: `${temp1.scrollHeight}px` }],
      {
        duration: 200,
        easing: "ease-in-out",
      }
    );

    const activeHEAD = (e) => {
      temp1.style.height = `${temp1.scrollHeight}px`;
      temp1.style.height = "auto";
    };
    animation.addEventListener(
      "finish",
      function () {
        activeHEAD();
      },
      false
    );
  }

  Change(i, nummer) {
    var temp1 = this.Nabours[i];
    var temp2 = this.Hiddens[i];
    var temp3 = this.Nabours[nummer];
    var temp4 = this.Hiddens[nummer];

    var animation = temp2.animate(
      [{ height: `${temp2.scrollHeight}px` }, { height: "0px" }],
      {
        duration: 200,
        easing: "ease-in-out",
      }
    );
    function openHidButton() {
      temp1.classList.remove("_is-active");
      temp2.classList.remove("_is-active");
      temp2.style.height = 0;
      temp3.classList.add("_is-active");
      temp4.classList.add("_is-active");
      var an = temp4.animate(
        [{ height: "0px" }, { height: `${temp4.scrollHeight}px` }],
        {
          duration: 200,
          easing: "ease-in-out",
        }
      );

      function finischAnim() {
        temp4.style.height = `${temp4.scrollHeight}px`;
        temp4.style.height = "auto";
      }
      an.addEventListener(
        "finish",
        function () {
          finischAnim();
        },
        false
      );
    }

    animation.addEventListener(
      "finish",
      function () {
        openHidButton();
      },
      false
    );
  }
  // -----------------------------------------------
  start() {
    for (let i = 0; i < this.Nabours.length; i++) {
      if (this.Nabours[i] == this.button) {
        this.nummer = i;
      }
    }

    if (!this.button.classList.contains("_is-active")) {
      for (let i = 0; i < this.Nabours.length; i++) {
        if (
          this.Nabours[i] !== this.Nabours[this.nummer] &&
          this.Nabours[i].classList.contains("_is-active")
        ) {
          this.Change(i, this.nummer);
        }
      }
    } else {
      this.close();
    }

    if (!this.button.classList.contains("_is-active")) {
      for (let i = 0; i < this.Nabours.length; i++) {
        if (
          this.Nabours[i] !== this.button &&
          this.Nabours[i].classList.contains("_is-active")
        ) {
          return;
        }
      }
      this.open();
    }
  }
  // -----------------------------------------------
  static resetDouble() {
    [...document.querySelectorAll(".accord-item-js")].forEach((item) => {
      item.classList.remove("_is-active");
    });
    [...document.querySelector(".accord-hidden-js").children].forEach(
      (item) => {
        item.classList.remove("_is-active");
        item.style.height = 0;
        item.style.display = "none";
      }
    );
  }
  // -----------------------------------------------
  static resetAll() {
    [...document.querySelectorAll(".accord-item-js")].forEach((item) => {
      item.classList.remove("_is-active");
    });

    [...document.querySelector(".accord-hidden-js").children].forEach(
      (item) => {
        if (item.classList.contains("_is-active")) {
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
              item.classList.remove("_is-active");
              item.style.height = 0;
            },
            false
          );
        }
      }
    );
  }
  // -----------------------------------------------
}

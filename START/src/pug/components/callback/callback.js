"use strict";

export class CallBackAdd {
  constructor(elem) {
    this.elem = elem;
    this.text = this.elem.querySelector(".callback-slide__text");
    this.button = this.elem.querySelector(".callback-slide__button");
  }
  // --------------------------------------
  close() {
    this.text.style.maxHeight = 144 + "px";

    var anim = this.text.animate(
      [{ maxHeight: `${this.text.scrollHeight}px` }, { maxHeight: 144 + "px" }],
      {
        duration: 300,
        easing: "ease-in-out",
      }
    );
    const beendet = () => {
      this.text.style.maxHeight = 144 + "px";
    };
    anim.addEventListener("finish", (e) => {
      beendet();
    });
  }
  // --------------------------------------
  open() {
    this.button.addEventListener("click", (e) => {
      if (!this.text.classList.contains("_is-active")) {
        var animopen = this.text.animate(
          [
            { maxHeight: 144 + "px" },
            { maxHeight: `${this.text.scrollHeight}px` },
          ],
          {
            duration: 300,
            easing: "ease-in-out",
          }
        );
        const beendetanimopen = () => {
          this.text.style.maxHeight = `${this.text.scrollHeight}px`;
          this.text.style.height = "auto";
        };
        animopen.addEventListener("finish", (e) => {
          beendetanimopen();
        });

        this.text.classList.add("_is-active");
      } else {
        this.text.classList.remove("_is-active");
        this.close();
      }
    });
  }

  start() {
    if (this.text.clientHeight > 144) {
      this.button.classList.remove("_not-visible");
      this.close();
      setTimeout(() => {
        this.open();
      }, 3000);
    }
  }
}

export class CallAdd {
  constructor(elem) {
    this.elem = elem;
    this.name = this.elem.querySelector("#name");
    this.nameValue = this.name.value;
    this.callback = document
      .querySelector("#swiper-callback")
      .querySelector(".swiper-wrapper");
  }
  // --------------------------------------
  start() {
this.name.addEventListener("change", (e) => {

var temp = document.createElement('div')
temp.classList.add('swiper-slide','callback-slide','rel')
temp.innerHTML = ` <svg class="callback-slide__img">
    <use xlink:href="#Union"></use>
  </svg>
  <div class="callback-slide__title">
    <h4>${this.callback}</h4>
  </div>
  <p class="callback-slide__datum">18 июля 2021</p>
  <p class="callback-slide__text">
    Алкогольная и наркотическая зависимость – одна из основных возможных причин
  </p>
  <button class="callback-slide__button _not-visible">
    <span>Весь отзыв</span>
    <svg>
      <use xlink:href="#arrow-left-big"></use>
    </svg>
  </button>`;
  this.callback.append(temp);
});
  }
}
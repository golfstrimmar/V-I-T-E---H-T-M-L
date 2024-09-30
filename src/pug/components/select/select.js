"use strict";

export const Select = (select, e) => {
  class newSelect {
    constructor(select, e) {
      this.select = select;
      this.span = this.select.querySelector(".dropdown-button span");
      this.input = this.select.querySelector("input");
    }
    start() {
      this.select.classList.remove("_is-filled");
      if (this.select.classList.contains("_is-active")) {
        this.select.classList.remove("_is-active");
        this.stop(e);
      } else {
        this.select.classList.add("_is-active");
      }
    }
    stop() {
      this.span.innerText = e.target.getAttribute("data-value");
      this.input.value = e.target.getAttribute("data-value");

      this.select.classList.add("_is-filled");
    }
    static discount() {}
  }

  const NewSelect = new newSelect(select, e);
  NewSelect.start();

  //  const $button = select.querySelector(".dropdown-button"),
  //    $list = select.querySelector(".dropdown-list"),
  //    items = $list.querySelectorAll(".dropdown-list__item"),
  //    $svg = $button.querySelector("svg");

  //    select.addEventListener("click", (e) => {
  //    e.preventDefault;
  //    let target = e.target;
  //    if (target.closest(".dropdown-button") === $button) {
  //      $button.classList.toggle("dropdown-button-active");
  //       target.closest(".dropdown-button").classList.toggle("dropdown-button-active");
  //       $list.classList.toggle("_is-active");
  //       $svg.classList.toggle("_is-active");

  //       items.forEach((item) => {
  //         item.addEventListener("click", (e) => {
  //           items.forEach((item) => {
  //             item == target
  //               ? item.classList.add("_item-active")
  //               : item.classList.remove("_item-active");
  //           });
  //           e.stopPropagation();
  //           $button.querySelector("span").innerHTML = item.innerHTML;
  //           $list.classList.remove("_is-active");
  //           $button.classList.remove("dropdown-button-active");
  //           $svg.classList.remove("_is-active");
  //         });
  //       });
  //    }
  //  });

  //  document.addEventListener("click", (e) => {
  //    if (e.target.closest(".dropdown-button") !== $button) {
  //      $button.classList.remove("dropdown-button-active");
  //      $list.classList.remove("_is-active");
  //      $svg.classList.remove("_is-active");
  //    }
  //  });

  //  document.addEventListener("keydown", (e) => {
  //    if (e.key === "Tab" || e.key === "Escape") {
  //      $button.classList.remove("dropdown-button-active");
  //      $list.classList.remove("_is-active");
  //      $svg.classList.remove("_is-active");
  //    }
  //  });
};

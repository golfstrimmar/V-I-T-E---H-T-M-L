"use strict";

export const Select = (select, e) => {
  class newSelect {
    constructor(select, e) {
      this.select = select;
      this.span = this.select.querySelector(".dropdown-button span");
      this.input = this.select.querySelector("input");
    }
    start() {
      event.preventDefault();
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
      this.select.classList.remove("_check_invalid");
    }
  }
  const NewSelect = new newSelect(select, e);
  NewSelect.start();
};

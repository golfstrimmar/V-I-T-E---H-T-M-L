"use ctrict";
import { Accord } from "./accord";

export class AccordGefault extends Accord {
  constructor(accord) {
    super(accord);
    this.Default = this.Accord.querySelector("._accord-default-js");
    this.Index = this.Hiddens.indexOf(this.Default);
  }
  openDefault() {
    this.NavButtons[this.Index].classList.add("_is-active");
    this.NavButtons[this.Index].setAttribute("disabled", true);
    this.Hiddens[this.Index].classList.add("_is-active");
    this.Hidden.classList.add("_is-active");
  }

  resetAll() {
    document.addEventListener("click", (e) => {
      if (!e.target.closest("._accord-js")) {
        allClassAccords.forEach((cell) => {
          if (cell.el.querySelector("._accord-default-js")) {
            var ddd = cell.el.querySelector("._accord-default-js");
            if (!ddd.classList.contains("_is-active")) {
              cell.elClass.itemsReset();
              cell.elClass.hiddenReset();
              setTimeout(() => {
                cell.elClass.openDefault();
              }, 200);
            }
          }
        });
      }
    });
  }
}

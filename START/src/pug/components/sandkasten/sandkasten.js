"use ctrict";

export const Sand = () => {
  const cards = document.querySelectorAll(".js-card");
  const cells = document.querySelectorAll(".js-cell");
  var res;
  var deutsch;
  var probire;

  const dragStart = function () {
    setTimeout(() => {
      this.classList.add("hide");
    }, 0);
    if (
      this.closest(".uber-block").querySelector(".versteckt") &&
      this.closest(".uber-block").querySelector(".mark")
    ) {
      deutsch = this.closest(".uber-block").querySelector(".mark").innerHTML;
    }
    res = this;
  };

  const dragEnd = function () {
    this.classList.remove("hide");
  };
  const dragOver = function (evt) {
    evt.preventDefault();
  };

  const dragEnter = function (evt) {
    evt.preventDefault();
    this.classList.add("hovered");
  };

  const dragLeave = function () {
    this.classList.remove("hovered");
  };

  cards.forEach((cell) => {
    cell.addEventListener("dragstart", dragStart);
    cell.addEventListener("dragend", dragEnd);
    cells.forEach((cell) => {
      cell.addEventListener("dragover", dragOver);
      cell.addEventListener("dragenter", dragEnter);
      cell.addEventListener("dragleave", dragLeave);
      cell.addEventListener("drop", function () {
        if (cell.querySelector(".mark")) {
          probire = cell.querySelector(".mark");
          if (deutsch === probire.innerHTML) {
            cell.append(res);
            if (!cell.closest(".uber__links")) {
              res.style.background = "#13c78b";
            } else {
              res.style.background = "rgb(93, 104, 250)";
            }
          }
        }
      });
    });
  });
};

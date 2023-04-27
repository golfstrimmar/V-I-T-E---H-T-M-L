"use ctrict";

export const Sand = () => {
  const cards = document.querySelectorAll(".js-Sand");
  const arrCards = Array.prototype.slice.call(cards);
  const cells = document.querySelectorAll(".js-cell-Sand");
  const arrCells = Array.prototype.slice.call(cells);
  const enter = document.querySelector("#enter");
  const clear = document.querySelector("#clear");

  var hoverCard, res, temp;
  var ind = 0;
  var inputVal = "";

  const Clear = function () {
    for (var i = 0; i < arrCells.length; i++) {
      arrCells[i].append(arrCards[i]);
    }
  };

  const dragStart = function () {
    setTimeout(() => {
      this.classList.add("hide");
    }, 0);
    res = this;
    temp = this.closest(".js-cell-Sand");
  };

  const dragEnd = function () {
    this.classList.remove("hide");
  };
  const dragOver = function (evt) {
    evt.preventDefault();
  };

  const dragEnter = function (evt) {
    evt.preventDefault();
    if (this.querySelector(".js-Sand")) {
      hoverCard = this.querySelector(".js-Sand");
      this.querySelector(".js-Sand").remove();
      temp.append(hoverCard);
      temp = this;
    }
  };

  const dragLeave = function () {
    this.classList.remove("hovered");
    hoverCard = this.querySelector(".js-Sand");
  };

  const dropCell = function () {
    enter.focus();
    enter.value = "";
  };

  enter.addEventListener("input", function () {
    inputVal = this.value;
    arrCards.forEach((cell) => {
      cell.addEventListener("click", function () {
        cell.innerHTML = inputVal;
      });
    });
  });

  document.addEventListener("keydown", function (event) {
    if (event.code == "Enter") {
      arrCards.forEach((cell) => {
        if (arrCards.indexOf(cell) === ind) {
          cell.innerHTML = inputVal;
        }
      });
      enter.value = "";
      inputVal = "";
      dropCell();
      ind = ind + 1;
    }
  });

  clear.addEventListener("click", function () {
    enter.value = "";
    inputVal = "";
    dropCell();
  });

  document.addEventListener("click", function (event) {
    if (event.target.closest("#clear")) {
      enter.value = "";
      inputVal = "";
      dropCell();
    } else if (event.target.closest("#clear-blocks")) {
      arrCards.forEach((card) => {
        card.innerHTML = "";
      });
      dropCell();
      ind = 0;
      Clear();
    }
  });

   arrCards.forEach((cell) => {
     cell.addEventListener("click", function () {
       dropCell();
     });
   });

  // ==============================

  cells.forEach((cell) => {
    cell.addEventListener("dragover", dragOver);
    cell.addEventListener("dragenter", dragEnter);
    cell.addEventListener("dragleave", dragLeave);
    cell.addEventListener("drop", function () {
      cell.append(res);
      dropCell();
    });
  });

  cards.forEach((card) => {
    card.addEventListener("dragstart", dragStart);
    card.addEventListener("dragend", dragEnd);
  });
    window.addEventListener("scroll", function (event) {
      if (window.pageYOffset > 100) {
        document.querySelector("#sand").classList.add("responciveHeader");
        document.querySelector("#sand").style.zIndex = '1000'
      } else {
        document.querySelector("#sand").classList.remove("responciveHeader");
        document.querySelector("#sand").style.zIndex = "1";
      }
    });
};

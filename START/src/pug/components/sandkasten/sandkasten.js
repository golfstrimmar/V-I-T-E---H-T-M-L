"use ctrict";

export const Sand = () => {
  const cards = document.querySelectorAll(".js-Sand");
  const arrCards = Array.prototype.slice.call(cards);
  const cells = document.querySelectorAll(".js-cell-Sand");
  const arrCells = Array.prototype.slice.call(cells);
  const enter = document.querySelector("#enter");
  const clear = document.querySelector("#clear");
  const clearBlocks = document.querySelector("#clear-blocks");

  var hoverCard;
  var res;
  var temp;
  var inputVal = "";

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

  const Enter = (function () {
    enter.addEventListener("input", function () {
      inputVal = this.value;
      arrCards.forEach((cell) => {
        cell.addEventListener("click", function () {
          cell.innerHTML = inputVal;
        });
      });
    });
  })();

  clear.addEventListener("click", function () {
    enter.value = "";
    inputVal = "";
    dropCell();
  });

  clearBlocks.addEventListener("click", function () {
    arrCards.forEach((card) => {
      card.innerHTML = "";
    });
    dropCell();
  });

  const dropCell = function () {
    enter.focus();
    enter.value = "";
  };

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
};

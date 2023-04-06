"use ctrict";
import { MyTab } from "./../tabs/tabs";

export const MyDeutsch = () => {
  let deutschArr = [...document.querySelectorAll(".tabs__tab")];
  // deutschArr.forEach((tab) => {
  //   let hidden = tab.querySelector(".tab-hidden-js");
  //   hidden.style.height = "0px";
  // });

  const deutschTab = (cell) => {
    const title = cell.querySelector(".tab-title-js");
    const hidden = cell.querySelector(".tab-hidden-js");
    let addition = 0;

    function close() {
      const naibous = [...cell.closest(".tabs-container-js").children];
      function resetAll(el) {
        const title = el.querySelector(".tab-title-js");
        const hidden = el.querySelector(".tab-hidden-js");
        title.remAct;
        hidden.remAct;
        hidden.classList.add("_not-active");
        hidden.style.maxHeight = 0;
      }
      naibous.forEach((el) => {
        resetAll(el);
      });
      if (hidden.querySelector(".tabs-container-js")) {
        const childrens = [
          ...hidden.querySelector(".tabs-container-js").children,
        ];
        childrens.forEach((el) => {
          resetAll(el);
        });
      }
    }

    if (!title.matches("._is-active")) {
      close();
      setTimeout(() => {
        addition = hidden.scrollHeight;
        title.addAct;
        hidden.classList.remove("_not-active");
        hidden.addAct;
        hidden.style.maxHeight = addition + "px";
        if (cell.closest(".tab-hidden-js")) {
          const parent = cell.closest(".tab-hidden-js");
          parent.style.maxHeight = "300px";
        }
      }, 0);
    }

    if (title.matches("._is-active")) {
      close();
    }
  };

  var timerId;
  var i = 0;

  function startFunction() {
    if (!timerId) {
      timerId = setInterval(function () {
        deutschTab(deutschArr[i]);
        i++;
        if (i >= deutschArr.length) {
          i = 0;
        }
      }, 1000);
    }
  }

  function stopFunction() {
    if (timerId) {
      clearInterval(timerId);
      timerId = null;
      console.log(timerId);
    }
  }

  document.addEventListener("click", (e) => {
    console.log(e.target);
    if (e.target.closest("#but-deutsch")) {
      startFunction();
    }
    if (e.target.closest("#but-deutsch-stop")) {
      stopFunction();
    }
  });
};

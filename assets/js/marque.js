"use ctrict";

export const Marque = () => {
  if (document.querySelector(".marque")) {
    const marque = document.querySelectorAll(".marque");
    var marks = [...marque];
    marks.forEach((sell) => {
      sell.querySelector("ul").classList.add("_activRun");
      const CopyChild = function () {
        var child = sell.querySelector("ul").cloneNode(true);
        child.classList.add("_activRun");
        sell.appendChild(child);
      };
      CopyChild();
      CopyChild();
      CopyChild();
      CopyChild();
    });
  }
};

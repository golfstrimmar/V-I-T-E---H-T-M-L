"use ctrict";

 export const MyRange = (item) => {
    const rangeValue = item.querySelector("#rangeValue"),
      itemRange = item.querySelector("input[type='range']");

    const sliderRange = () => {
      let valPersent = (itemRange.value / itemRange.max) * 100;
      itemRange.style.background = `linear-gradient(to right, #4164ff ${valPersent}% , white ${valPersent}% )`;
      rangeValue.innerHTML = itemRange.value;
    };

    itemRange.addEventListener("input", sliderRange);
  };



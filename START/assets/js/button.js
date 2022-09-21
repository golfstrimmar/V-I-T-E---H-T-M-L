"use ctrict";

export const Button = (e) => {
  let target =  e.target.closest('.but-wave');
    e.preventDefault();
    let mValue = Math.max(target.clientWidth, target.clientHeight),
      addDiv = document.createElement("div"),
      rect = target.getBoundingClientRect();
    addDiv.classList.add("addDiv");
    addDiv.style.width = addDiv.style.height = mValue + "px";
    addDiv.style.left = e.clientX - rect.left - mValue / 2 + "px";
    addDiv.style.top = e.clientY - rect.top - mValue / 2 + "px";
    
    target.closest(".but-wave").append(addDiv);
    setTimeout(() => {
      addDiv.remove();
    }, 3000);
};


"use ctrict";

export const Anim = () => {
  
  const observer1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("top-animation");
      }
    });
  });

  const et = document.querySelectorAll("._enter-top");
  if (et.length > 0) {
    et.forEach((ent) => {
      observer1.observe(ent);
    });
  }
// ======================
  const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("left-animation");
      }
    });
  });

  const left = document.querySelectorAll("._enter-left");
  if (left.length > 0) {
    left.forEach((ent) => {
      observer2.observe(ent);
    });
  }

// ===============================

  const observer3 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("right-animation");
      }
    });
  });

  const right = document.querySelectorAll("._enter-right");
  if (right.length > 0) {
    right.forEach((ent) => {
      observer3.observe(ent);
    });
  }


};

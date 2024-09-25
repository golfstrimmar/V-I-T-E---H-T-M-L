"use ctrict";

export const Lazy = () => {
  const lazyImages = document.querySelectorAll("img.lazy");

  const options = {
    root: null,
    rootMargin: "5px",
    threshold: 0.1,
  };

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove("lazy");
        observer.unobserve(img);
      }
    });
  }, options);

  lazyImages.forEach((image) => {
    imageObserver.observe(image);
  });
};

// const MyLazysource = () => {
//   let images = document.querySelectorAll("source");
//   const options = {
//     root: null,
//     rootMargin: "-5px",
//     threshold: 0.1,
//   };
//   function handleImg(myImg, observer) {
//     myImg.forEach((myImgSingle) => {
//       // console.log(myImgSingle.intersectionRatio);
//       if (myImgSingle.intersectionRatio > 0) {
//         loadImg(myImgSingle.target);
//       }
//     });
//   }
//   function loadImg(img) {
//     if (img.getAttribute("data")) {
//       img.style.opacity = 1;
//       img.srcset = img.getAttribute("data");
//       img.src = img.getAttribute("data");
//     }
//   }

//   const observer = new IntersectionObserver(handleImg, options);
//   images.forEach((img) => {
//     if (img.getAttribute("data")) {
//       img.style.opacity = 0;
//     }
//     observer.observe(img);
//   });
// };
// MyLazysource();

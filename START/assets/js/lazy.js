"use ctrict";

export const Lazy = () => {
  const MyLazy = () => {
    let images = document.querySelectorAll("img");
    const options = {
      root: null,
      rootMargin: "-255px",
      threshold: 0.1,
    };
    function handleImg(myImg, observer) {
      myImg.forEach((myImgSingle) => {
        // console.log(myImgSingle.intersectionRatio);
        if (myImgSingle.intersectionRatio > 0) {
          loadImg(myImgSingle.target);
        }
      });
    }
    function loadImg(img) {
      if (img.getAttribute("data")) {
        img.style.opacity = 1;
        img.src = img.getAttribute("data");
      }
    }

    const observer = new IntersectionObserver(handleImg, options);
    images.forEach((img) => {
      if (img.getAttribute("data")) {
        img.style.opacity = 0;
      }
      observer.observe(img);
    });
  };
  MyLazy();

  const MyLazysource = () => {
    let images = document.querySelectorAll("source");
    const options = {
      root: null,
      rootMargin: "-5px",
      threshold: 0.1,
    };
    function handleImg(myImg, observer) {
      myImg.forEach((myImgSingle) => {
        // console.log(myImgSingle.intersectionRatio);
        if (myImgSingle.intersectionRatio > 0) {
          loadImg(myImgSingle.target);
        }
      });
    }
    function loadImg(img) {
      if (img.getAttribute("data")) {
        img.style.opacity = 1;
        img.srcset = img.getAttribute("data");
        img.src = img.getAttribute("data");
      }
    }

    const observer = new IntersectionObserver(handleImg, options);
    images.forEach((img) => {
      if (img.getAttribute("data")) {
        img.style.opacity = 0;
      }
      observer.observe(img);
    });
  };
  MyLazysource();
};
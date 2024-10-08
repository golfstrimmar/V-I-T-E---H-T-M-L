"use ctrict";

export const GalleryInit = () => {
  class contentGallery {
    constructor(cell) {
      this.allcontentGallery = [
        ...cell.querySelectorAll("._accord-content-js "),
      ];
      this.temp1 = [];
    }

    start() {
      for (let i = 0; i < this.allcontentGallery.length; ++i) {
        this.temp1[i] = this.allcontentGallery[i].innerHTML;
      }
      this.temp1 = this.temp1.join(" ");
      this.allcontentGallery[this.allcontentGallery.length - 1].innerHTML =
        this.temp1;
    }
  }

  [...document.querySelectorAll("._accord-galery-js")].forEach((cell) => {
    new contentGallery(cell).start();
  });
};
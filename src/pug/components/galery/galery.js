"use ctrict";

export const GalleryInit = () => {
  class contentGallery {
    constructor(cell) {
      this.gal = cell;
      this.allBlocks = this.gal.querySelector("._allBlocks ul");
      this.wrap = this.gal.querySelector("._accord-hidden-wrap");
      this.allItems = [...this.wrap.querySelectorAll(".galery__item")];
    }

    start() {
      if (this.allBlocks) {
        this.allBlocks;
        this.allItems.forEach((cell) => {
          const copyCell = cell.cloneNode(true);
          this.allBlocks.append(copyCell);
        });
      }
    }
  }
  [...document.querySelectorAll("._accord-galery-js")].forEach((cell) => {
    new contentGallery(cell).start();
  });
};

"use ctrict";
import Swiper, { Pagination } from "swiper";

export const CasesInit = () => {
  var swiperCases = {};

  [...document.querySelectorAll(".cases")].forEach((cell) => {
    var cases = [...cell.querySelectorAll("._cases-item-js")];
    var CaseTitle = "";
    var CaseContent = "";
    var CaseUrl = "";
    var CaseSrc = "";
    var StoreElement = {};

    function createSlide(StoreElement) {
      var tempSlide = document.createElement("li");
      tempSlide.classList.add("slider__item", "swiper-slide");
      tempSlide.innerHTML = `<div class="imgs"><img src="${StoreElement.src}"></div><div class="cases__info"><h3>${StoreElement.title} </h3><p>${StoreElement.content}</p><a class="btn btn--empty" href="${StoreElement.url}">See project<svg><use xlink:href="#Arrow"></use></svg></a></div>`;
      cell.querySelector(".swiper-wrapper").append(tempSlide);
    }

    cases.forEach((Case) => {
      CaseTitle = Case.querySelector("h4").innerHTML;
      CaseContent = Case.querySelector("p").innerHTML;
      CaseUrl = Case.querySelector("span").innerHTML;
      CaseSrc = Case.querySelector("b").innerHTML;
      StoreElement = {
        title: CaseTitle,
        content: CaseContent,
        url: CaseUrl,
        src: CaseSrc,
      };
      createSlide(StoreElement);
    });

    setTimeout(() => {
      swiperCases = new Swiper("#slider-cases", {
        slidesPerView: 4,
        spaceBetween: 30,
        // slidesPerGroup: 4,
        // loop: "true",
        speed: 500,
        grabCursor: true,
        modules: [Pagination],
        pagination: {
          el: ".swiper-pagination-cases",
          clickable: true,
        },
      });
    }, 0);
  });

  class Cases {
    constructor(Case) {
      this.Case = Case;
      this.NavButtons = [
        ...this.Case.closest(".cases-nav-js").querySelectorAll(
          "._cases-nav-item-js"
        ),
      ];
      this.sliderBlock =
        this.Case.closest(".cases").querySelector(".slider-cases");
      this.slider =
        this.Case.closest(".cases").querySelector(".swiper-wrapper");
      this.CaseData = this.Case.getAttribute("data");
      this.plaza = this.Case.closest(".cases-nav-js").nextElementSibling;
      this.dataCases = [...this.plaza.querySelectorAll("._cases-item-js")];
    }

    createSlide(StoreElement) {
      var tempSlide = document.createElement("li");
      tempSlide.classList.add("slider__item", "swiper-slide");
      tempSlide.innerHTML = `<div class="imgs"><img src="${StoreElement.src}"></div><div class="cases__info"><h3>${StoreElement.title} </h3><p>${StoreElement.content}</p><a class="btn btn--empty" href="${StoreElement.url}">See project<svg><use xlink:href="#Arrow"></use></svg></a></div>`;
      this.slider.append(tempSlide);
    }

    updateStart(cell) {
      this.CaseTitle = cell.querySelector("h4").innerHTML;
      this.CaseContent = cell.querySelector("p").innerHTML;
      this.CaseUrl = cell.querySelector("span").innerHTML;
      this.CaseSrc = cell.querySelector("b").innerHTML;
      this.StoreElement = {
        title: this.CaseTitle,
        content: this.CaseContent,
        url: this.CaseUrl,
        src: this.CaseSrc,
      };
      this.createSlide(this.StoreElement);
    }
    //
    navOrdnung() {
      this.NavButtons.forEach((cell) => {
        if (cell == this.Case) {
          cell.classList.contains("_is-active")
            ? (cell.classList.remove("_is-active"),
              cell.removeAttribute("disabled"))
            : (cell.classList.add("_is-active"),
              cell.setAttribute("disabled", "disabled"));
        } else {
          cell.classList.remove("_is-active");
          cell.removeAttribute("disabled", "disabled");
        }
      });
    }
    opacitySlider() {
      this.sliderBlock.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 200,
      });
    }

    start(swiperCases) {
      this.navOrdnung();
      var anim = this.sliderBlock.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: 200,
      });

      const beendet = () => {
        this.CaseTitle = "";
        this.CaseContent = "";
        this.CaseUrl = "";
        this.CaseSrc = "";
        this.StoreElement = {};
        this.slider.innerHTML = "";
        if (this.CaseData == "all") {
          this.dataCases.forEach((cell) => {
            this.updateStart(cell);
          });
        } else {
          this.dataCases.forEach((cell) => {
            var tempData = cell.getAttribute("data");
            if (tempData == this.CaseData) {
              this.updateStart(cell);
            }
          });
        }
        swiperCases.update();
        swiperCases.slideTo(0, 0, this.opacitySlider());
      };

      anim.addEventListener("finish", (e) => {
        beendet();
      });
    }
  }


  // ============
  document.addEventListener("click", (e) => {
    if (e.target.closest("._cases-nav-item-js")) {
      var tempCase = e.target.closest("._cases-nav-item-js");
      var newCases = new Cases(tempCase);
      newCases.start(swiperCases);
    }
  });
};

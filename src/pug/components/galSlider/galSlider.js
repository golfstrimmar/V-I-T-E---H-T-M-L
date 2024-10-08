"use strict";

// Импортировать Swiper и его модули
import Swiper, { Navigation, Pagination } from "swiper";

// Экспортировать функцию GalSlider
export const GalSlider = () => {
  // Получить элемент galSlider
  const gal = document.querySelector(".galSlider ._accord-hidden-wrap");

  // Получить все элементы списка внутри galSlider
  let ingal = [...gal.querySelectorAll("li")];

  // Получить элемент allBlocks
  const allBlocks = gal.querySelector("._allBlocks");

  // Инициализировать пустую строку для хранения HTML-кодов изображений
  let imagesHTML = "";

  // Отфильтровать элемент allBlocks из ingal
  imagesHTML = ingal.filter((foo) => {
    return !foo.classList.contains("_allBlocks");
  });

  // Добавить HTML-код каждого элемента списка к allBlocks
  imagesHTML.forEach((li) => {
    const cardHTML = li.innerHTML;
    allBlocks.innerHTML += cardHTML;
  });

  // Преобразовать HTML-код каждого элемента списка в массив
  let ingalContent = ingal.map((cell) => cell.innerHTML);

  // Сохранить массив в локальном хранилище
  localStorage.setItem("duble", JSON.stringify(ingalContent));

  // Очистить HTML-код каждого элемента списка
  ingal.forEach((cell) => {
    cell.innerHTML = "";
  });

  // Инициализировать пустой массив для хранения изображений
  var images = [];

  // Получить элементы galSlider и swiper-wrapper
  const galSlider = document.querySelector("#swiper-gal");
  let sw = document.querySelector("#galSwiper .swiper-wrapper");

  // Инициализировать экземпляр Swiper
  let galSwiperInstance = null;

  // Определить функцию init
  const init = (item, i) => {
    // Очистить элемент swiper-wrapper
    sw.innerHTML = "";

    // Получить сохраненный массив из локального хранилища
    const duble = JSON.parse(localStorage.getItem("duble"));

    // Определить регулярное выражение для поиска элементов card
    const regex =
      /<div class="card">[\s\S]*?<\/div>(?=<(?:\/div|<div class="card"))/g;

    // Получить все совпадения элементов card с помощью регулярного выражения
    var cardMatches = [...duble[i].matchAll(regex)];

    // Создать новый элемент swiper-slide для каждого совпадения элемента card
    cardMatches.forEach((match) => {
      const el = document.createElement("div");
      el.classList.add("swiper-slide");
      el.innerHTML = match;
      sw.append(el);
    });

    // Инициализировать экземпляр Swiper, если он не существует
    if (galSwiperInstance == null) {
      galSwiperInstance = new Swiper("#galSwiper", {
        spaceBetween: 10,
        slidesPerView: 4,
        // loop: true,
        speed: 500,
        modules: [Navigation, Pagination],
        navigation: {
          nextEl: ".arrow-prev-1",
          prevEl: ".arrow-next-1",
        },
        pagination: {
          el: ".swiper-pagination-1",
          clickable: true,
        },
        grabCursor: true,
      });
    }

    // Обновить экземпляр Swiper
    galSwiperInstance.update();
  };

  // Получить все скрытые элементы
  const hiddenItems = document.querySelectorAll(
    ".galSlider ._accord-hidden-wrap li"
  );

  // Наблюдать за каждым скрытым элементом за изменениями
  hiddenItems.forEach((item, index) => {
    const observer = new MutationObserver((mutationsList) => {
      mutationsList.forEach((mutation) => {
        // Проверить, изменился ли атрибут класса
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "class"
        ) {
          // Проверить, содержит ли элемент класс _is-active
          if (mutation.target.classList.contains("_is-active")) {
            // Вызвать функцию init с текущим элементом и индексом
            init(item, index);

            // Добавить элемент galSlider к элементу
            item.append(galSlider);

            // Проверить, существует ли экземпляр Swiper
            if (!galSwiperInstance) {
              // Добавить элемент galSlider к элементу снова
              item.append(galSlider);
            }
          } else {
            // Проверить, содержит ли элемент элемент galSlider
            if (item.contains(galSlider)) {
              // Удалить элемент galSlider
              galSlider.remove();
            }
          }
        }
      });
    });
    // Наблюдать за элементом за изменениями атрибутов
    observer.observe(item, { attributes: true });
  });
};

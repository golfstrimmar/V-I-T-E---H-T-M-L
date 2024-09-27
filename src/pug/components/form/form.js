"use ctrict";
export const Form = () => {
  const form = document.querySelector("#send-form");
  const firstName = form.querySelector("#firstname");
  const email = form.querySelector("#email");
  const tel = form.querySelector("#tel");
  const rating = form.querySelectorAll("[name='ratingForm']");
  const textarea = form.querySelector("#textarea4");
  const checkbox = form.querySelector("#agree");
  const wal = form.querySelector("#wal button span");
  let selectedRating = "";

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let hasError = false;

    // Проверка поля имени
    if (!firstName.value.trim()) {
      firstName.closest(".input-field").classList.add("_check_invalid");
      hasError = true;
    } else {
      firstName.closest(".input-field").classList.remove("_check_invalid");
    }

    // Проверка поля email
    if (!email.value.trim()) {
      email.closest(".input-field").classList.add("_check_invalid");
      hasError = true;
    } else {
      email.closest(".input-field").classList.remove("_check_invalid");
    }

    // Проверка поля телефона
    if (!tel.value.trim()) {
      tel.closest(".input-field").classList.add("_check_invalid");
      hasError = true;
    } else {
      tel.closest(".input-field").classList.remove("_check_invalid");
    }

    // Проверка наличия выбранного рейтинга
    selectedRating = "";
    rating.forEach((radio) => {
      if (radio.checked) {
        selectedRating = radio.value;
      }
    });

    if (!selectedRating) {
      hasError = true;
      alert("Пожалуйста, выберите оценку.");
    }

    // Проверка текстового поля
    if (!textarea.value.trim()) {
      textarea.closest(".textarea-field").classList.add("_check_invalid");
      hasError = true;
    } else {
      textarea.closest(".textarea-field").classList.remove("_check_invalid");
    }

    // Проверка select
    if (wal.innerHTML == "custom") {
      wal.closest(".send__linia").classList.add("_check_invalid");
      hasError = true;
    } else {
      wal.closest(".send__linia").classList.remove("_check_invalid");
    }

    // Проверка чекбокса
    if (!checkbox.checked) {
      checkbox.closest(".fildset-checkbox").classList.add("_check_invalid");
      hasError = true;
    } else {
      checkbox.closest(".fildset-checkbox").classList.remove("_check_invalid");
    }

    // Прокрутка к форме, если есть ошибки
    if (hasError) {
      setTimeout(() => {
        window.scrollTo({
          top: form.offsetTop - 100,
          left: 0,
          behavior: "smooth",
        });
      }, 200);
    } else {
      // Если ошибок нет, создаем параметры запроса
      const params = new URLSearchParams({
        name: firstName.value.trim(),
        email: email.value.trim(),
        tel: tel.value.trim(),
        rating: selectedRating,
        textarea: textarea.value.trim(),
        wal: wal.innerHTML,
      });

      // Обновляем адресную строку без перезагрузки страницы
      history.pushState(null, "", `?${params.toString()}`);
    }
  });
};

// const form = document.querySelector(".send-form");
// form.addEventListener("submit", function (event) {
// event.preventDefault();
// const name = document.querySelector("#firstname").value.trim();
// const email = document.querySelector("#email").value.trim();
// const tel = document.querySelector("#tel").value.trim();
// const rating = document.querySelector(
//   'input[name="ratingForm"]:checked'
// )?.value;
// const textarea = document.querySelector("#textarea4").value.trim();
// const city = document
//   .querySelector(".select-custom .dropdown-button span")
//   .textContent.trim();
// const agry = document.querySelector("#55").checked;
// let valid = true;
// if (name === "") {
//   alert('Поле "Имя" обязательно для заполнения');
//   valid = false;
// }
// if (email === "") {
//   alert('Поле "Email" обязательно для заполнения');
//   valid = false;
// } else if (!validateEmail(email)) {
//   alert("Введите корректный адрес электронной почты");
//   valid = false;
// }
// if (tel === "") {
//   alert('Поле "Телефон" обязательно для заполнения');
//   valid = false;
// }
// if (!rating) {
//   alert("Выберите оценку");
//   valid = false;
// }
// if (!agry) {
//   alert("Вы должны согласиться с правилами публикации отзывов");
//   valid = false;
// }
//   if (valid) {
//     const queryParams = new URLSearchParams({
//       name,
//       email,
//       tel,
//       rating,
//       textarea,
//       city,
//     });
//     // Обновляем адресную строку
//     window.history.replaceState(
//       {},
//       "",
//       `${window.location.pathname}?${queryParams}`
//     );
//   }
// });

// function validateEmail(email) {
//   const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//   return re.test(String(email).toLowerCase());
// }
// };

// export class  {
//   constructor() {
//     this. = ;

//   }
//   // ==================================
//   close() {

//   }
//   // ==================================
//   open() {

//   }

//   // ==================================
//   start() {

//   }

//   static resetAll() {

//   }
// }

// let = document.querySelector(" ");
// let = [...   .querySelectorAll(" ")] ;
// .addEventListener('click',(e) =>{ });
// document.createElement(' ')
// .getAttribute('name');
// .innerHTML =
// if(){}else{};
// for (let i = 0; i < inputs.length; ++i) {inputs[i] }
// const activeHEAD = (e) => {}
// .matches("")
// .classList.add('_is-active')
// .classList.remove('_is-active')
// .classList.contains('_is-active')
// .forEach((cell) => {});
// .style.height = "0px";

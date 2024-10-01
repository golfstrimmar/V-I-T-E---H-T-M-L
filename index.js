import "./assets/css/datepicker.css";
import "@/scss/main.scss";
import { Button } from "@/pug/components/buttons/btn-wave";
import { Lang } from "./assets/js/lang";
import { Search } from "./assets/js/search";
import { Header } from "@/pug/components/header/header";
import { Popup } from "@/pug/components/popup/popup";
import { Tab } from "@/pug/components/tab/tab";
import { Select } from "@/pug/components/select/select";
import { Form } from "@/pug/components/form/form";
import { FormFields } from "@/pug/vue-components/book/book";

document.addEventListener("DOMContentLoaded", function () {
  // =====Header==================
  if (document.querySelector("header")) {
    Header();
  }

  // ========popup===============
  if (document.querySelector(".popups-init-js")) {
    Popup();
  }

  // ======Tab=================
  if (document.querySelector(".tabs-container")) {
    let tabs = document.querySelectorAll(".tabs-container");
    tabs.forEach((car) => {
      car.addEventListener("click", (e) => {
        Tab(e);
      });
    });

    document.addEventListener("click", (e) => {
      if (!e.target.closest(".tabs-container")) {
        Array.from(document.querySelectorAll(".tab")).forEach((item) => {
          item.classList.remove("_is-active");
        });
      }
    });
  }

  // ========lang===============
  if (document.querySelector('input[name="lang"]')) {
    document.querySelectorAll('input[name="lang"]').forEach(function (radio) {
      Lang(radio);
    });
  }
  // ========Search===============
  if (document.querySelector("#search")) {
    Search();
  }
  // ========vue book===============
  if (document.querySelector(".book")) {
    FormFields();
  }

  // =========Select==============
  const selects = [...document.querySelectorAll(".select")];
  if (selects.length > 0) {
    document.addEventListener("click", (e) => {
      if (e.target.closest(".select")) {
        Select(e.target.closest(".select"), e);
      } else {
        Array.from(document.querySelectorAll(".select")).forEach((item) => {
          item.classList.remove("_is-active");
        });
      }
    });
  }
  // ========Form===============

  if (document.querySelector(".send-form")) {
    Form();
  }
  // =========Button==============
  if (document.querySelector(".but-wave")) {
    const wave = [...document.querySelectorAll(".but-wave")];
    wave.forEach((cell) => {
      cell.addEventListener("click", (e) => {
        Button(e);
      });
    });
  }
});
// ===============================
import { createApp } from "vue";
import VueDatePicker from "@vuepic/vue-datepicker";
import CheckIn from "@/pug/vue-components/book/CheckIn.vue";
import CheckOut from "@/pug/vue-components/book/CheckOut.vue";

[...document.querySelectorAll(".check-in-vue")].forEach((cell) => {
  createApp(CheckIn).component("VueDatePicker", VueDatePicker).mount(cell);
});
[...document.querySelectorAll(".check-out-vue")].forEach((cell) => {
  createApp(CheckOut).component("VueDatePicker", VueDatePicker).mount(cell);
});

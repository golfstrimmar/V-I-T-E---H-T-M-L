import React from "react"; // Добавляем React
import ReactDOM from "react-dom/client"; // Добавляем ReactDOM
// import Book from "@/pug/components/react-components/Book/Book.jsx";
// import ClockUhr from "@/pug/components/react-components/ClockUhr/ClockUhr";
// import Test from "./src/pug/components/react-components/Test/Test";

// ----------------
document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector("#react-root")) {
    const root = ReactDOM.createRoot(document.getElementById("react-root"));
    root.render(
      <div className="react-area" style={{ backgroundColor: "lime" }}>
        <h5>index-react.jsx---убрать - добавить</h5>
        {/* <Book /> */}
        {/* <ClockUhr /> */}
        {/* <Test /> */}
      </div>
    );
  }
});

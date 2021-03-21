import handleSubmit from "./js/formHandler";

import "./styles/style.scss";

window.addEventListener("DOMContentLoaded", () => {
  console.log("Abo Shaklak");
  const submitButton = document.getElementById("btn-submit");
  submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    handleSubmit();
  });
});
export { handleSubmit };

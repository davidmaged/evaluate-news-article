import handleSubmit from "./js/formHandler";

import "./styles/style.scss";

window.addEventListener("DOMContentLoaded", () => {
  const submitButton = document.getElementById("btn-submit");
  submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    handleSubmit.handleSubmit();
  });
});
export { handleSubmit };

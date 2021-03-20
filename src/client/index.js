import handleSubmit from "./js/formHandler";

import "./styles/style.scss";

window.addEventListener("DOMContentLoaded", () => {
  // TODO: get the button for submit
  // TODO: add event listener to it when the click to call handleSubmit function
  console.log("Abo Shaklak");
  const submitButton = document.getElementById("btn-submit");
  submitButton.addEventListener("click", () => {
    console.log("Abo Shaklak 2");
    handleSubmit();
  });
});
export { handleSubmit };

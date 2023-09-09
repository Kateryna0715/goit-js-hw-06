const input = document.querySelector("#name-input");
input.addEventListener("input", handleInput);
const span = document.querySelector("#name-output");
function handleInput(event) {
  if (input.value === "") {
    span.textContent = "Anonymous";
  } else {
    span.textContent = event.currentTarget.value.trim();
  }
}

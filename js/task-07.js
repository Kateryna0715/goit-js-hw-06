const input = document.querySelector("#font-size-control");
input.addEventListener("input", handleInput);
const span = document.querySelector("#text");
span.style.fontSize = `${input.value}px`;

function handleInput(event) {
  span.style.fontSize = `${event.currentTarget.value}px`;
}

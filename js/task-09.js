function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const buttonColor = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");

buttonColor.addEventListener("click", handleClick);

function handleClick() {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  spanColor.textContent = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const input = document.querySelector("input");
const divBoxes = document.querySelector("#boxes");

btnCreate.addEventListener("click", () => {
  const amount = input.value;
  createBoxes(amount);
});
btnDestroy.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  let divSize = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${divSize}px`;
    box.style.height = `${divSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    divBoxes.append(box);
    divSize += 10;
  }
}
function destroyBoxes() {
  divBoxes.innerHTML = "";
  input.value = "";
}

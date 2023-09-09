const btnDecr = document.querySelector('[data-action="decrement"]');
const btnIncr = document.querySelector('[data-action="increment"]');
const span = document.querySelector("#value");
let counterValue = 0;
const btnDecrClick = () => {
  counterValue -= 1;
  span.textContent = counterValue;
};
const btnIncrClick = () => {
  counterValue += 1;
  span.textContent = counterValue;
};

btnDecr.addEventListener("click", btnDecrClick);
btnIncr.addEventListener("click", btnIncrClick);

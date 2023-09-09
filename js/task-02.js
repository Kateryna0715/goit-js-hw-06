const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");
function createList(arr) {
  const markup = arr.map((element) => {
    const liElem = document.createElement("li");
    liElem.classList.add("item");
    liElem.textContent = element;
    return liElem;
  });

  list.append(...markup);
}
createList(ingredients);

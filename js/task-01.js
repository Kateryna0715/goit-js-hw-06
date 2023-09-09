const liCategories = document.querySelectorAll(".item");
console.log("Number of categories: ", liCategories.length);

liCategories.forEach((category) => {
  console.log("Category:", category.querySelector("h2").textContent);
  console.log("Elements:", category.lastElementChild.children.length);
});

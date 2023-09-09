const input = document.querySelector("#validation-input");
input.addEventListener("blur", handleInput);

function handleInput() {
  const dataLength = parseInt(input.getAttribute("data-length"));
  console.log(dataLength);
  const inputLength = input.value.length;
  if (inputLength === dataLength) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}

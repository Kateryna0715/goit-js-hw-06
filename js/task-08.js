const registerForm = document.querySelector(".login-form");
registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;
  if (email.value.trim() === "" || password.value.trim() === "") {
    alert("Please fill in all fields!");
    return;
  }
  const formData = {
    email: email.value,
    password: password.value,
  };
  console.log(formData);

  event.currentTarget.reset();
}

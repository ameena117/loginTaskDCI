const loginForm = document.querySelector(".loginForm");
let alert = document.querySelector(".errors");
let email = loginForm.email;
let password = loginForm.password;
let showPassword = loginForm.checkboxShowPass;

const errors = [
  "E-mail is required",
  "Password is required",
  "E-mail and Password are required",
  "Success"
];

loginForm.onsubmit = function check(e) {
  e.preventDefault();
  console.log(email, password);
  console.log(email.value, password.value);
  if (email.value == "" && password.value == "") {
    alert.innerHTML = errors[2];
    alert.style.backgroundColor = "red"
  }
  else if (email.value == "") {
    alert.innerHTML = errors[0];
    alert.style.backgroundColor = "red"
  }
  else if (password.value == "") {
    alert.innerHTML = errors[1];
    alert.style.backgroundColor = "red"
  }
  else {
    alert.innerHTML = errors[3];
    alert.style.backgroundColor = "green"
  }
};

showPassword.onclick = function checked() {
  password.type == "password"
    ? (password.type = "text")
    : (password.type = "password");
};

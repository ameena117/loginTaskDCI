const loginForm = document.querySelector(".loginForm");
let alert = document.querySelector(".arrayOfErrors");
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
    alert.innerHTML = "E-mail and Password are required";
    alert.style.color = "red"
  }
  else if (email.value == "") {
    alert.innerHTML = "E-mail is required";
    alert.style.color = "red"
  }
  else if (password.value == "") {
    alert.innerHTML ="Password is required";
    alert.style.color = "red"
  }
  else {
    alert.innerHTML = "Success";
    alert.style.color = "green"
  }
};

showPassword.onclick = function checked() {
  password.type == "password"
    ? (password.type = "text")
    : (password.type = "password");
};

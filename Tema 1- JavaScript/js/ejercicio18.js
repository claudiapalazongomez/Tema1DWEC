let login = prompt("Dime tu login: ");
let password;
if (login == "Admin") {
  password = prompt("Dime tu contraseña: ");
  if (password == "TheMaster") {
    alert("Bienvenido!");
  } else if (password == "" || password == null) {
    alert("Cancelado");
  } else {
    alert("Contraseña incorrecta");
  }
} else if (login == "" || login == null) {
  alert("Cancelado");
} else {
  alert("No te conozco");
}

let login = prompt("Introduce puesto: ");
let mensaje =
  login == "Empleado"
    ? "Hola"
    : login == "Director"
    ? "Felicidades"
    : login == ""
    ? "No te has registrado"
    : "";
alert(mensaje);

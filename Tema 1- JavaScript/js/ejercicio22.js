let navegador = prompt("Dime tu navegador: ");
/*switch (navegador) {
  case "Edge":
    alert("Tienes Edge!");
    break;
  case "Chrome":
  case "Firefox":
  case "Safari":
  case "Opera":
    alert("Está bien, también soporto estos navegadores");
    break;
  default:
    alert("Espero que esta página se vea bien");
}*/

if (navegador == "Edge") {
  alert("Tienes Edge!");
} else if (
  navegador == "Chrome" ||
  navegador == "Firefox" ||
  navegador == "Safari" ||
  navegador == "Opera"
) {
  alert("Está bien, también soporto estos navegadores");
} else {
  alert("Espero que esta página se vea bien");
}

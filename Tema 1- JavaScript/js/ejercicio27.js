let palabra = prompt("Pon una palabra en minúscula: ");
let palabraModificada = alert(laPrimeraMayuscula(palabra));

function laPrimeraMayuscula(str) {
  // El método str.slice(1) se utiliza para obtener una subcadena de la cadena str que comienza en el índice 1 (el segundo carácter) y continúa hasta el final de la cadena.
  return str.charAt(0).toUpperCase() + str.slice(1);
}

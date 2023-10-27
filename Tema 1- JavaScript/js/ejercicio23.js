let edad = 10;
console.log(comprobarEdad(edad));
function comprobarEdad(edad) {
  if (edad > 18) {
    return true;
  } else {
    return confirm("¿Te dejan tus padres?");
  }
}

/*function comprobarEdad(edad) {
  if (edad > 18) {
    return true;
  }
  return confirm("¿Te dejan tus padres?");
}*/

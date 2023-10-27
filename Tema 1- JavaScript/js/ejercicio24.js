let edad = prompt("Dime tu edad: ");
console.log(comprobarEdad(edad));
/*function comprobarEdad(edad) {
  if (edad > 18) {
    return true;
  } else {
    return confirm(
      "¿Tienes el permiso de tus padres para acceder a esta página?"
    );
  }
}*/

/* OPCIÓN 1
function comprobarEdad(edad) {
  return edad > 18
    ? true
    : confirm("¿Tienes el permiso de tus padres para acceder a esta página?");
} */

/* OPCIÓN 2 */
function comprobarEdad(edad) {
  return (
    edad > 18 ||
    confirm("¿Tienes el permiso de tus padres para acceder a esta página?")
  );
}

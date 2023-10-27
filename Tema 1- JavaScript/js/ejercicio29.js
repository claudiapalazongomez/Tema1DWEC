let str = prompt("Dime una frase: ");
let maxlength = 20;
alert(truncar(str, maxlength));

function truncar(str, maxlength) {
  if (str.length > maxlength) {
    return str.slice(0, maxlength - 1) + "…";
  } else {
    return str;
  }
}

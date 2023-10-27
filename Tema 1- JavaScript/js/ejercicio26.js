let x = Number(prompt("Dime x:"));
let y = Number(prompt("Dime y:"));
let resultado;

if (isNaN(x) || isNaN(y) || x < 1 || y < 0) {
  alert("Por favor, ingresa valores válidos");
} else {
  resultado = potencia(x, y);
  alert(resultado);
}

function potencia(x, y) {
  return x ** y;
}

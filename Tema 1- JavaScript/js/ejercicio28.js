let frase = prompt("Escribe una frase: ");
console.log(checkSpam(frase));

function checkSpam(str) {
  str = str.toLowerCase();
  return str.includes("viagra") || str.includes("xxx");
}

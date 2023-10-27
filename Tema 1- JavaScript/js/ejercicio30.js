let str = prompt("Introduce un precio: ");

function extraerValorMoneda(str) {
  const valorNumerico = parseFloat(str.replace(/\$/g, "").trim());

  alert(isNaN(valorNumerico) ? NaN : valorNumerico);
}

extraerValorMoneda(str);

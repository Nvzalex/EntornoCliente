/**
 * 5. Crea una función extraerValorEuros(str) que extraiga
 * el valor numérico de dicho string y lo devuelva. Suponemos
 * que str es una cadena que contiene el importe en este
 * formato: “120€”, es decir: el número va primero y el
 * signo de euro va al final.
 */
function extraerValorEuros(str) {
  return str.slice(0, -1);
}
console.log(extraerValorEuros("3289€"));

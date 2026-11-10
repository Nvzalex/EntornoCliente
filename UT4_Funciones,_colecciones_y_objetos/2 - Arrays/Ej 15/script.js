/**
 * 15. Crea una función que reciba como parámetro una cadena y devuelva otra
 * cadena formada por las letras de la cadena inicial ordenadas alfabéticamente.
 * Hay que utilizar los métodos Array.from, el método sort de los arrays y el
 * método join de los arrays.
 */
function ordenarLetras(cadena) {
  return Array.from(cadena).sort().join("");
}
console.log(ordenarLetras("hola"));
console.log(ordenarLetras("javascript"));

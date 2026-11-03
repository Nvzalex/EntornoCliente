/**
 * 12. Escribe una función copiaOrdenada(arr) que devuelva
 * una copia del array ordenada con orden alfabético.
 *
 * El array original no se tiene que modificar.
 * Ejemplo:
 * let arr = ["HTML", "CSS", "JavaScript"];
 * let arrOrdenado = copiaOrdenada(arr);
 * console.log(arr); // HTML,CSS,JavaScript
 * console.log(arrOrdenado); // CSS,HTML,JavaScript
 */

function copiaOrdenada(arr) {
  let ordenado = arr;
  return ordenado.sort();
}
let arr = ["HTML", "CSS", "JavaScript"];
let arrOrdenado = copiaOrdenada(arr);

console.log(arr); // HTML,CSS,JavaScript
console.log(arrOrdenado); // CSS,HTML,JavaScript

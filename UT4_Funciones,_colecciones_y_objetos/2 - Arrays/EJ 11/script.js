/**
 * 11. Escribe una función ordenaDecreciente(arr) que recibe un array como
 * parámetro y lo ordena en orden decreciente matemático.
 * Suponemos que todos los elementos del array son números.
 * La función modifica el array. Ejemplo:
 *
 * let arr = [5, 2, 1, -10, 8];
 * ordenaDecreciente(arr);
 * console.log(arr);
 */
function ordenaDecreciente(arr) {
  arr.sort((a, b) => b - a);
}
let arr11 = [5, 2, 1, -10, 8];
ordenaDecreciente(arr11);
console.log(arr11);

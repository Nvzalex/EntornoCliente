/**
 * 16. Filtrar elementos únicos del array
 * Escribe una funcion unicos(arr) que recibe un array y devuelve un array con los elementos únicos de arr.
 * Ejemplo:
 * let values = ["Hare", "Krishna", "Hare", "Krishna",
 *   "Krishna", "Krishna", "Hare", "Hare", ":-O"
 * ];
 * alert( unicos(values) ); // Hare, Krishna, :-O
 */
function unicos(arr) {
  return [...new Set(arr)];
}
let values = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];
console.log(unicos(values));

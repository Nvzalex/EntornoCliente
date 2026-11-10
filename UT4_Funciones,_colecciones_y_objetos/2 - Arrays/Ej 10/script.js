/**
 * 10. Escribe una función filterRange(arr, a, b) que obtenga un array arr,
 * busque los elementos con valor mayor o igual a a y menor o igual a b y
 * devuelva un array con los resultados.
 * La función no debe modificar el array. Debe devolver un nuevo array.
 * Por ejemplo:
 *
 * let arr = [5, 3, 8, 1];
 * let filtrado = filterRange(arr, 1, 4);
 * console.log(filtrado); // 3,1 (valores dentro del rango)
 * console.log(arr); // 5,3,8,1 (array original no modificado)
 */
function filterRange(arr, a, b) {
  return arr.filter((item) => item >= a && item <= b);
}
let arr10 = [5, 3, 8, 1];
console.log(filterRange(arr10, 1, 4));
console.log(arr10);

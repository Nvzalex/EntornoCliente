/**
 * 13. Escribe la función ordenarPorEdad(users) que recibe
 * como parámetro un array de objetos con la propiedad edad y los ordena según edad.
 *
 * Ejemplo:
 * let juan = { nombre: "Juan", edad: 25 };
 * let pedro = { nombre: "Pedro", edad: 30 };
 * let marta = { nombre: "Marta", edad: 28 };
 *
 * let arr = [juan, pedro, marta];
 *
 * ordenarPorEdad(arr);
 * // ahora: [juan, marta, pedro]
 *
 * console.log(arr[0]. nombre); // Juan
 * console.log(arr[1]. nombre); // Marta
 * console.log(arr[2]. nombre); // Pedro
 */

function ordenarPorEdad(arr) {
  arr.sort((item1, item2) => {
    if (item1.edad < item2.edad) {
      return -1;
    } else if (item1.edad > item2.edad) {
      return 1;
    } else {
      return 0;
    }
  });
  return arr;
}
let juan = { nombre: "Juan", edad: 25 };
let pedro = { nombre: "Pedro", edad: 30 };
let marta = { nombre: "Marta", edad: 28 };

let arr = [juan, pedro, marta];

ordenarPorEdad(arr); // ahora: [juan, marta, pedro]

console.log(arr[0].nombre); // Juan
console.log(arr[1].nombre); // Marta
console.log(arr[2].nombre); // Pedro

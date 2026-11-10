/**
 * 8. Tenemos un array con números y cadenas, con algunas cadenas repetidas.
 * • Queremos buscar una cadena concreta y cambiarla por la misma cadena
 * en mayúsculas, pero sólo la primera vez que aparece. Si no encuentra la cadena,
 * no hace nada (tener en cuenta que no dé un error en consola).
 * • Repetir el ejercicio anterior, pero la cadena que queremos cambiar es la última que aparece.
 * • Repetir el ejercicio anterior, pero cambiar todas las veces que aparece la cadena.
 */
let arr8 = ["manzana", "pera", "manzana", "naranja", "manzana", "kiwi"];

// Primera aparición
let index = arr8.indexOf("manzana");
if (index !== -1) arr8[index] = "manzana".toUpperCase();
console.log(arr8);

// Última aparición
arr8 = ["manzana", "pera", "manzana", "naranja", "manzana", "kiwi"];
index = arr8.lastIndexOf("manzana");
if (index !== -1) arr8[index] = "manzana".toUpperCase();
console.log(arr8);

// Todas las apariciones
arr8 = ["manzana", "pera", "manzana", "naranja", "manzana", "kiwi"];
for (let i = 0; i < arr8.length; i++) {
  if (arr8[i] === "manzana") arr8[i] = "manzana".toUpperCase();
}
console.log(arr8);

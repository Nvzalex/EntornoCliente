/**
 * 7. Tenemos el siguiente array [1, "dos", "tres", 4, 5, "seis", "siete"].
 * Escribe las sentencias para:
 * • Eliminar los elementos del array que son de tipo cadena.
 * • Después de cada elemento de tipo cadena, añadir el mismo elemento en mayúsculas.
 * • Eliminar todos los elementos del array que son de tipo cadena, y en esa
 * posición añadir dos elementos: "ELIMINADO" y "INSERTADO"
 */
let arr = [1, "dos", "tres", 4, 5, "seis", "siete"];

// Eliminar cadenas
arr = arr.filter((item) => typeof item !== "string");
console.log(arr);

// Después de cada cadena añadirla en mayúsculas
arr = [1, "dos", "tres", 4, 5, "seis", "siete"];
for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === "string") {
    arr.splice(i + 1, 0, arr[i].toUpperCase());
    i++;
  }
}
console.log(arr);

// Eliminar cadenas y poner "ELIMINADO", "INSERTADO"
arr = [1, "dos", "tres", 4, 5, "seis", "siete"];
for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === "string") {
    arr.splice(i, 1, "ELIMINADO", "INSERTADO");
    i++;
  }
}
console.log(arr);

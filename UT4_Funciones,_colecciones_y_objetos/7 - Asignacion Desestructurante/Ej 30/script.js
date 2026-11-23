/**
 * 30. Crea una función que recibe cualquier número de parámetros numéricos.
 * Esta función debe devolver un objeto con dos propiedades: el valor máximo y
 * el mínimo de los parámetros recibidos. Para ello, utilizará las funciones
 * Math.max() y Math.min().
 */
function maxMin(...numeros) {
  return {
    max: Math.max(...numeros),
    min: Math.min(...numeros),
  };
}

// Ejemplo de uso:
console.log(maxMin(3, 1, 8, 5, 2)); // { max: 8, min: 1 }
console.log(maxMin(10, -5, 0)); // { max: 10, min: -5 }

/**
 * Ejercicio 22 — Fibonacci
 * (Sentencias: bucles)
 * --------------------------------------------------------------------
 *
 * Haz una función fibonacci(n) que devuelva una cadena con los n
 *  primeros números de la serie de Fibonacci separados por espacios
 * en blanco. Si n es un valor incorrecto (sólo se admiten valores
 * enteros no negativos), la función devolverá la cadena vacía.
 *
 * La serie Fibonacci es una secuencia de números naturales que
 * comienza con 0 y 1, donde cada número subsiguiente es la
 * suma de los dos anteriores (0, 1, 1, 2, 3, 5, 8, 13, 21, 34, etc.).
 */

function fibonacci(n) {
  if (typeof n !== "number" || !Number.isInteger(n) || n < 0) {
    return "";
  }

  if (n === 0) {
    return "";
  }

  if (n === 1) {
    return "0";
  }

  let serie = [0, 1];

  for (let i = 2; i < n; i++) {
    serie.push(serie[i - 1] + serie[i - 2]);
  }

  return serie.slice(0, n).join(" ");
}

// Pruebas
console.log(fibonacci(1)); // ""
console.log(fibonacci(3)); // "0 1 1"
console.log(fibonacci(7)); // "0 1 1 2 3 5 8"

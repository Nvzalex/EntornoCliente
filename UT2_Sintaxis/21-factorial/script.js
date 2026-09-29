/**
 * Ejercicio 21 — Factorial
 * (Sentencias: bucles)
 * --------------------------------------------------------------------
 *
 * Crea una función factorial(n) que devuelva el factorial de n.
 * Suponemos que n es un número entero mayor o igual a 0 (no hay que comprobarlo).
 *
 * El factorial de un número entero mayor o igual que 0, n,
 * representado como n! se calcula como:
 *
 * - Si n es mayor o igual que 1: factorial(n) es el producto de todos
 * los números enteros positivos desde 1 hasta n. Por ejemplo, 5!
 * se calcula como 5 × 4 × 3 × 2 × 1 = 120.
 *
 * - El factorial de cero, 0!, es una excepción y se define como 1 por convención.
 */

function factorial(n) {
  if (n === 0) {
    return 1;
  }

  let resultado = 1;

  for (let i = 1; i <= n; i++) {
    resultado *= i;
  }

  return resultado;
}

// Pruebas
console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(5)); // 120
console.log(factorial(7)); // 5040

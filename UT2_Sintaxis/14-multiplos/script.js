/**
 * Ejercicio 15 — Múltiplos
 * (Sentencias: bucles)
 * --------------------------------------------------------------------
 *
 * 14.	MÚLTIPLOS. Crea una función multiplos(). Esta función escribirá
 * en la consola una línea con el texto “LISTADO DE NÚMEROS DEL 1 AL 100”
 * y, a continuación, una fila para cada número del 1 al 100.
 * Junto a cada número, escribirá el mensaje “es múltiplo de 2”
 * y “es múltiplo de 3” SOLO junto a aquellos números en que se cumpla esta
 * condición. En el caso de los números que sean múltiplos de ambos,
 * se mostrarán “es múltiplo de 2 y es múltiplo de 3
 *
 * Ejemplo:
 *   El 1
 *   El 2 es múltiplo de 2
 *   El 3 es múltiplo de 3
 *   El 4 es múltiplo de 2
 *   El 5
 *   El 6 es múltiplo de 2 y es múltiplo de 3
 *   El 7
 *   El 8 es múltiplo de 2
 *   El 9 es múltiplo de 3
 *   El 10 es múltiplo de 2
 */

function multiplos(n) {
  n = 1;

  console.log("LISTADO DE NÚMEROS DEL 1 AL 100");
  while (n <= 100) {
    let mult2 = n % 2;
    let mult3 = n % 3;
    if (mult2 == 0 && mult3 != 0) {
      console.log("El " + n + " es multiplo de 2");
    } else if (mult2 != 0 && mult3 == 0) {
      console.log("El " + n + " es multiplo de 3");
    } else if (mult2 == 0 && mult3 == 0) {
      console.log("El " + n + " es multiplo de 2 y es multiplo de 3");
    } else {
      console.log("El " + n);
    }
    n++;
  }
}

console.log(multiplos());

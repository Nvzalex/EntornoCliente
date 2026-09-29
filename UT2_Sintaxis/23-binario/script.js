/**
 * Ejercicio 23 — Binario
 * (Sentencias: bucles)
 * --------------------------------------------------------------------
 * Haz una función binario(n) que devuelve una cadena con el número en
 * binario. Si n es un valor incorrecto (sólo se admiten valores enteros
 * no negativos), la función devolverá la cadena vacía.
 *
 * Para pasar un número decimal a binario, realiza divisiones
 * sucesivas del número entre 2, anotando el resto (0 o 1) en cada paso.
 * Una vez que el cociente sea 0, escribe los restos obtenidos en
 * orden inverso para obtener el equivalente binario del número decimal.
 *
 * Para n=0, la función devolverá “0”.
 */

function binario(n) {
  // Validación: solo enteros no negativos
  if (typeof n !== "number" || !Number.isInteger(n) || n < 0) {
    return "";
  }

  if (n === 0) {
    return "0";
  }
  let restos = [];

  while (n > 0) {
    restos.push(n % 2);
    n = Math.floor(n / 2);
  }

  return restos.reverse().join("");
}

// Pruebas
console.log(binario(0)); // "0"
console.log(binario(5)); // "101"

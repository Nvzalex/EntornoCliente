/**
 * Ejercicio 18 — Triángulo
 * (Sentencias: bucles)
 * --------------------------------------------------------------------
 *
 * Crea una función triangulo(lineas) que recibe un parámetro lineas.
 * Si lineas es un número entero mayor que 0, la función mostrará por
 * consola varias líneas que formen un triángulo similar al que se ve a
 * continuación (en el ejemplo, lineas es 7):
 *
 *   #
 *   ##
 *   ###
 *   ####
 *   #####
 *   ######
 *   #######
 */

function triangulo(lineas) {
  let linea = 1;
  let contenido = "#";
  do {
    console.log(Array(linea).fill(contenido).join(""));
    linea++;
  } while (linea <= lineas);
}

console.log(triangulo(7));

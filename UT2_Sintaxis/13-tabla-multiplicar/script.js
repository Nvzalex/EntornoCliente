/**
 * Ejercicio 14 — Tabla de multiplicar
 * (Sentencias: bucles)
 * --------------------------------------------------------------------
 *
 * Crea una función tablaMultiplicar(n) que recibe un parámetro, n.
 * La función escribirá en la consola la tabla de multiplicar de n de 1 a 10.
 * Si n no es un número, escribirá un texto indicando el error
 */

function tablaMultiplicar(n) {
  let mult = 1;
  do {
    console.log(n + " * " + mult + " = " + n * mult);
    mult++;
  } while (mult <= 10);
}

console.log(tablaMultiplicar(5));

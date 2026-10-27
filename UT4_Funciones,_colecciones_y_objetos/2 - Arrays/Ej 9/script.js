/**
 * Ejercicio 09 — EDAD1
 * (Sentencias: decisiones)
 * --------------------------------------------------------------------
 *
 * Crea una función edad1(edad) que devuelve true si la edad está entre 14
 * y 90, ambos inclusive.
 */

function edad1(edad) {
  return edad >= 14 && edad <= 90;
}

let edad = 20; // cambia el valor para probar distintos casos

if (edad1(edad)) {
  alert("La edad está entre 14 y 90, inclusive.");
} else {
  alert("La edad NO está entre 14 y 90, inclusive.");
}

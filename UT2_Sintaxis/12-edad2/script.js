/**
 * Ejercicio 13 — EDAD2
 * (Sentencias: decisiones)
 * --------------------------------------------------------------------
 *
 * 12.	EDAD2. Crea una función edad2(edad) que recibe un parámetro, edad. La función devolverá el siguiente texto en función del valor de edad:
 *	Mayor o igual que 0 y menor o igual que 12: “Niño”
 *	Mayor que  12 y menor o igual que 25: “Joven”
 *	Mayor que 25 y menor o igual que 60: “Adulto”
 *	Mayor que 60: “Jubilado”
 *	Si edad es un número negativo devolverá un texto con un mensaje de error
 *	Si edad no es un número, devolverá un mensaje de error
 */

function edad2(edad) {
  if (typeof edad !== "number") {
    return "Error: edad no válida.";
  } else if (edad < 0) {
    return "Error: edad no válida.";
  } else if (edad <= 12) {
    return "Niño";
  } else if (edad <= 25) {
    return "Joven";
  } else if (edad <= 60) {
    return "Adulto";
  } else {
    return "Jubilado";
  }
}

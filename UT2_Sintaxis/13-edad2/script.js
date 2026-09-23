/**
 * Ejercicio 13 — EDAD2
 * (Sentencias: decisiones)
 * --------------------------------------------------------------------
 *
 * Crea un script que pida al usuario que introduzca una edad y muestre el
 * siguiente mensaje en función del número introducido:
 *
 *   - 0-12: Niño
 *   - 13-25: Joven
 *   - 26-60: Adulto
 *   - >60: Jubilado
 *
 * Dará un mensaje de error si:
 *
 *   - no se introduce ninguna edad y se pulsa Aceptar
 *   - se introduce un texto y se pulsa Aceptar
 *   - se pulsa Cancelar
 *   - la edad es menor que 0
 */

let edad = prompt("Introduce tu edad:");
if (edad === null || edad === "" || isNaN(edad) || edad < 0) {
  alert("Error: edad no válida.");
} else if (edad <= 12) {
  alert("Niño");
} else if (edad <= 25) {
  alert("Joven");
} else if (edad <= 60) {
  alert("Adulto");
} else {
  alert("Jubilado");
}

/**
 * Ejercicio 08 — Resultados con operadores lógicos
 * (Operadores lógicos)
 * --------------------------------------------------------------------
 *
 * ¿Cuáles son los resultados de estas expresiones? Piénsalo y anota tus
 * respuestas antes de ejecutar el script.
 *
 * Más información: Operadores lógicos — primeras cinco tareas
 * (https://es.javascript.info/logical-operators#tasks).
 */

alert(null || 2 || undefined); // 2
alert(alert(1) || 2 || alert(3)); // 1, 2
alert(1 && null && 2); // null
alert(alert(1) && alert(2)); // 1, undefined
alert(null || (2 && 3) || 4); // 3

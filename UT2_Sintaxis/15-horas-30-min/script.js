/**
 * Ejercicio 16 — Horas cada 30 minutos
 * (Sentencias: bucles)
 * --------------------------------------------------------------------
 *
 * Crea una función horas30Minutos(). Esta función escribirá por consola
 * un listado de horas que vayan desde las 9
 * hasta las 21:30 de 30 minutos en 30 minutos. Ej.: 9:00, 9:30, ….
 */

function horas30Minutos() {
  let hora = 9;
  do {
    console.log(hora + ":00");
    console.log(hora + ":30");
    hora++;
  } while (hora <= 21);
}

console.log(horas30Minutos());

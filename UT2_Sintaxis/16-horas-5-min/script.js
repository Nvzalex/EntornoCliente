/**
 * Ejercicio 17 — Horas cada 5 minutos
 * (Sentencias: bucles)
 * --------------------------------------------------------------------
 *
 * Crea una función horas5Minutos(). Esta función hace lo mismo que el
 * ejercicio anterior, pero en este caso el intervalo será de 5 minutos.
 * Los minutos se deben escribir siempre con 2 cifras. Ej.: 9:00, 9:05, 9:10, …
 */

function horas5Minutos() {
  let hora = 9;
  let mins = [
    "00",
    "05",
    "10",
    "15",
    "20",
    "25",
    "30",
    "35",
    "40",
    "45",
    "50",
    "55",
  ];
  do {
    for (let i = 0; i < mins.length; i++) {
      console.log(hora + ":" + mins[i]);
    }
    hora++;
  } while (hora <= 21);
}

console.log(horas5Minutos());

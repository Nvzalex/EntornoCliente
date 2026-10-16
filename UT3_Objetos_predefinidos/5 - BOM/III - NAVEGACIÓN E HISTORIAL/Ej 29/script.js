/**
 * 20. Crea una función getSecondsToTomorrow() que
 * devuelva la cantidad de segundos que faltan para el día de mañana.
 *
 * Por ejemplo, si ahora son las 23:00, entonces:
 * getSecondsToTomorrow() == 3600
 */
function getSecondsToTomorrow() {
  const ahora = new Date();
  const segundosHoy =
    ahora.getHours() * 3600 + ahora.getMinutes() * 60 + ahora.getSeconds();

  // Un día tiene 86400 segundos
  return 86400 - segundosHoy;
}

console.log(getSecondsToTomorrow());

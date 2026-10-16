/**
 * 19. Escribe una función getSecondsToday() que devuelva
 * la cantidad de segundos transcurridos desde el comienzo del día.
 *
 * Por ejemplo, si en este momento fueran las 10:00 am,
 * sin horario de verano, entonces:
 * getSecondsToday() == 36000 /
 */
function getSecondsToday() {
  const hoy = new Date();

  return hoy.getHours() * 3600 + hoy.getMinutes() * 60 + hoy.getSeconds();
}

console.log(getSecondsToday());

/**
 * 21. Crea una función cuantoFalta(fecha) que devuelva
 * el número de días (número entero) que faltan desde hoy
 * hasta la fecha que se pasa como parámetro.
 */
function cuantoFalta(fecha) {
  const hoy = new Date();
  const fechafin = new Date(fecha);

  return Math.ceil((fechafin - hoy) / (1000 * 3600 * 24));
}

console.log(cuantoFalta("2028-03-12"));

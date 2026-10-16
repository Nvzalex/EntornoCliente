/**
 * 15. Crea una función diaSemana(fecha) que devuelva 
 * una cadena con el día de la semana de la fecha (“lunes”, “martes”, etc.).
 */
function diaSemana(fecha){
  fecha = new Date();
  const dias = ['lunes','martes','miercoles','jueves','viernes','sabado','domingo']
  return console.log(dias[fecha.getDay() - 1])
}

console.log(diaSemana("10/05/2023"));
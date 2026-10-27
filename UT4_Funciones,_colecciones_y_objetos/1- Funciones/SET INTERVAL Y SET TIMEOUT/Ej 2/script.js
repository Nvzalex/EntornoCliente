/**
 * 2. Crea una función calcularHora()que devuelva la hora
 * como una cadena en formato hora:,minutos:segundos cada segundo.
 * Incluye esa función en hora.js.
 */
function calcularHora() {
  const ahora = new Date();

  const hora = ahora.getHours();
  const minutos = ahora.getMinutes();
  const segundos = ahora.getSeconds();

  let fecha = hora + ":" + minutos + ":" + segundos;
  return fecha;
}

console.log(calcularHora());

setInterval(() => {
  console.log(calcularHora());
}, 1000);

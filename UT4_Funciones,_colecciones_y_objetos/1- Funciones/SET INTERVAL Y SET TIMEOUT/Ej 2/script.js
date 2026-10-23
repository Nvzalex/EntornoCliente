/**
 * 2. Crea una función calcularHora()que devuelva la hora
 * como una cadena en formato hora:,minutos:segundos cada segundo.
 * Incluye esa función en hora.js.
 */
function calcularHora() {
  const ahora = new Date();

  const hora = String(ahora.getHours()).padStart(2, "0");
  const minuto = String(ahora.getMinutes()).padStart(2, "0");
  const segundo = String(ahora.getSeconds()).padStart(2, "0");

  let fecha = hora + ":" + minuto + ":" + segundo;
  return fecha;
}

console.log(calcularHora());

setInterval(() => {
  console.log(calcularHora());
}, 1000);

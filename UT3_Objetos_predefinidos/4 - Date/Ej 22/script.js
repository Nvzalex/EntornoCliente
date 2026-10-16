/**
 * 22. Crea una función faltaCumple(dia,mes) que recibe
 * el día y mes de tu cumpleaños y muestra por pantalla
 * el tiempo que falta para tu cumpleaños, expresado
 * con días y horas.Además, que muestre todos los años en
 * que tu cumpleaños va a caer en domingo, desde el próximo
 * cumpleaños hasta el 2100.
 */
function faltaCumple(dia, mes) {
  let hoy = new Date();
  let anio = hoy.getFullYear();
  let cumple = new Date(anio, mes - 1, dia);

  if (cumple < hoy) cumple.setFullYear(anio + 1);

  let horas = (cumple - hoy) / 3600000;
  let resultado = `Faltan ${Math.floor(horas / 24)} días y ${Math.floor(horas % 24)} horas.\n`;

  for (let a = cumple.getFullYear(); a <= 2100; a++) {
    if (new Date(a, mes - 1, dia).getDay() === 0)
      resultado += `${a} cae en domingo\n`;
  }

  return resultado;
}

console.log(faltaCumple(23, 5));

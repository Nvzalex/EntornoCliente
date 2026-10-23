/**
 * 38. Crea una función almacenarFecha(fecha) que almacena en localStorage,
 * de forma separada, el día, el mes (de 1 a 12) y el año de la fecha,
 * que es un objeto Date. Utiliza las claves "dia", "mes" y "anno".
 * Comprueba en la pestaña Application que se han guardado las tres claves.
 */
function almacenarFecha(fecha) {
  const dia = fecha.getDate();
  const mes = fecha.getMonth() + 1;
  const anno = fecha.getFullYear();

  localStorage.setItem("dia", dia);
  localStorage.setItem("mes", mes);
  localStorage.setItem("anno", anno);

  return { dia, mes, anno };
}

console.log(almacenarFecha(new Date()));

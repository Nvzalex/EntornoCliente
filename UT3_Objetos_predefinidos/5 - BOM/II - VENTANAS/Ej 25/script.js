/**
 * 25. Crea una función abrirVentana(url, ancho, alto) que abra
 * url en una ventana emergente con el tamaño indicado, centrada
 * en la pantalla (utiliza screen.width y screen.height),
 * y devuelva la referencia a la ventana. Si el navegador bloquea
 * la ventana, debe mostrar un mensaje por consola y devolver null.
 *
 * Prueba la función desde un botón. Después, comprueba qué ocurre
 * si la llamas directamente al cargar la página, sin que el usuario haga clic.
 *
 * Añade un botón «Cerrar» que cierre la ventana abierta.
 * Antes de cerrarla, comprueba que existe y que no está cerrada ya (closed).
 */
function abrirVentana(url, ancho, alto) {
  const dia = fecha.getDay();
  return dia === 0 ? 7 : dia;
}

console.log(abrirVentana(x, y, z));

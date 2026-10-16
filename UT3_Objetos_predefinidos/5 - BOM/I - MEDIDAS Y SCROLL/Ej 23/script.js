/**
 * 23. Crea una función infoVentana() que muestre por consola
 * el ancho y alto del área de contenido (innerWidth e innerHeight),
 * el ancho y alto de la ventana completa (outerWidth y outerHeight),
 * la posición de la ventana en la pantalla (screenX y screenY)
 * y el desplazamiento horizontal y vertical de la página (scrollX y scrollY).
 *
 * Ejemplo de salida:
 * Contenido: 1280 x 650
 * Ventana: 1296 x 759
 * Posición: 0, 0
 * Scroll: 0, 0
 *
 * Redimensiona la ventana, haz scroll y vuelve a llamar a la
 * función desde la consola. Escribe como comentario qué diferencia
 * hay entre los valores de innerWidth y de outerWidth.
 */
function infoVentana() {
  console.log(`Contenido: ${window.innerWidth} x ${window.innerHeight}`);
  console.log(`Ventana: ${window.outerWidth} x ${window.outerHeight}`);
  console.log(`Posición: ${window.screenX}, ${window.screenY}`);
  console.log(`Scroll: ${window.scrollX}, ${window.scrollY}`);
}

infoVentana();

/**
 * 35. Crea una función infoNavegador() que muestre por consola el idioma del navegador,
 * si hay conexión a internet («Conectado» o «Sin conexión»), la resolución de la pantalla
 * y el tamaño disponible de la pantalla (sin la barra de tareas). Ejemplo de salida:
 * Idioma: es-ES
 * Conexión: Conectado
 * Pantalla: 1920 x 1080
 * Disponible: 1920 x 1040
 *
 * Para probar «Sin conexión», en las herramientas de desarrollo (pestaña Network) puedes simular el modo «Offline».
 */
function infoNavegador() {
  return `Idioma: ${navigator.language}
Conexión: ${navigator.onLine ? "Conectado" : "Sin conexión"}
Pantalla: ${screen.width} x ${screen.height}
Disponible: ${screen.availWidth} x ${screen.availHeight}`;
}

console.log(infoNavegador());

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

let ventana = null;

function abrirVentana(url, ancho, alto) {
  const izquierda = (screen.width - ancho) / 2;
  const arriba = (screen.height - alto) / 2;

  const features = `width=${ancho},height=${alto},left=${izquierda},top=${arriba},resizable=yes,scrollbars=yes`;

  const nuevaVentana = window.open(url, "_blank", features);

  if (
    !nuevaVentana ||
    nuevaVentana.closed ||
    typeof nuevaVentana.closed === "undefined"
  ) {
    console.log("El navegador ha bloqueado la ventana emergente.");
    return null;
  }

  return nuevaVentana;
}

function cerrarVentana() {
  if (ventana && !ventana.closed) {
    ventana.close();
    console.log("Ventana cerrada correctamente.");
    ventana = null;
  } else {
    console.log("No hay ninguna ventana abierta o ya está cerrada.");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const btnAbrir = document.getElementById("btn-abrir");
  const btnCerrar = document.getElementById("btn-cerrar");

  if (btnAbrir) {
    btnAbrir.addEventListener("click", () => {
      ventana = abrirVentana("about:blank", 800, 600);
    });
  }

  if (btnCerrar) {
    btnCerrar.addEventListener("click", () => {
      cerrarVentana();
    });
  }
});

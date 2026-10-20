/**
 * 24. Crea una página HTML con mucho contenido
 * (por ejemplo, 30 párrafos) y, al principio, tres botones.
 * Escribe una función para cada botón:
 *
 * •	Subir: desplaza la página suavemente hasta el principio.
 * •	Bajar 300 px: desplaza la página 300 píxeles hacia abajo desde la posición actual.
 * •	Posición: muestra por consola cuántos píxeles se ha desplazado la página.
 */
function subir() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function bajar() {
  window.scrollBy({
    top: 300,
    behavior: "smooth",
  });
}

function posicion() {
  const pixels = window.scrollY || document.documentElement.scrollTop;
  console.log(`La página se ha desplazado ${pixels} píxeles.`);
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btn-subir").addEventListener("click", subir);
  document.getElementById("btn-bajar").addEventListener("click", bajar300);
  document.getElementById("btn-posicion").addEventListener("click", posicion);
});

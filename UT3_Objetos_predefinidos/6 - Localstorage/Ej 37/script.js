/**
 * 37. Crea una función contarVisitas() que cuente las veces que se
 * ha cargado la página y devuelva ese número. Utiliza localStorage
 * y recuerda que los valores se guardan como cadenas. Llámala al
 * cargar la página y muestra por consola «Esta es tu visita número N».
 *
 * Crea una función contarVisitasSesion() equivalente que utilice sessionStorage.
 * Comprueba qué ocurre con cada contador al recargar la página, al abrirla
 * en otra pestaña y al cerrar y volver a abrir el navegador. Observa los
 *  valores en la pestaña Application.
 */
function contarVisitas() {
  let visitas = Number(localStorage.getItem("visitas")) || 0;
  visitas++;
  localStorage.setItem("visitas", visitas);
  return visitas;
}

function contarVisitasSesion() {
  let visitas = Number(sessionStorage.getItem("visitasSesion")) || 0;
  visitas++;
  sessionStorage.setItem("visitasSesion", visitas);
  return visitas;
}

console.log(`Esta es tu visita número ${contarVisitas()}`);
console.log(`Esta es tu visita de sesión número ${contarVisitasSesion()}`);

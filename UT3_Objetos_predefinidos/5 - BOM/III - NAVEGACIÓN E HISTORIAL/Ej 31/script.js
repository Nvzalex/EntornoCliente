/**
 * 31. Crea una función obtenerParametro(nombre) que devuelva
 * el valor del parámetro nombre de la dirección de la página
 * actual (utiliza location.search), o null si no existe.
 *
 * Ejemplo: si la página se abre como pagina.html?id=5&nombre=Ana:
 * obtenerParametro("nombre")   // "Ana"
 * obtenerParametro("id")       // "5"
 * obtenerParametro("edad")     // null
 *
 * Importante: debes utilizar métodos de tipo String (no URLSearchParams).
 * Si la página no tiene parámetros, devolverá null. Suponemos que
 * no hay caracteres especiales.
 */
function obtenerParametro(nombre) {
  if (location.search === "") {
    return null;
  }

  const pares = location.search.slice(1).split("&");

  for (let par of pares) {
    const igual = par.indexOf("=");
    if (igual === -1) continue;
    const clave = par.slice(0, igual);
    const valor = par.slice(igual + 1);

    // prettier-ignore
    if (clave === nombre) {return valor;}
  }

  return null;
}
console.log(obtenerParametro("nombre")); // "Ana"
console.log(obtenerParametro("id")); // "5"
console.log(obtenerParametro("edad")); // nul

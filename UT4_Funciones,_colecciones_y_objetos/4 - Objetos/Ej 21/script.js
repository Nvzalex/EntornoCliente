/**
 * 21. Crea una función multiplyNumeric(obj).
 * Multiplicará por dos todas las propiedades numéricas de obj.
 * multiplyNumeric(obj) no devuelve nada, modifica el valor de las propiedades de obj.
 *
 * Idea: puedes utilizar typeof para verificar si el valor de una propiedad es de tipo number.
 *
 * Ej. de funcionamiento:
 * // Antes de la llamada
 * let menu = {
 *   width: 200,
 *   height: 300,
 *   title: "Mi menú"
 * };
 *
 * multiplyNumeric(menu);
 *
 * // Después de la llamada
 * menu = {
 *   width: 400,
 *   height: 600,
 *   title: "Mi menú"
 * };
 */
let menu = { width: 200, height: 300, title: "Mi menú" };
console.log(menu);

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 2;
    }
  }
}

multiplyNumeric(menu);

console.log(menu);

/**
 * 2. Escribe una función comprobarSpam(str) que devuelva
 * true si str contiene ‘gratis’ o ‘XXX’, de lo contrario false.
 */
function comprobarSpam(str) {
  return str.includes("gratis") || str.includes("XXX");
}
console.log(comprobarSpam("Gana dinero gratis")); // true
console.log(comprobarSpam("Hola, ¿qué tal?")); // false

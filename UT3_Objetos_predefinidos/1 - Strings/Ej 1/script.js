/**
 * 1.Escribe una función inicialMay(str) que devuelva
 * el string str con el primer carácter en mayúscula.
 */
function inicialMay(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(inicialMay("hola mundo")); // "Hola mundo"

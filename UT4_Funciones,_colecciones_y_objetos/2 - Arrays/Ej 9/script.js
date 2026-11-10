/**
 * 9. Escribe la función camelize(str) que convierta palabras separadas por guión
 * como "mi-cadena-corta" en palabras con mayúscula "miCadenaCorta".
 * Es decir, eliminar todos los guiones y que cada palabra después de un guión
 * comience con mayúscula. Ejemplo:
 *
 * camelize("background-color") == "backgroundColor";
 * camelize("list-style-image") == "listStyleImage";
 * camelize("-webkit-transition") == "WebkitTransition";
 */
function camelize(str) {
  return str
    .split("-")
    .map((palabra, index) => (index === 0 ? palabra : palabra.charAt(0).toUpperCase() + palabra.slice(1)))
    .join("");
}
console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));

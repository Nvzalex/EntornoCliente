/**
 * 9. Crea una función palindromo(cadena) que devuelva
 * true si la cadena de texto es un palíndromo, es decir,
 *  si se lee de la misma forma desde la izquierda y
 * desde la derecha. Ejemplos de palíndromos:
 * “Yo hago yoga hoy”, “Ana lava lana”, “reconocer”.
 * Tener en cuenta: varios espacios en blanco se consideran
 * como uno sólo; las mayúsculas y minúsculas se consideran iguales.
 */

function palindromo(cadena) {
  let limpia = cadena.toLowerCase().replace(/ /g, "");
  
  let invertida = limpia.split("").reverse().join("");

  return limpia === invertida;
}

console.log(palindromo("Yo hago yoga hoy"));
console.log(palindromo("esternocleidomastoideo"));

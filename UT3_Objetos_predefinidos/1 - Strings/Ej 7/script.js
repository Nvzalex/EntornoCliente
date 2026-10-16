/**
 * 7. Crea una función detectaErrorCritico( cadena ) que
 * recibe una cadena y devuelve true si la cadena empieza
 * por la palabra "ERROR" o termina en la palabra "CRITICO".
 * El código debe ser insensible a mayúsculas y minúsculas.
 * En cualquier otro caso devolverá false.
 */
function detectaErrorCritico(cadena) {
  if (
    cadena.toUpperCase().startsWith("ERROR") ||
    cadena.toUpperCase().endsWith("CRITICO")
  ) {
    return true;
  } else {
    return false;
  }
}

console.log(detectaErrorCritico("eRRoR hola"));
console.log(detectaErrorCritico("hola criTico"));

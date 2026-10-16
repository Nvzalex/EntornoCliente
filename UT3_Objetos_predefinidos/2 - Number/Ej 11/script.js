/**
 * 11. Crea una función numeros(n) que recibe un número, n, y muestre por consola:
 * •	El número con 4 decimales.
 * •	El número en binario.
 * •	El número en octal.
 * •	El número en hexadecimal.
 * 
 * Ejemplo: si metes 50, deberías obtener: 50.0000 / 00110010 / 62 / 32.
 */
function numeros(n) {
  let numero = ("Numero: " + n.toFixed(4));
  let binario = ("Binario: " + n.toString(2));
  let octal = ("Octal: " + n.toString(8));
  let hexa = ("Hexadecimal: " + n.toString(16));

  return console.log(numero, binario, octal, hexa);
}

console.log(numeros(15));
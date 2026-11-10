/**
 * 22. Crea un objeto literal cuenta con las siguientes propiedades:
 * • titular: su valor es “Alex”.
 * • saldo: su valor inicial es 0.
 * También deberá tener estos métodos:
 * • ingresar(cantidad): permite añadir dinero a la cuenta, pasando la cantidad como parámetro.
 * • extraer(cantidad): permite retirar dinero de la cuenta, pasando la cantidad como parámetro.
 * • informar(): devuelve la información del estado de la cuenta: un texto con el titular y el saldo.
 */
let generos = ["Jazz", "Blues"];
console.log(generos);

generos.push("Rock-n-Roll");
console.log(generos);

let medio = Math.floor(generos.length / 2);
generos[medio] = "Classics";
console.log(generos);

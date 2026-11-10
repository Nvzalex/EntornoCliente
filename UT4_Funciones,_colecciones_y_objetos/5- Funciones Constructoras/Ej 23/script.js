/**
 * 23.	Crea una función constructora Calculator.
 * Los objetos de tipo Calculator tienen tres métodos:
 * • read() pide dos valores y los almacena como propiedades de objeto, con nombres a y b.
 * • sum() devuelve la suma de los valores almacenados.
 * • mul() multiplica los valores almacenados y devuelve el resultado.
 *
 * Ejemplo:
 * let calculator = new Calculator();
 * calculator.read();
 *
 * alert( "Sum=" + calculator.sum() );
 * alert( "Mul=" + calculator.mul() );
 */
let generos = ["Jazz", "Blues"];
console.log(generos);

generos.push("Rock-n-Roll");
console.log(generos);

let medio = Math.floor(generos.length / 2);
generos[medio] = "Classics";
console.log(generos);

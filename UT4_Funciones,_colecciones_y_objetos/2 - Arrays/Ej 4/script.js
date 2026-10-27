/**
 * 4. En el siguiente código, ¿qué mostrarán los console.log y por qué?
 * let frutas = ["Manzana", "Pera", "Naranja"];
 * let frutas2 = ["Manzana", "Pera", "Naranja"];
 * console.log(frutas == frutas2); //
 * let compra = frutas;
 * compra.push("Plátano");
 * console.log(frutas == compra); //
 * console.log(frutas.length); //
 */
let frutas = ["Manzana", "Pera", "Naranja"];
let frutas2 = ["Manzana", "Pera", "Naranja"];
console.log(frutas == frutas2); //false, tienen el mismo contenidoo pero son didstentos arrays
let compra = frutas;
compra.push("Plátano");
console.log(frutas == compra); //true, ambas variables hacen referencia al mismo objeto
console.log(frutas.length); //4, como frutas y compra hacen referencia al mismo array,
//frutas también contiene ahora cuatro elementos.

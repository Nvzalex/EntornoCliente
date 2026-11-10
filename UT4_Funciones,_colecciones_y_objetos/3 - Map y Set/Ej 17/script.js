/**
 * 17. Escribir un script que simule el lanzamiento de dos dados.
 * Hacer uso de la función Math.random() para obtener números aleatorios
 * entre 1 y 6 para cada uno de los lanzamientos de los dados.
 * Repetir 36.000 veces el lanzamiento de los dos dados; sumar el resultado
 * de cada dado y anotarlo en un map.
 * Al final del programa se deben mostrar el número de veces que ha
 * aparecido cada suma (ej. 2: ha salido 1.000 veces; 3: ha salido 950 veces; ...)
 */
let generos = ["Jazz", "Blues"];
console.log(generos);

generos.push("Rock-n-Roll");
console.log(generos);

let medio = Math.floor(generos.length / 2);
generos[medio] = "Classics";
console.log(generos);

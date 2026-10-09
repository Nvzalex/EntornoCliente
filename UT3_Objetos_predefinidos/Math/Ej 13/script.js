/**
 * 13. Crea una función bonoloto() que imprima por consola 
 * los números ganadores de la bonoloto: son 6 números entre
 *  1 y 49 (combinación ganadora), un complementario, 
 * también entre 1 y 49, y el reintegro entre el 0 y el 9. 
 * Los números de la combinación ganadora y el complementario 
 * tienen que ser distintos.
 * 
 * Se mostrarán al usuario en el 
 * siguiente orden: combinación ganadora, complementario, reintegro.
 * 
 * Para comprobar que no se repiten hay que utilizar strings o arrays.
 */
function bonoloto() {
  const numeros = [];

  while (numeros.length < 7) {
    const num = Math.floor(Math.random() * 49) + 1;
    if (!numeros.includes(num)) {
      numeros.push(num);
    }
  }

  const combinacion = numeros.slice(0, 6).sort((a, b) => a - b);
  const complementario = numeros[6];
  const reintegro = Math.floor(Math.random() * 10);

  console.log("Combinación ganadora:", combinacion.join(" - "));
  console.log("Complementario:", complementario);
  console.log("Reintegro:", reintegro);

  return {
    combinacion,
    complementario,
    reintegro
  };
}

console.log(bonoloto());
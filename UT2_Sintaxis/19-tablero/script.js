/**
 * Ejercicio 19 — Tablero
 * (Sentencias: bucles)
 * --------------------------------------------------------------------
 *
 * Crea una función tablero(numColumnas, numFilas) que recibe como
 * parámetros numColumnas, numFilas. La función mostrará por consola un
 * “tablero de ajedrez” con ese número de filas y columnas, similar
 * a este (en el ejemplo, hay 7 columnas y 4 filas):
 *
 *
 */

function tablero(numColumnas, numFilas) {
  for (let fila = 0; fila < numFilas; fila++) {
    let linea = "";
    for (let col = 0; col < numColumnas; col++) {
      // Alterna "#" y " " según la posición (fila + columna)
      if ((fila + col) % 2 === 0) {
        linea += "#";
      } else {
        linea += " ";
      }
    }
    console.log(linea);
  }
}

tablero(2, 7);

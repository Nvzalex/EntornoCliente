/**
 * 17. Escribir un script que simule el lanzamiento de dos dados.
 * Hacer uso de la función Math.random() para obtener números aleatorios
 * entre 1 y 6 para cada uno de los lanzamientos de los dados.
 * Repetir 36.000 veces el lanzamiento de los dos dados; sumar el resultado
 * de cada dado y anotarlo en un map.
 * Al final del programa se deben mostrar el número de veces que ha
 * aparecido cada suma (ej. 2: ha salido 1.000 veces; 3: ha salido 950 veces; ...)
 */
function simularDados() {
  const resultados = new Map();
  for (let i = 2; i <= 12; i++) resultados.set(i, 0);

  for (let i = 0; i < 36000; i++) {
    const dado1 = Math.floor(Math.random() * 6) + 1;
    const dado2 = Math.floor(Math.random() * 6) + 1;
    const suma = dado1 + dado2;
    resultados.set(suma, resultados.get(suma) + 1);
  }

  for (let [suma, veces] of resultados) {
    console.log(`${suma}: ha salido ${veces} veces`);
  }
}
simularDados();

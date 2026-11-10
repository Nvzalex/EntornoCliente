/**
 * 6. Escribe una función almacenarEntrada() que:
 * • Pida al usuario valores usando prompt y los almacene en un array.
 * • Termine de pedirlos cuando el usuario ingrese un valor no numérico,
 * una cadena vacía, o presione “Escape”. Un cero 0 es un número válido,
 * por favor no detengas los ingresos con el cero.
 * • Devuelve el array generado.
 */
function almacenarEntrada() {
  const numeros = [];
  while (true) {
    let valor = prompt("Introduce un número (o vacío/Escape para terminar):");
    if (valor === null || valor.trim() === "") break;
    let numero = Number(valor);
    if (isNaN(numero)) break;
    numeros.push(numero);
  }
  return numeros;
}
console.log(almacenarEntrada());

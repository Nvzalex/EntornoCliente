/**
 * 41. Crea una función listarAlmacen(almacen) que reciba localStorage
 * o sessionStorage y muestre por consola el número de elementos
 * y todas las claves con sus valores. Utiliza length y key(n). Ejemplo de salida:
 *
 * Elementos: 3
 * bgcolor = red
 * font = Helvetica
 * image = myCat.png
 *
 * Pruébala con ambos objetos.
 */
function listarAlmacen(almacen) {
  let resultado = "Elementos: ${almacen.length}\n";

  for (let i = 0; i < almacen.length; i++) {
    const clave = almacen.key(i);
    resultado += "${clave} = ${almacen.getItem(clave)}\n";
  }

  return resultado;
}

console.log(listarAlmacen(localStorage));
console.log(listarAlmacen(sessionStorage));

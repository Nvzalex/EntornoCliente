/**
 * Ejercicio 17 — Pedir número mayor que 100
 * (Sentencias: bucles)
 * --------------------------------------------------------------------
 *
 * Crea una función pedirNumeroMayor100().
 * Esta función  solicita un número mayor que 100.
 * Si el usuario ingresa otro número – pídele que ingrese un valor de nuevo.
 *
 * El bucle debe pedir un número hasta que el usuario ingrese un
 * número mayor que 100 o bien cancele la entrada/ingrese una línea vacía.
 * La función devolverá el número introducido por el usuario o null si
 * ha cancelado la entrada/introducido una línea vacía.
 *
 * Aquí podemos asumir que el usuario sólo ingresará números. No hay
 * necesidad de implementar un manejo especial para entradas no
 * numéricas en esta tarea.Esta función hay que probarla en el navegador,
 * ya que utilizaremos la sentencia prompt().
 */

function pedirNumeroMayor100() {
  let n;
  do {
    const entrada = prompt("Introduce un número mayor que 100:");

    if (entrada === null) {
      console.log("null");
      break;
    }

    n = Number(entrada);
  } while (n <= 100);

  console.log(n);
}

console.log(pedirNumeroMayor100());

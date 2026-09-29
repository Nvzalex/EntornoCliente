/**
 * Ejercicio 21 — Primo
 * (Sentencias: bucles)
 * --------------------------------------------------------------------
 *
 * Crea una función primos(n) que muestra todos los números primos
 * entre 1 y n. Suponemos que n es un número entero mayor que 1 (no hay que comprobarlo).
 *
 * Un número entero mayor que 1 es llamado primo si sólo puede dividirse
 * sin resto entre 1 y él mismo.Por ejemplo, 5 es un primo, porque sólo se
 * puede dividir entre 5 y 1 (no se puede dividir exactamente entre 2, 3 y 4).
 *
 * Ej. Para n = 10 el resultado será 2, 3, 5, 7.
 */

function primos(n) {
  const resultado = [];

  for (let num = 2; num <= n; num++) {
    let esPrimo = true;

    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) {
        esPrimo = false;
        break;
      }
    }

    if (esPrimo) {
      resultado.push(num);
    }
  }
  console.log(resultado.join(", "));
  return resultado.join(", ");
}

primos(6);
primos(123);

/* ============================================================================
   ITERABLES Y ARRAY-LIKE - Ejercicios resueltos
   - Iterable: se recorre con for..of (arrays, cadenas...).
   - Array-like: tiene length y se accede con [i], pero no tiene los métodos
     de los arrays (no es un array).
   - Array.from(): convierte iterables y array-like en arrays de verdad.
   Resultados en la consola del navegador (F12).
   ========================================================================== */

/* ---------------------------------------------------------------------------
   1. RECORRER UNA CADENA
   Recorre "Hola" de tres formas distintas, mostrando cada letra:
   a) for clásico con índice; b) for..of; c) Array.from + forEach.
--------------------------------------------------------------------------- */
{
  const texto = "Hola";
  for (let i = 0; i < texto.length; i++) console.log("I1a:", texto[i]);
  for (const letra of texto) console.log("I1b:", letra);
  Array.from(texto).forEach((letra) => console.log("I1c:", letra));
}

/* ---------------------------------------------------------------------------
   2. CONTAR VOCALES
   contarVocales(texto) devuelve el número de vocales (a, e, i, o, u), sin
   distinguir mayúsculas. Usa for..of.
--------------------------------------------------------------------------- */
{
  function contarVocales(texto) {
    let cuenta = 0;
    for (const letra of texto.toLowerCase()) {
      if ("aeiou".includes(letra)) cuenta++;
    }
    return cuenta;
  }
  console.log("I2:", contarVocales("Hola Caracola")); // 6
}

/* ---------------------------------------------------------------------------
   3. INVERTIR UNA CADENA
   invertir(cadena) usando Array.from, reverse y join.
   (Las cadenas no tienen reverse; hay que pasarlas a array.)
--------------------------------------------------------------------------- */
{
  const invertir = (cadena) => Array.from(cadena).reverse().join("");
  console.log("I3:", invertir("JavaScript")); // tpircSavaJ
}

/* ---------------------------------------------------------------------------
   4. PALÍNDROMO
   esPalindromo(frase) ignorando mayúsculas y espacios.
--------------------------------------------------------------------------- */
{
  function esPalindromo(frase) {
    const letras = Array.from(frase.toLowerCase()).filter((c) => c !== " ");
    return letras.join("") === letras.reverse().join("");
  }
  console.log("I4:", esPalindromo("Anita lava la tina")); // true
  console.log("I4:", esPalindromo("Hola mundo")); // false
}

/* ---------------------------------------------------------------------------
   5. CONTAR MAYÚSCULAS
   contarMayusculas(texto) usando Array.from y filter.
   (Una letra es mayúscula si cambia al pasarla a minúscula.)
--------------------------------------------------------------------------- */
{
  const contarMayusculas = (texto) => Array.from(texto).filter((c) => c !== c.toLowerCase()).length;
  console.log("I5:", contarMayusculas("Hola Mundo JS")); // 4
}

/* ---------------------------------------------------------------------------
   6. DE CADENA A ARRAY DE NÚMEROS
   Convierte "12345" en [1, 2, 3, 4, 5] de dos formas:
   a) Array.from con función de mapeo; b) Array.from + map.
--------------------------------------------------------------------------- */
{
  const a = Array.from("12345", (c) => Number(c));
  const b = Array.from("12345").map(Number);
  console.log("I6:", a.join(), "|", b.join(), "|", typeof a[0]); // 1,2,3,4,5 | 1,2,3,4,5 | number
}

/* ---------------------------------------------------------------------------
   7. ARRAY-LIKE A MANO
   Dado un objeto que solo parece un array:
     let parecido = { 0: "a", 1: "b", 2: "c", length: 3 };
   a) recórrelo con un for usando length y [i];
   b) comprueba que NO es un array (Array.isArray);
   c) comprueba que NO tiene push/map (typeof parecido.map);
   d) conviértelo con Array.from y usa map para pasarlo a mayúsculas.
   e) ¿se puede recorrer con for..of directamente? (no: no es iterable)
--------------------------------------------------------------------------- */
{
  let parecido = { 0: "a", 1: "b", 2: "c", length: 3 };

  for (let i = 0; i < parecido.length; i++) console.log("I7a:", parecido[i]);
  console.log("I7b:", Array.isArray(parecido)); // false
  console.log("I7c:", typeof parecido.map); // undefined

  const real = Array.from(parecido);
  console.log("I7d:", Array.isArray(real), real.map((l) => l.toUpperCase()).join()); // true A,B,C

  try {
    for (const x of parecido) console.log(x);
  } catch (e) {
    console.log("I7e: error esperado ->", e.name); // TypeError: no es iterable
  }
}

/* ---------------------------------------------------------------------------
   8. ITERABLE vs ARRAY-LIKE
   Clasifica cada valor como iterable, array-like o ambas cosas:
   a) un array; b) una cadena; c) { length: 2, 0: "x", 1: "y" };
   d) un objeto normal { a: 1 }.
   Pista: for..of y length/índice.
--------------------------------------------------------------------------- */
{
  function esIterable(x) {
    return x != null && typeof x[Symbol.iterator] === "function";
  }
  function esArrayLike(x) {
    return x != null && typeof x.length === "number" && x.length >= 0;
  }
  const valores = [[1, 2], "hola", { length: 2, 0: "x", 1: "y" }, { a: 1 }];
  valores.forEach((v, i) => console.log("I8:", i, "iterable:", esIterable(v), "array-like:", esArrayLike(v)));
  // 0 true true | 1 true true | 2 false true | 3 false false
}

/* ---------------------------------------------------------------------------
   9. PRIMERA LETRA EN MAYÚSCULA DE CADA PALABRA
   capitalizar("hola qué tal") -> "Hola Qué Tal"
--------------------------------------------------------------------------- */
{
  const capitalizar = (frase) =>
    frase
      .split(" ")
      .map((p) => (p === "" ? p : p[0].toUpperCase() + p.slice(1)))
      .join(" ");
  console.log("I9:", capitalizar("hola qué tal")); // Hola Qué Tal
}

/* ---------------------------------------------------------------------------
   10. LETRAS DISTINTAS
   letrasDistintas(texto) devuelve un array con las letras que aparecen en
   el texto, sin repetir y sin espacios (en minúsculas).
   letrasDistintas("Hola Hola") -> ["h","o","l","a"]
--------------------------------------------------------------------------- */
{
  function letrasDistintas(texto) {
    return Array.from(texto.toLowerCase()).filter((c, i, arr) => c !== " " && arr.indexOf(c) === i);
  }
  console.log("I10:", letrasDistintas("Hola Hola").join()); // h,o,l,a
}

/* ---------------------------------------------------------------------------
   11. CUÁNTAS VECES SE REPITE CADA LETRA
   contarLetras(texto) devuelve un objeto { letra: veces } ignorando
   espacios y mayúsculas. contarLetras("Hola Ana") -> { h:1, o:1, l:1, a:3, n:1 }
--------------------------------------------------------------------------- */
{
  function contarLetras(texto) {
    const res = {};
    for (const c of texto.toLowerCase()) {
      if (c === " ") continue;
      if (c in res) res[c]++;
      else res[c] = 1;
    }
    return res;
  }
  const r = contarLetras("Hola Ana");
  console.log("I11:", r.h, r.o, r.l, r.a, r.n); // 1 1 1 3 1
}

/* ---------------------------------------------------------------------------
   12. ARRAY.FROM CON LENGTH
   Crea con Array.from({ length: 5 }, función) el array [0, 2, 4, 6, 8] y
   el array [1, 4, 9, 16, 25] (cuadrados del 1 al 5).
--------------------------------------------------------------------------- */
{
  const pares = Array.from({ length: 5 }, (_, i) => i * 2);
  const cuadrados = Array.from({ length: 5 }, (_, i) => (i + 1) * (i + 1));
  console.log("I12:", pares.join(), "|", cuadrados.join()); // 0,2,4,6,8 | 1,4,9,16,25
}

/* ---------------------------------------------------------------------------
   13. ¿TODAS LAS CADENAS SON ITERABLES?
   Los números no son iterables ni array-like. Comprueba qué pasa al hacer
   Array.from(123) y for..of sobre 123.
--------------------------------------------------------------------------- */
{
  console.log("I13:", Array.from(123).length); // 0 (no es ni iterable ni array-like)
  try {
    for (const x of 123) console.log(x);
  } catch (e) {
    console.log("I13: error esperado ->", e.name); // TypeError
  }
  // Para recorrer los dígitos hay que pasarlo a cadena primero:
  console.log("I13:", Array.from(String(123)).join("-")); // 1-2-3
}
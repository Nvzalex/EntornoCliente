/* ============================================================================
   FUNCIONES - Ejercicios resueltos
   Declaradas, expresiones, flecha, parámetros por defecto, callbacks y
   temporizadores (setTimeout / setInterval).
   Cada ejercicio va en su propio bloque { } para que los nombres no choquen
   con los de los otros .js cargados en el mismo index.html.
   Los resultados se ven en la consola del navegador (F12).
   ========================================================================== */

/* ---------------------------------------------------------------------------
   1. ES PAR
   Escribe esPar(n) que devuelva true si n es par. Hazla de tres formas:
   declarada, expresión de función y flecha (en una línea).
--------------------------------------------------------------------------- */
{
  function esPar(n) {
    return n % 2 === 0;
  }
  const esParExp = function (n) {
    return n % 2 === 0;
  };
  const esParFlecha = (n) => n % 2 === 0;

  console.log("F1:", esPar(4), esParExp(7), esParFlecha(10)); // true false true
}

/* ---------------------------------------------------------------------------
   2. PARÁMETROS POR DEFECTO
   saludar(nombre, saludo) devuelve `${saludo}, ${nombre}!`.
   Si no se pasa nombre vale "invitado"; si no se pasa saludo vale "Hola".
--------------------------------------------------------------------------- */
{
  function saludar(nombre = "invitado", saludo = "Hola") {
    return `${saludo}, ${nombre}!`;
  }
  console.log("F2:", saludar("Ana")); // Hola, Ana!
  console.log("F2:", saludar()); // Hola, invitado!
  console.log("F2:", saludar("Luis", "Buenas")); // Buenas, Luis!
}

/* ---------------------------------------------------------------------------
   3. FLECHAS DE UNA LÍNEA
   cuadrado(n), areaRectangulo(base, altura) y aleatorio() (entero 1-6,
   sin parámetros: ojo con los paréntesis).
--------------------------------------------------------------------------- */
{
  const cuadrado = (n) => n * n;
  const areaRectangulo = (base, altura) => base * altura;
  const aleatorio = () => Math.floor(Math.random() * 6) + 1;

  console.log("F3:", cuadrado(5), areaRectangulo(3, 4), aleatorio()); // 25 12 (1-6)
}

/* ---------------------------------------------------------------------------
   4. PARÁMETROS QUE FALTAN
   ¿Qué muestra este código y por qué?
     function suma(a, b) { return a + b; }
     console.log(suma(2));
   Y si b tuviera valor por defecto 0?
--------------------------------------------------------------------------- */
{
  function suma(a, b) {
    return a + b;
  }
  console.log("F4:", suma(2)); // NaN: b vale undefined y 2 + undefined = NaN

  function sumaDefecto(a, b = 0) {
    return a + b;
  }
  console.log("F4:", sumaDefecto(2)); // 2
}

/* ---------------------------------------------------------------------------
   5. ¿QUÉ SALE? (HOISTING)
   Indica qué ocurre en cada console.log y por qué.
--------------------------------------------------------------------------- */
{
  // La función declarada se puede usar antes de declararla (5).
  // La expresión de función NO: da ReferenceError porque la variable
  // (const) todavía no está inicializada en ese punto.
  console.log("F5:", sumaDecl(2, 3)); // 5
  try {
    console.log(sumaExp(2, 3));
  } catch (e) {
    console.log("F5: error esperado ->", e.name); // ReferenceError
  }

  function sumaDecl(a, b) {
    return a + b;
  }
  const sumaExp = (a, b) => a + b;
}

/* ---------------------------------------------------------------------------
   6. REPETIR
   repetir(n, fn) llama n veces a fn pasándole el número de repetición
   (0, 1, 2...).
--------------------------------------------------------------------------- */
{
  function repetir(n, fn) {
    for (let i = 0; i < n; i++) {
      fn(i);
    }
  }
  repetir(3, (i) => console.log("F6: Vuelta " + i));
}

/* ---------------------------------------------------------------------------
   7. FUNCIÓN COMO PARÁMETRO: CALCULADORA
   operar(a, b, fn) devuelve el resultado de aplicar fn a a y b.
   Pruébala con suma, resta, multiplicación y una función que devuelva el
   mayor de los dos.
--------------------------------------------------------------------------- */
{
  function operar(a, b, fn) {
    return fn(a, b);
  }
  console.log("F7:", operar(6, 3, (x, y) => x + y)); // 9
  console.log("F7:", operar(6, 3, (x, y) => x - y)); // 3
  console.log("F7:", operar(6, 3, (x, y) => x * y)); // 18
  console.log("F7:", operar(6, 3, (x, y) => (x > y ? x : y))); // 6
}

/* ---------------------------------------------------------------------------
   8. CONTAR LETRAS
   contarLetra(cadena, letra) devuelve las veces que aparece la letra.
   Escríbela como declarada, como expresión y como flecha.
--------------------------------------------------------------------------- */
{
  function contarLetra(cadena, letra) {
    let veces = 0;
    for (const c of cadena) {
      if (c === letra) veces++;
    }
    return veces;
  }
  const contarLetraExp = function (cadena, letra) {
    let veces = 0;
    for (let i = 0; i < cadena.length; i++) {
      if (cadena[i] === letra) veces++;
    }
    return veces;
  };
  const contarLetraFlecha = (cadena, letra) => Array.from(cadena).filter((c) => c === letra).length;

  console.log("F8:", contarLetra("Hola Caracola", "a")); // 4
  console.log("F8:", contarLetraExp("Hola Caracola", "o")); // 3
  console.log("F8:", contarLetraFlecha("Hola Caracola", "l")); // 2
}

/* ---------------------------------------------------------------------------
   9. CUENTA ATRÁS (setInterval + clearInterval)
   cuentaAtras(n) muestra n, n-1, ..., 0 (uno por segundo). Al llegar a 0
   muestra "¡Despegue!" y detiene el temporizador.
   (Aquí se llama con 3 para no esperar; pon 10 para el enunciado completo.)
--------------------------------------------------------------------------- */
function cuentaAtras(n) {
  const id = setInterval(() => {
    console.log("F9: cuenta atrás ->", n);
    if (n === 0) {
      clearInterval(id);
      console.log("F9: ¡Despegue!");
    }
    n--;
  }, 1000);
}
cuentaAtras(3);

/* ---------------------------------------------------------------------------
   10. TIMEOUT CON PARÁMETROS
   mostrarSaludo(nombre, saludo) muestra "saludo, nombre". Prográmala a los
   2 segundos pasando los parámetros desde el propio setTimeout.
--------------------------------------------------------------------------- */
function mostrarSaludo(nombre, saludo) {
  console.log(`F10: ${saludo}, ${nombre}`);
}
setTimeout(mostrarSaludo, 2000, "Ana", "Hola");

/* ---------------------------------------------------------------------------
   11. CANCELAR UN TIMEOUT
   Programa un mensaje a los 2 segundos y cancélalo con clearTimeout para
   que nunca se vea.
--------------------------------------------------------------------------- */
const idCancelado = setTimeout(() => console.log("F11: ESTO NO DEBERÍA VERSE"), 2000);
clearTimeout(idCancelado);

/* ---------------------------------------------------------------------------
   12. RELOJ QUE SE DETIENE SOLO
   Muestra la hora (hh:mm:ss) cada segundo y, a los 4 segundos, detén el
   reloj con clearInterval desde un setTimeout.
--------------------------------------------------------------------------- */
function calcularHora() {
  const ahora = new Date();
  return `${ahora.getHours()}:${ahora.getMinutes()}:${ahora.getSeconds()}`;
}
const idReloj = setInterval(() => console.log("F12: hora ->", calcularHora()), 1000);
setTimeout(() => {
  clearInterval(idReloj);
  console.log("F12: reloj detenido");
}, 4000);
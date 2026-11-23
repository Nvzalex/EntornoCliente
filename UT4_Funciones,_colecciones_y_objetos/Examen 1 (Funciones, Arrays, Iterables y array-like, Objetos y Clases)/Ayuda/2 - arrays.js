/* ============================================================================
   ARRAYS - Ejercicios resueltos
   push, pop, shift, unshift, splice, slice, concat, indexOf, includes,
   reverse, join, isArray, for, for..of, forEach, find, findIndex, filter,
   map y arrays multidimensionales.
   (Sin sort, reduce, Map, Set, spread ni desestructuración.)
   Resultados en la consola del navegador (F12).
   ========================================================================== */

/* ---------------------------------------------------------------------------
   1. ¿QUÉ SALE? (REFERENCIAS)
     let a = [1, 2, 3]; let b = a; let c = a.slice(); let d = a.concat();
     b.push(4);
     console.log(a.length, c.length, a == b, a == c, c == d,
                 Array.isArray(a), typeof a);
--------------------------------------------------------------------------- */
{
  let a = [1, 2, 3];
  let b = a;
  let c = a.slice();
  let d = a.concat();
  b.push(4);
  console.log("A1:", a.length, c.length, a == b, a == c, c == d, Array.isArray(a), typeof a);
  // 4 3 true false false true object
  // a y b apuntan al mismo array; c y d son copias distintas; dos arrays
  // distintos nunca son == aunque tengan lo mismo; los arrays son objetos.
}

/* ---------------------------------------------------------------------------
   2. LISTA DE LA COMPRA
   Parte de ["pan", "leche"]: añade "huevos" al final, "fruta" al principio,
   quita el último y el primero guardándolos en variables, y muestra todo.
--------------------------------------------------------------------------- */
{
  let lista = ["pan", "leche"];
  lista.push("huevos"); // pan, leche, huevos
  lista.unshift("fruta"); // fruta, pan, leche, huevos
  let ultimo = lista.pop(); // huevos
  let primero = lista.shift(); // fruta
  console.log("A2:", lista, ultimo, primero); // [pan, leche] huevos fruta
}

/* ---------------------------------------------------------------------------
   3. OPERACIONES CON STYLES (ejercicio clásico)
   Crea styles con "Jazz" y "Blues"; añade "Rock-n-Roll" al final; reemplaza
   el valor del medio por "Classics" (valdría para cualquier longitud impar);
   quita y muestra el primero; inserta "Rap" y "Reggae" al principio.
--------------------------------------------------------------------------- */
{
  let styles = ["Jazz", "Blues"];
  styles.push("Rock-n-Roll");
  styles[Math.floor((styles.length - 1) / 2)] = "Classics";
  console.log("A3:", styles.shift()); // Jazz
  styles.unshift("Rap", "Reggae");
  console.log("A3:", styles.toString()); // Rap,Reggae,Classics,Rock-n-Roll
}

/* ---------------------------------------------------------------------------
   4. SPLICE
   Parte de ["a","b","c","d","e"] y haz, en este orden:
   a) elimina "c"; b) inserta "X" e "Y" en la posición 1 sin borrar;
   c) reemplaza "d" por "D" (busca su posición con indexOf);
   d) elimina los dos últimos con índice negativo y guarda lo eliminado.
--------------------------------------------------------------------------- */
{
  let arr = ["a", "b", "c", "d", "e"];
  arr.splice(2, 1);
  console.log("A4a:", arr.join()); // a,b,d,e
  arr.splice(1, 0, "X", "Y");
  console.log("A4b:", arr.join()); // a,X,Y,b,d,e
  arr.splice(arr.indexOf("d"), 1, "D");
  console.log("A4c:", arr.join()); // a,X,Y,b,D,e
  let eliminados = arr.splice(-2);
  console.log("A4d:", arr.join(), "| eliminados:", eliminados.join()); // a,X,Y,b | D,e
}

/* ---------------------------------------------------------------------------
   5. SPLICE SOBRE UN ARRAY MIXTO
   Con [1, "dos", "tres", 4, 5, "seis", "siete"]:
   a) elimina los elementos de tipo cadena;
   b) (partiendo del original) tras cada cadena añade la misma en mayúsculas;
   c) (partiendo del original) elimina las cadenas y en su lugar pon
      "ELIMINADO" e "INSERTADO".
--------------------------------------------------------------------------- */
{
  const original = [1, "dos", "tres", 4, 5, "seis", "siete"];

  // a) recorriendo hacia atrás para no saltarnos elementos al borrar
  let a = original.slice();
  for (let i = a.length - 1; i >= 0; i--) {
    if (typeof a[i] === "string") a.splice(i, 1);
  }
  console.log("A5a:", a.join()); // 1,4,5

  // b) también hacia atrás: así los índices pendientes no se desplazan
  let b = original.slice();
  for (let i = b.length - 1; i >= 0; i--) {
    if (typeof b[i] === "string") b.splice(i + 1, 0, b[i].toUpperCase());
  }
  console.log("A5b:", b.join()); // 1,dos,DOS,tres,TRES,4,5,seis,SEIS,siete,SIETE

  // c) se borra todo lo de tipo cadena y se inserta en la posición de la 1ª
  let c = original.slice();
  let pos = c.findIndex((x) => typeof x === "string");
  for (let i = c.length - 1; i >= 0; i--) {
    if (typeof c[i] === "string") c.splice(i, 1);
  }
  c.splice(pos, 0, "ELIMINADO", "INSERTADO");
  console.log("A5c:", c.join()); // 1,ELIMINADO,INSERTADO,4,5
}

/* ---------------------------------------------------------------------------
   6. SLICE Y CONCAT
   Con nums = [1,2,3,4,5,6]: a) copia independiente; b) los 3 últimos;
   c) de la posición 1 a la 3 (ambas incluidas); d) nums + [7,8] + 9 sin
   modificar nums.
--------------------------------------------------------------------------- */
{
  let nums = [1, 2, 3, 4, 5, 6];
  let copia = nums.slice();
  let ultimos3 = nums.slice(-3); // 4,5,6
  let medio = nums.slice(1, 4); // 2,3,4 (el final no se incluye)
  let junto = nums.concat([7, 8], 9);
  console.log("A6:", copia.join(), "|", ultimos3.join(), "|", medio.join(), "|", junto.join(), "| orig:", nums.join());
}

/* ---------------------------------------------------------------------------
   7. AÑADIR SIN REPETIR
   anadirSinRepetir(arr, elemento) añade al final solo si no está ya.
   Devuelve true si lo añadió y false si no.
--------------------------------------------------------------------------- */
{
  function anadirSinRepetir(arr, elemento) {
    if (arr.includes(elemento)) return false;
    arr.push(elemento);
    return true;
  }
  let v = [1, 2, 3];
  console.log("A7:", anadirSinRepetir(v, 3), anadirSinRepetir(v, 4), v.join()); // false true 1,2,3,4
}

/* ---------------------------------------------------------------------------
   8. INDEXOF: CAMBIAR UNA CADENA A MAYÚSCULAS
   Con un array de números y cadenas (algunas repetidas):
   a) cambiar la PRIMERA aparición de una cadena por su versión en mayúsculas;
   b) cambiar la ÚLTIMA aparición;
   c) cambiar TODAS las apariciones.
   Si no la encuentra, no debe hacer nada ni dar error.
--------------------------------------------------------------------------- */
{
  const base = [1, "ana", 2, "luis", "ana", 3, "ana"];

  function cambiarPrimera(arr, cadena) {
    const pos = arr.indexOf(cadena);
    if (pos !== -1) arr[pos] = cadena.toUpperCase();
  }
  function cambiarUltima(arr, cadena) {
    let pos = -1;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === cadena) pos = i;
    }
    if (pos !== -1) arr[pos] = cadena.toUpperCase();
  }
  function cambiarTodas(arr, cadena) {
    let pos = arr.indexOf(cadena);
    while (pos !== -1) {
      arr[pos] = cadena.toUpperCase();
      pos = arr.indexOf(cadena, pos + 1); // sigue buscando desde la siguiente
    }
  }

  let a = base.slice();
  cambiarPrimera(a, "ana");
  console.log("A8a:", a.join()); // 1,ANA,2,luis,ana,3,ana
  let b = base.slice();
  cambiarUltima(b, "ana");
  console.log("A8b:", b.join()); // 1,ana,2,luis,ana,3,ANA
  let c = base.slice();
  cambiarTodas(c, "ana");
  console.log("A8c:", c.join()); // 1,ANA,2,luis,ANA,3,ANA
  cambiarPrimera(c, "noexiste"); // no pasa nada
}

/* ---------------------------------------------------------------------------
   9. FOREACH
   Con ["Manzana","Pera","Uva"] muestra "1. Manzana", "2. Pera"...
   Después, con otro forEach, suma [4, 8, 15, 16, 23, 42].
--------------------------------------------------------------------------- */
{
  ["Manzana", "Pera", "Uva"].forEach((fruta, i) => console.log(`A9: ${i + 1}. ${fruta}`));
  let suma = 0;
  [4, 8, 15, 16, 23, 42].forEach((n) => (suma += n));
  console.log("A9: suma =", suma); // 108
}

/* ---------------------------------------------------------------------------
   10. FIND Y FINDINDEX
   productos = [{Lápiz,1},{Cuaderno,3},{Mochila,25},{Regla,2}]
   a) primer producto con precio > 2; b) índice de la "Mochila";
   c) índice de un producto que no existe (-1);
   d) existeProducto(productos, nombre) -> true/false con findIndex.
--------------------------------------------------------------------------- */
{
  const productos = [
    { nombre: "Lápiz", precio: 1 },
    { nombre: "Cuaderno", precio: 3 },
    { nombre: "Mochila", precio: 25 },
    { nombre: "Regla", precio: 2 },
  ];
  console.log("A10a:", productos.find((p) => p.precio > 2).nombre); // Cuaderno
  console.log("A10b:", productos.findIndex((p) => p.nombre === "Mochila")); // 2
  console.log("A10c:", productos.findIndex((p) => p.nombre === "Goma")); // -1
  const existeProducto = (arr, nombre) => arr.findIndex((p) => p.nombre === nombre) !== -1;
  console.log("A10d:", existeProducto(productos, "Regla"), existeProducto(productos, "Goma")); // true false
}

/* ---------------------------------------------------------------------------
   11. FILTER
   a) pares de [3,8,12,5,20,7]; b) mayores que 6; c) productos con
   precio <= 3; d) filtrarPorLongitud(arr, n): cadenas con al menos n letras.
--------------------------------------------------------------------------- */
{
  const productos = [
    { nombre: "Lápiz", precio: 1 },
    { nombre: "Cuaderno", precio: 3 },
    { nombre: "Mochila", precio: 25 },
    { nombre: "Regla", precio: 2 },
  ];
  const nums = [3, 8, 12, 5, 20, 7];
  console.log("A11a:", nums.filter((n) => n % 2 === 0).join()); // 8,12,20
  console.log("A11b:", nums.filter((n) => n > 6).join()); // 8,12,20,7
  console.log("A11c:", productos.filter((p) => p.precio <= 3).map((p) => p.nombre).join()); // Lápiz,Cuaderno,Regla
  const filtrarPorLongitud = (arr, n) => arr.filter((s) => s.length >= n);
  console.log("A11d:", filtrarPorLongitud(["a", "casa", "sol", "cielo"], 4).join()); // casa,cielo
}

/* ---------------------------------------------------------------------------
   12. SUBARRAY POR RANGO
   filterRange(arr, a, b) devuelve un NUEVO array con los elementos entre a
   y b (ambos incluidos) sin modificar arr.
--------------------------------------------------------------------------- */
{
  const filterRange = (arr, a, b) => arr.filter((x) => x >= a && x <= b);
  let arr = [5, 3, 8, 1];
  console.log("A12:", filterRange(arr, 1, 4).join(), "| original:", arr.join()); // 3,1 | 5,3,8,1
}

/* ---------------------------------------------------------------------------
   13. MAP
   a) IVA (21 %) de [10, 20, 50]; b) nombres de los productos;
   c) ["ana","luis","marta"] con la primera letra en mayúscula;
   d) longitudes de ["a","bb","ccc"].
--------------------------------------------------------------------------- */
{
  const productos = [
    { nombre: "Lápiz", precio: 1 },
    { nombre: "Mochila", precio: 25 },
  ];
  console.log("A13a:", [10, 20, 50].map((p) => p * 1.21).join()); // 12.1,24.2,60.5
  console.log("A13b:", productos.map((p) => p.nombre).join()); // Lápiz,Mochila
  console.log("A13c:", ["ana", "luis", "marta"].map((n) => n[0].toUpperCase() + n.slice(1)).join()); // Ana,Luis,Marta
  console.log("A13d:", ["a", "bb", "ccc"].map((s) => s.length).join()); // 1,2,3
}

/* ---------------------------------------------------------------------------
   14. MAPEAR A OBJETOS
   De usuarios con {nombre, apellido, id} obtén otro array con
   {id, nombreCompleto}. (Truco de las flechas: el objeto va entre paréntesis.)
--------------------------------------------------------------------------- */
{
  let usuarios = [
    { nombre: "John", apellido: "Smith", id: 1 },
    { nombre: "Pete", apellido: "Hunt", id: 2 },
    { nombre: "Mary", apellido: "Key", id: 3 },
  ];
  let mapeados = usuarios.map((u) => ({ id: u.id, nombreCompleto: `${u.nombre} ${u.apellido}` }));
  console.log("A14:", mapeados[0].id, mapeados[0].nombreCompleto); // 1 John Smith
  console.log("A14:", mapeados.length); // 3
}

/* ---------------------------------------------------------------------------
   15. ENCADENAR FILTER Y MAP
   Nombres en MAYÚSCULAS de los productos con precio < 10.
--------------------------------------------------------------------------- */
{
  const productos = [
    { nombre: "Lápiz", precio: 1 },
    { nombre: "Cuaderno", precio: 3 },
    { nombre: "Mochila", precio: 25 },
    { nombre: "Regla", precio: 2 },
  ];
  console.log("A15:", productos.filter((p) => p.precio < 10).map((p) => p.nombre.toUpperCase()).join());
  // LÁPIZ,CUADERNO,REGLA
}

/* ---------------------------------------------------------------------------
   16. CAMELIZE
   camelize("background-color") == "backgroundColor"
   camelize("-webkit-transition") == "WebkitTransition"
   (Usa split, map, join.)
--------------------------------------------------------------------------- */
{
  function camelize(str) {
    return str
      .split("-")
      .map((palabra, i) => (i === 0 ? palabra : palabra[0].toUpperCase() + palabra.slice(1)))
      .join("");
  }
  // Con "-webkit-transition", split da ["", "webkit", "transition"]. Como la
  // primera "palabra" es vacía, la segunda se pone en mayúscula: WebkitTransition.
  console.log("A16:", camelize("background-color")); // backgroundColor
  console.log("A16:", camelize("list-style-image")); // listStyleImage
  console.log("A16:", camelize("-webkit-transition")); // WebkitTransition
}

/* ---------------------------------------------------------------------------
   17. MATRICES
   Con [[1,2,3],[4,5,6],[7,8,9]]: a) muéstrala fila a fila con join;
   b) sumaDiagonal(m) = 15; c) sumasPorFila(m) = [6,15,24].
--------------------------------------------------------------------------- */
{
  const m = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  m.forEach((fila) => console.log("A17a:", fila.join(" ")));

  function sumaDiagonal(m) {
    let suma = 0;
    for (let i = 0; i < m.length; i++) suma += m[i][i];
    return suma;
  }
  const sumasPorFila = (m) =>
    m.map((fila) => {
      let s = 0;
      fila.forEach((n) => (s += n));
      return s;
    });
  console.log("A17b:", sumaDiagonal(m)); // 15
  console.log("A17c:", sumasPorFila(m).join()); // 6,15,24
}

/* ---------------------------------------------------------------------------
   18. ÚNICOS SIN SET
   unicos(arr) devuelve un array sin repetidos (orden de primera aparición).
   Pista: filter con index e indexOf.
--------------------------------------------------------------------------- */
{
  const unicos = (arr) => arr.filter((el, i, a) => a.indexOf(el) === i);
  console.log("A18:", unicos(["Hare", "Krishna", "Hare", ":-O", "Krishna"]).join()); // Hare,Krishna,:-O
}

/* ---------------------------------------------------------------------------
   19. MÁXIMO Y MÍNIMO
   maxMin(arr) devuelve {max, min} recorriendo con for..of
   (sin Math.max, sort ni reduce).
--------------------------------------------------------------------------- */
{
  function maxMin(arr) {
    let max = arr[0];
    let min = arr[0];
    for (const n of arr) {
      if (n > max) max = n;
      if (n < min) min = n;
    }
    return { max: max, min: min };
  }
  const r = maxMin([4, -2, 9, 0, 7]);
  console.log("A19:", r.max, r.min); // 9 -2
}

/* ---------------------------------------------------------------------------
   20. ROTAR
   rotarIzquierda(arr, n) devuelve un NUEVO array desplazado n posiciones
   a la izquierda: [1,2,3,4,5], 2 -> [3,4,5,1,2]
--------------------------------------------------------------------------- */
{
  const rotarIzquierda = (arr, n) => arr.slice(n).concat(arr.slice(0, n));
  console.log("A20:", rotarIzquierda([1, 2, 3, 4, 5], 2).join()); // 3,4,5,1,2
}

/* ---------------------------------------------------------------------------
   21. ELEMENTOS COMUNES
   comunes(a, b) devuelve los elementos presentes en ambos arrays.
--------------------------------------------------------------------------- */
{
  const comunes = (a, b) => a.filter((x) => b.includes(x));
  console.log("A21:", comunes([1, 2, 3, 4], [3, 4, 5]).join()); // 3,4
}

/* ---------------------------------------------------------------------------
   22. REVERSE: ¡MODIFICA EL ORIGINAL!
   ¿Qué muestra este código?
     let arr = [1,2,3]; let r = arr.reverse(); r[0] = 100;
     console.log(arr, r);
   Escribe copiaInvertida(arr) que NO modifique el original.
--------------------------------------------------------------------------- */
{
  let arr = [1, 2, 3];
  let r = arr.reverse();
  r[0] = 100;
  console.log("A22:", arr.join(), "|", r.join()); // 100,2,1 | 100,2,1 (mismo array)

  const copiaInvertida = (a) => a.slice().reverse();
  let original = [1, 2, 3];
  console.log("A22:", copiaInvertida(original).join(), "| original:", original.join()); // 3,2,1 | 1,2,3
}

/* ---------------------------------------------------------------------------
   23. ALMACENAR NÚMEROS
   almacenarNumeros(entradas) recibe un array de cadenas (simulando lo que
   escribiría el usuario) y va guardando números hasta que encuentra una
   cadena vacía o no numérica. El 0 es un número válido.
   (En el navegador se usaría prompt(); aquí se simula para poder probarlo.)
--------------------------------------------------------------------------- */
{
  function almacenarNumeros(entradas) {
    const resultado = [];
    for (const texto of entradas) {
      if (texto === "" || texto === null || isNaN(texto)) break;
      resultado.push(Number(texto));
    }
    return resultado;
  }
  console.log("A23:", almacenarNumeros(["5", "0", "12", "hola", "7"]).join()); // 5,0,12
}

/* ---------------------------------------------------------------------------
   24. ¿ES UN ARRAY?
   Escribe tipoDe(x) que devuelva "array", "objeto" o "otro" usando
   Array.isArray y typeof.
--------------------------------------------------------------------------- */
{
  function tipoDe(x) {
    if (Array.isArray(x)) return "array";
    if (typeof x === "object" && x !== null) return "objeto";
    return "otro";
  }
  console.log("A24:", tipoDe([]), tipoDe({}), tipoDe("hola"), tipoDe(null)); // array objeto otro otro
}
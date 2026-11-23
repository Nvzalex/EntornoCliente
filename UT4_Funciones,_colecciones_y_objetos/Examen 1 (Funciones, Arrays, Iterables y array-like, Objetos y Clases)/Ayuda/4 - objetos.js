/* ============================================================================
   OBJETOS - Ejercicios resueltos
   Literales, this, acceso con . y [], in, delete, for..in,
   Object.keys / values / entries / fromEntries, referencias y funciones
   constructoras con new.
   (Sin Map, Set, spread, desestructuración ni JSON.)
   Resultados en la consola del navegador (F12).
   ========================================================================== */

/* ---------------------------------------------------------------------------
   1. OBJETO LITERAL
   a) crea coche con marca, modelo, anio y un método arrancar() que muestre
      "Arrancando el <marca> <modelo>" (usa this); b) añade color;
   c) comprueba con in si tiene "color" y "puertas"; d) elimina anio;
   e) accede a "marca" con corchetes usando una variable.
--------------------------------------------------------------------------- */
{
  let coche = {
    marca: "Seat",
    modelo: "Ibiza",
    anio: 2019,
    arrancar() {
      console.log(`O1: Arrancando el ${this.marca} ${this.modelo}`);
    },
  };
  coche.arrancar();
  coche.color = "rojo";
  console.log("O1:", "color" in coche, "puertas" in coche); // true false
  delete coche.anio;
  let prop = "marca";
  console.log("O1:", coche[prop], coche.anio); // Seat undefined
}

/* ---------------------------------------------------------------------------
   2. PROPIEDADES INEXISTENTES
   ¿Qué muestra cada línea?
     let p = { nombre: "Ana", edad: undefined };
     console.log(p.apellido, "edad" in p, "apellido" in p, p.edad === undefined);
--------------------------------------------------------------------------- */
{
  let p = { nombre: "Ana", edad: undefined };
  console.log("O2:", p.apellido, "edad" in p, "apellido" in p, p.edad === undefined);
  // undefined true false true
  // Con === undefined no se distingue "no existe" de "existe con valor
  // undefined"; el operador in sí.
}

/* ---------------------------------------------------------------------------
   3. ¿ESTÁ VACÍO?
   estaVacio(obj) devuelve true si el objeto no tiene ninguna propiedad
   (usa for..in).
--------------------------------------------------------------------------- */
{
  function estaVacio(obj) {
    for (const prop in obj) {
      return false;
    }
    return true;
  }
  console.log("O3:", estaVacio({}), estaVacio({ a: 1 })); // true false
}

/* ---------------------------------------------------------------------------
   4. SUMAR SALARIOS
   Dado salarios = { Juan: 100, Ana: 160, Pedro: 130 }, escribe
   sumarSalarios(obj) que devuelva la suma de todos (0 si está vacío).
   Hazlo con for..in y con Object.values.
--------------------------------------------------------------------------- */
{
  function sumarSalariosForIn(obj) {
    let suma = 0;
    for (const nombre in obj) suma += obj[nombre];
    return suma;
  }
  function sumarSalarios(obj) {
    let suma = 0;
    Object.values(obj).forEach((s) => (suma += s));
    return suma;
  }
  const salarios = { Juan: 100, Ana: 160, Pedro: 130 };
  console.log("O4:", sumarSalariosForIn(salarios), sumarSalarios(salarios), sumarSalarios({})); // 390 390 0
}

/* ---------------------------------------------------------------------------
   5. EL MÁS RICO
   mejorPagado(obj) devuelve el nombre de la persona con mayor salario
   (null si el objeto está vacío). Usa Object.entries.
--------------------------------------------------------------------------- */
{
  function mejorPagado(obj) {
    let nombre = null;
    let max = -Infinity;
    for (const par of Object.entries(obj)) {
      if (par[1] > max) {
        max = par[1];
        nombre = par[0];
      }
    }
    return nombre;
  }
  console.log("O5:", mejorPagado({ Juan: 100, Ana: 160, Pedro: 130 }), mejorPagado({})); // Ana null
}

/* ---------------------------------------------------------------------------
   6. FOR..IN
   a) describir(obj): cadena con una línea "propiedad: valor" por propiedad;
   b) contarNumericas(obj): cuántas propiedades tienen un valor number.
--------------------------------------------------------------------------- */
{
  function describir(obj) {
    let texto = "";
    for (const prop in obj) texto += `${prop}: ${obj[prop]}\n`;
    return texto;
  }
  function contarNumericas(obj) {
    let cuenta = 0;
    for (const prop in obj) {
      if (typeof obj[prop] === "number") cuenta++;
    }
    return cuenta;
  }
  const o = { nombre: "Pepe", edad: 30, altura: 1.8 };
  console.log("O6:\n" + describir(o));
  console.log("O6:", contarNumericas(o)); // 2
}

/* ---------------------------------------------------------------------------
   7. DUPLICAR NÚMEROS
   multiplicarNumericos(obj, factor) multiplica por factor todas las
   propiedades numéricas (modifica el objeto).
--------------------------------------------------------------------------- */
{
  function multiplicarNumericos(obj, factor) {
    for (const prop in obj) {
      if (typeof obj[prop] === "number") obj[prop] *= factor;
    }
  }
  let menu = { ancho: 200, alto: 300, titulo: "Mi menú" };
  multiplicarNumericos(menu, 2);
  console.log("O7:", menu.ancho, menu.alto, menu.titulo); // 400 600 Mi menú
}

/* ---------------------------------------------------------------------------
   8. KEYS / VALUES / ENTRIES
   notas = { Mates: 7, Lengua: 5, Ingles: 9 }
   a) mediaNotas(obj) con Object.values (0 si vacío);
   b) cuántas asignaturas hay con Object.keys;
   c) mostrar cada asignatura y nota recorriendo Object.entries.
--------------------------------------------------------------------------- */
{
  const notas = { Mates: 7, Lengua: 5, Ingles: 9 };
  function mediaNotas(obj) {
    const valores = Object.values(obj);
    if (valores.length === 0) return 0;
    let suma = 0;
    valores.forEach((n) => (suma += n));
    return suma / valores.length;
  }
  console.log("O8a:", mediaNotas(notas), mediaNotas({})); // 7 0
  console.log("O8b:", Object.keys(notas).length); // 3
  for (const par of Object.entries(notas)) console.log(`O8c: ${par[0]} -> ${par[1]}`);
}

/* ---------------------------------------------------------------------------
   9. FROMENTRIES
   precios = { pan: 1, leche: 2, huevos: 3 }
   aplicarDescuento(precios, porcentaje) devuelve un NUEVO objeto con los
   precios rebajados (Object.entries + map + Object.fromEntries).
--------------------------------------------------------------------------- */
{
  function aplicarDescuento(precios, porcentaje) {
    const pares = Object.entries(precios).map((par) => [par[0], par[1] * (1 - porcentaje / 100)]);
    return Object.fromEntries(pares);
  }
  const precios = { pan: 1, leche: 2, huevos: 3 };
  const rebajados = aplicarDescuento(precios, 50);
  console.log("O9:", rebajados.pan, rebajados.leche, rebajados.huevos); // 0.5 1 1.5
  console.log("O9: original:", precios.pan, precios.leche, precios.huevos); // 1 2 3
}

/* ---------------------------------------------------------------------------
   10. DOBLAR PRECIOS CON FROMENTRIES
   Dado { manzanas: 3, peras: 5 }, obtén un objeto nuevo con los valores
   multiplicados por 2 usando Object.fromEntries(Object.entries(...).map(...)).
--------------------------------------------------------------------------- */
{
  const doble = Object.fromEntries(Object.entries({ manzanas: 3, peras: 5 }).map((p) => [p[0], p[1] * 2]));
  console.log("O10:", doble.manzanas, doble.peras); // 6 10
}

/* ---------------------------------------------------------------------------
   11. ¿QUÉ SALE? (OBJETOS Y REFERENCIAS)
     let u1 = { nombre: "Ana" }; let u2 = u1; let u3 = { nombre: "Ana" };
     u2.nombre = "Luis";
     console.log(u1.nombre, u1 == u2, u1 == u3, u3.nombre);
--------------------------------------------------------------------------- */
{
  let u1 = { nombre: "Ana" };
  let u2 = u1;
  let u3 = { nombre: "Ana" };
  u2.nombre = "Luis";
  console.log("O11:", u1.nombre, u1 == u2, u1 == u3, u3.nombre); // Luis true false Ana
}

/* ---------------------------------------------------------------------------
   12. COPIAR UN OBJETO
   copiar(obj) devuelve un objeto NUEVO con las mismas propiedades
   (usa for..in). Comprueba que modificar la copia no cambia el original.
--------------------------------------------------------------------------- */
{
  function copiar(obj) {
    const res = {};
    for (const prop in obj) res[prop] = obj[prop];
    return res;
  }
  const original = { a: 1, b: 2 };
  const copia = copiar(original);
  copia.a = 99;
  console.log("O12:", original.a, copia.a, original == copia); // 1 99 false
}

/* ---------------------------------------------------------------------------
   13. CUENTA CON MÉTODOS
   Objeto literal cuenta con titular, saldo (100), ingresar(c), retirar(c)
   y mostrar(). retirar no deja saldo negativo (false si no se puede).
--------------------------------------------------------------------------- */
{
  const cuenta = {
    titular: "Marta",
    saldo: 100,
    ingresar(cantidad) {
      this.saldo += cantidad;
    },
    retirar(cantidad) {
      if (cantidad > this.saldo) return false;
      this.saldo -= cantidad;
      return true;
    },
    mostrar() {
      console.log(`O13: ${this.titular}: ${this.saldo} €`);
    },
  };
  cuenta.ingresar(50);
  console.log("O13:", cuenta.retirar(500)); // false
  console.log("O13:", cuenta.retirar(30)); // true
  cuenta.mostrar(); // Marta: 120 €
}

/* ---------------------------------------------------------------------------
   14. CARRITO COMO OBJETO
   Un carrito es { producto: unidades }.
   a) anadirAlCarrito(carrito, producto, unidades): suma si ya está, crea si no;
   b) totalUnidades(carrito).
--------------------------------------------------------------------------- */
{
  function anadirAlCarrito(carrito, producto, unidades) {
    if (producto in carrito) carrito[producto] += unidades;
    else carrito[producto] = unidades;
    return carrito;
  }
  function totalUnidades(carrito) {
    let total = 0;
    for (const p in carrito) total += carrito[p];
    return total;
  }
  const carrito = {};
  anadirAlCarrito(carrito, "pan", 2);
  anadirAlCarrito(carrito, "leche", 1);
  anadirAlCarrito(carrito, "pan", 3);
  console.log("O14:", carrito.pan, carrito.leche, totalUnidades(carrito)); // 5 1 6
}

/* ---------------------------------------------------------------------------
   15. ACCESO CON CORCHETES Y VARIABLE
   leer(obj, nombrePropiedad) devuelve el valor de esa propiedad, o el
   texto "no existe" si el objeto no la tiene.
--------------------------------------------------------------------------- */
{
  const leer = (obj, nombre) => (nombre in obj ? obj[nombre] : "no existe");
  const persona = { nombre: "Eva", edad: 28 };
  console.log("O15:", leer(persona, "nombre"), leer(persona, "edad"), leer(persona, "altura")); // Eva 28 no existe
}

/* ---------------------------------------------------------------------------
   16. FUNCIÓN CONSTRUCTORA
   Libro(titulo, autor, paginas) con un método resumen() que devuelva
   "titulo, de autor (N págs.)". Crea dos libros con new.
--------------------------------------------------------------------------- */
{
  function Libro(titulo, autor, paginas) {
    this.titulo = titulo;
    this.autor = autor;
    this.paginas = paginas;
    this.resumen = function () {
      return `${this.titulo}, de ${this.autor} (${this.paginas} págs.)`;
    };
  }
  const l1 = new Libro("Dune", "Herbert", 600);
  const l2 = new Libro("Emma", "Austen", 450);
  console.log("O16:", l1.resumen());
  console.log("O16:", l2.resumen());
}

/* ---------------------------------------------------------------------------
   17. CONSTRUCTORA: CALCULADORA
   Calculadora() con propiedades a y b y métodos leer(a, b), suma() y
   multiplica(). (Aquí leer recibe los valores en lugar de usar prompt.)
--------------------------------------------------------------------------- */
{
  function Calculadora() {
    this.a = 0;
    this.b = 0;
    this.leer = function (a, b) {
      this.a = a;
      this.b = b;
    };
    this.suma = function () {
      return this.a + this.b;
    };
    this.multiplica = function () {
      return this.a * this.b;
    };
  }
  const calc = new Calculadora();
  calc.leer(3, 4);
  console.log("O17:", calc.suma(), calc.multiplica()); // 7 12
}

/* ---------------------------------------------------------------------------
   18. CONTAR PALABRAS
   contarPalabras(frase) devuelve un objeto con cada palabra (minúsculas) y
   las veces que aparece. "a b a c b a" -> { a: 3, b: 2, c: 1 }
--------------------------------------------------------------------------- */
{
  function contarPalabras(frase) {
    const res = {};
    for (const palabra of frase.toLowerCase().split(" ")) {
      if (palabra in res) res[palabra]++;
      else res[palabra] = 1;
    }
    return res;
  }
  const r = contarPalabras("a b a c b a");
  console.log("O18:", r.a, r.b, r.c); // 3 2 1
}

/* ---------------------------------------------------------------------------
   19. ARRAY DE OBJETOS
   libros = [Dune/Herbert/600, Emma/Austen/450, Persuasión/Austen/300,
             Ubik/Dick/220]
   a) títulos de los de más de 300 págs.; b) primer libro de Austen;
   c) ¿hay alguno de más de 1000 págs.? (findIndex);
   d) array de { titulo, largo } con largo = paginas > 400.
--------------------------------------------------------------------------- */
{
  const libros = [
    { titulo: "Dune", autor: "Herbert", paginas: 600 },
    { titulo: "Emma", autor: "Austen", paginas: 450 },
    { titulo: "Persuasión", autor: "Austen", paginas: 300 },
    { titulo: "Ubik", autor: "Dick", paginas: 220 },
  ];
  console.log("O19a:", libros.filter((l) => l.paginas > 300).map((l) => l.titulo).join()); // Dune,Emma
  console.log("O19b:", libros.find((l) => l.autor === "Austen").titulo); // Emma
  console.log("O19c:", libros.findIndex((l) => l.paginas > 1000) !== -1); // false
  console.log("O19d:", libros.map((l) => ({ titulo: l.titulo, largo: l.paginas > 400 })).map((l) => `${l.titulo}=${l.largo}`).join());
  // Dune=true,Emma=true,Persuasión=false,Ubik=false
}

/* ---------------------------------------------------------------------------
   20. INVERTIR UN OBJETO
   invertirObjeto({ a: "x", b: "y" }) -> { x: "a", y: "b" } (usa for..in).
--------------------------------------------------------------------------- */
{
  function invertirObjeto(obj) {
    const res = {};
    for (const clave in obj) res[obj[clave]] = clave;
    return res;
  }
  const r = invertirObjeto({ a: "x", b: "y" });
  console.log("O20:", r.x, r.y); // a b
}

/* ---------------------------------------------------------------------------
   21. AGRUPAR POR EDAD
   Dado un array de personas {nombre, edad}, agruparPorMayoria(arr) devuelve
   { mayores: [nombres], menores: [nombres] } (mayor de edad: 18 o más).
--------------------------------------------------------------------------- */
{
  function agruparPorMayoria(personas) {
    const res = { mayores: [], menores: [] };
    personas.forEach((p) => {
      if (p.edad >= 18) res.mayores.push(p.nombre);
      else res.menores.push(p.nombre);
    });
    return res;
  }
  const grupos = agruparPorMayoria([
    { nombre: "Ana", edad: 20 },
    { nombre: "Luis", edad: 15 },
    { nombre: "Eva", edad: 18 },
  ]);
  console.log("O21:", grupos.mayores.join(), "|", grupos.menores.join()); // Ana,Eva | Luis
}
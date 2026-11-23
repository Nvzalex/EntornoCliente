/* ============================================================================
   CLASES - Ejercicios resueltos
   constructor, propiedades con this, métodos, new y herencia (extends/super).
   (Sin getters/setters ni métodos static.)
   Resultados en la consola del navegador (F12).
   ========================================================================== */

/* ---------------------------------------------------------------------------
   1. RECTÁNGULO
   Clase Rectangulo(base, altura) con area(), perimetro() y esCuadrado().
--------------------------------------------------------------------------- */
{
  class Rectangulo {
    constructor(base, altura) {
      this.base = base;
      this.altura = altura;
    }
    area() {
      return this.base * this.altura;
    }
    perimetro() {
      return 2 * (this.base + this.altura);
    }
    esCuadrado() {
      return this.base === this.altura;
    }
  }
  const r = new Rectangulo(3, 4);
  console.log("C1:", r.area(), r.perimetro(), r.esCuadrado()); // 12 14 false
  console.log("C1:", new Rectangulo(5, 5).esCuadrado()); // true
}

/* ---------------------------------------------------------------------------
   2. PERSONA
   Clase Persona(nombre, edad) con saludar() que devuelva
   "Hola, soy <nombre> y tengo <edad> años" y esMayorDeEdad().
   Crea un array de 3 personas y muestra las mayores de edad (filter).
--------------------------------------------------------------------------- */
{
  class Persona {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
    saludar() {
      return `Hola, soy ${this.nombre} y tengo ${this.edad} años`;
    }
    esMayorDeEdad() {
      return this.edad >= 18;
    }
  }
  const personas = [new Persona("Ana", 20), new Persona("Luis", 15), new Persona("Eva", 30)];
  console.log("C2:", personas[0].saludar());
  console.log("C2:", personas.filter((p) => p.esMayorDeEdad()).map((p) => p.nombre).join()); // Ana,Eva
}

/* ---------------------------------------------------------------------------
   3. CUENTA BANCARIA
   CuentaBancaria(titular, saldo = 0) con ingresar, retirar y mostrar.
   No se permite ingresar <= 0 ni retirar más de lo que hay (true/false).
--------------------------------------------------------------------------- */
{
  class CuentaBancaria {
    constructor(titular, saldo = 0) {
      this.titular = titular;
      this.saldo = saldo;
    }
    ingresar(cantidad) {
      if (cantidad <= 0) return false;
      this.saldo += cantidad;
      return true;
    }
    retirar(cantidad) {
      if (cantidad <= 0 || cantidad > this.saldo) return false;
      this.saldo -= cantidad;
      return true;
    }
    mostrar() {
      console.log(`C3: ${this.titular}: ${this.saldo} €`);
    }
  }
  const c = new CuentaBancaria("Pablo");
  console.log("C3:", c.ingresar(200), c.ingresar(-5), c.retirar(500), c.retirar(50)); // true false false true
  c.mostrar(); // Pablo: 150 €
}

/* ---------------------------------------------------------------------------
   4. CONTADOR
   Clase Contador con valor inicial 0 y los métodos incrementar(),
   decrementar() y reiniciar(). Los métodos devuelven this para poder
   encadenar llamadas: c.incrementar().incrementar().decrementar()
--------------------------------------------------------------------------- */
{
  class Contador {
    constructor() {
      this.valor = 0;
    }
    incrementar() {
      this.valor++;
      return this;
    }
    decrementar() {
      this.valor--;
      return this;
    }
    reiniciar() {
      this.valor = 0;
      return this;
    }
  }
  const c = new Contador();
  c.incrementar().incrementar().incrementar().decrementar();
  console.log("C4:", c.valor); // 2
  console.log("C4:", c.reiniciar().valor); // 0
}

/* ---------------------------------------------------------------------------
   5. HERENCIA: ANIMALES
   Animal(nombre) con hablar() -> "<nombre> hace un sonido".
   Perro hereda de Animal, añade raza y sobrescribe hablar() devolviendo lo
   del padre + " (Guau!)". Gato hace algo parecido.
--------------------------------------------------------------------------- */
{
  class Animal {
    constructor(nombre) {
      this.nombre = nombre;
    }
    hablar() {
      return `${this.nombre} hace un sonido`;
    }
  }
  class Perro extends Animal {
    constructor(nombre, raza) {
      super(nombre); // obligatorio antes de usar this
      this.raza = raza;
    }
    hablar() {
      return super.hablar() + " (Guau!)";
    }
  }
  class Gato extends Animal {
    hablar() {
      return super.hablar() + " (Miau!)";
    }
  }
  console.log("C5:", new Animal("Bicho").hablar());
  const rex = new Perro("Rex", "Pastor");
  console.log("C5:", rex.hablar(), "| raza:", rex.raza);
  console.log("C5:", new Gato("Misi").hablar());
  console.log("C5:", rex instanceof Perro, rex instanceof Animal, rex instanceof Gato); // true true false
}

/* ---------------------------------------------------------------------------
   6. HERENCIA: VEHÍCULOS
   Vehiculo(marca, modelo, anio) con descripcion().
   Coche hereda de Vehiculo, añade puertas y su descripcion() reutiliza la
   del padre añadiendo las puertas.
--------------------------------------------------------------------------- */
{
  class Vehiculo {
    constructor(marca, modelo, anio) {
      this.marca = marca;
      this.modelo = modelo;
      this.anio = anio;
    }
    descripcion() {
      return `${this.marca} ${this.modelo} (${this.anio})`;
    }
  }
  class Coche extends Vehiculo {
    constructor(marca, modelo, anio, puertas) {
      super(marca, modelo, anio);
      this.puertas = puertas;
    }
    descripcion() {
      return `${super.descripcion()}, ${this.puertas} puertas`;
    }
  }
  console.log("C6:", new Vehiculo("Honda", "CB500", 2020).descripcion());
  console.log("C6:", new Coche("Seat", "Ibiza", 2019, 5).descripcion());
}

/* ---------------------------------------------------------------------------
   7. HERENCIA SIN CONSTRUCTOR PROPIO
   ¿Qué pasa si la clase hija no define constructor? Comprueba con:
     class A { constructor(x) { this.x = x; } }
     class B extends A { doble() { return this.x * 2; } }
     new B(5).doble()
--------------------------------------------------------------------------- */
{
  class A {
    constructor(x) {
      this.x = x;
    }
  }
  class B extends A {
    doble() {
      return this.x * 2;
    }
  }
  console.log("C7:", new B(5).doble()); // 10
  // Si la hija no tiene constructor, usa el del padre con los mismos argumentos.
}

/* ---------------------------------------------------------------------------
   8. EL ERROR TÍPICO DE SUPER
   Comprueba qué ocurre si en el constructor de la hija se usa this ANTES de
   llamar a super().
--------------------------------------------------------------------------- */
{
  class Padre {
    constructor(nombre) {
      this.nombre = nombre;
    }
  }
  class Hija extends Padre {
    constructor(nombre) {
      try {
        this.edad = 10; // todavía no se ha llamado a super
      } catch (e) {
        console.log("C8: error esperado ->", e.name); // ReferenceError
      }
      super(nombre);
    }
  }
  new Hija("Lola");
}

/* ---------------------------------------------------------------------------
   9. BIBLIOTECA
   Libro(titulo, autor) con disponible = true.
   Biblioteca con un array libros y: agregar(libro), buscarPorAutor(autor),
   prestar(titulo), devolver(titulo) y titulosDisponibles().
   prestar/devolver devuelven true si la operación se pudo hacer.
--------------------------------------------------------------------------- */
{
  class Libro {
    constructor(titulo, autor) {
      this.titulo = titulo;
      this.autor = autor;
      this.disponible = true;
    }
  }
  class Biblioteca {
    constructor() {
      this.libros = [];
    }
    agregar(libro) {
      this.libros.push(libro);
    }
    buscarPorAutor(autor) {
      return this.libros.filter((l) => l.autor === autor);
    }
    prestar(titulo) {
      const libro = this.libros.find((l) => l.titulo === titulo);
      if (!libro || !libro.disponible) return false;
      libro.disponible = false;
      return true;
    }
    devolver(titulo) {
      const libro = this.libros.find((l) => l.titulo === titulo);
      if (!libro || libro.disponible) return false;
      libro.disponible = true;
      return true;
    }
    titulosDisponibles() {
      return this.libros.filter((l) => l.disponible).map((l) => l.titulo);
    }
  }
  const b = new Biblioteca();
  b.agregar(new Libro("Emma", "Austen"));
  b.agregar(new Libro("Persuasión", "Austen"));
  b.agregar(new Libro("Ubik", "Dick"));
  console.log("C9:", b.buscarPorAutor("Austen").length); // 2
  console.log("C9:", b.prestar("Emma"), b.prestar("Emma"), b.prestar("Nada")); // true false false
  console.log("C9:", b.titulosDisponibles().join()); // Persuasión,Ubik
  console.log("C9:", b.devolver("Emma"), b.devolver("Emma")); // true false
}

/* ---------------------------------------------------------------------------
   10. POLIMORFISMO: EMPLEADOS
   Empleado(nombre, salario) con calcularSalario().
   Gerente (hereda de Empleado) con bonus; su calcularSalario() devuelve el
   del padre + bonus. Array mezclado: muestra cada salario con forEach y
   calcula el total de la nómina.
--------------------------------------------------------------------------- */
{
  class Empleado {
    constructor(nombre, salario) {
      this.nombre = nombre;
      this.salario = salario;
    }
    calcularSalario() {
      return this.salario;
    }
  }
  class Gerente extends Empleado {
    constructor(nombre, salario, bonus) {
      super(nombre, salario);
      this.bonus = bonus;
    }
    calcularSalario() {
      return super.calcularSalario() + this.bonus;
    }
  }
  const plantilla = [new Empleado("Luis", 1500), new Gerente("Marta", 2500, 800), new Empleado("Eva", 1700)];
  let nomina = 0;
  plantilla.forEach((e) => {
    console.log(`C10: ${e.nombre}: ${e.calcularSalario()} €`);
    nomina += e.calcularSalario();
  });
  console.log("C10: nómina total:", nomina); // 6500
}

/* ---------------------------------------------------------------------------
   11. FORMAS GEOMÉTRICAS
   Forma(nombre) con area() que devuelve 0 y describir() que devuelve
   "<nombre>: área <area()>". Circulo(radio) y Cuadrado(lado) heredan y
   sobrescriben area(). Recorre un array con una forma de cada tipo.
   (describir() usa this.area(), que llamará a la versión de cada hija.)
--------------------------------------------------------------------------- */
{
  class Forma {
    constructor(nombre) {
      this.nombre = nombre;
    }
    area() {
      return 0;
    }
    describir() {
      return `${this.nombre}: área ${this.area().toFixed(2)}`;
    }
  }
  class Circulo extends Forma {
    constructor(radio) {
      super("Círculo");
      this.radio = radio;
    }
    area() {
      return Math.PI * this.radio ** 2;
    }
  }
  class Cuadrado extends Forma {
    constructor(lado) {
      super("Cuadrado");
      this.lado = lado;
    }
    area() {
      return this.lado * this.lado;
    }
  }
  [new Forma("Genérica"), new Circulo(2), new Cuadrado(3)].forEach((f) => console.log("C11:", f.describir()));
  // Genérica: área 0.00 | Círculo: área 12.57 | Cuadrado: área 9.00
}

/* ---------------------------------------------------------------------------
   12. PILA (STACK)
   Clase Pila con un array interno y los métodos apilar(x), desapilar()
   (devuelve el elemento o undefined si está vacía), cima() (último sin
   quitarlo), estaVacia() y tamanio().
--------------------------------------------------------------------------- */
{
  class Pila {
    constructor() {
      this.elementos = [];
    }
    apilar(x) {
      this.elementos.push(x);
    }
    desapilar() {
      return this.elementos.pop();
    }
    cima() {
      return this.elementos[this.elementos.length - 1];
    }
    estaVacia() {
      return this.elementos.length === 0;
    }
    tamanio() {
      return this.elementos.length;
    }
  }
  const p = new Pila();
  p.apilar(1);
  p.apilar(2);
  p.apilar(3);
  console.log("C12:", p.cima(), p.desapilar(), p.tamanio(), p.estaVacia()); // 3 3 2 false
}

/* ---------------------------------------------------------------------------
   13. AGENDA DE CONTACTOS
   Contacto(nombre, telefono) y Agenda con un array contactos y los métodos:
   agregar(contacto) (false si el nombre ya existe), buscar(nombre),
   eliminar(nombre) (usa findIndex + splice; true/false) y listar() que
   devuelva los nombres.
--------------------------------------------------------------------------- */
{
  class Contacto {
    constructor(nombre, telefono) {
      this.nombre = nombre;
      this.telefono = telefono;
    }
  }
  class Agenda {
    constructor() {
      this.contactos = [];
    }
    agregar(contacto) {
      if (this.buscar(contacto.nombre)) return false;
      this.contactos.push(contacto);
      return true;
    }
    buscar(nombre) {
      return this.contactos.find((c) => c.nombre === nombre);
    }
    eliminar(nombre) {
      const pos = this.contactos.findIndex((c) => c.nombre === nombre);
      if (pos === -1) return false;
      this.contactos.splice(pos, 1);
      return true;
    }
    listar() {
      return this.contactos.map((c) => c.nombre);
    }
  }
  const ag = new Agenda();
  console.log("C13:", ag.agregar(new Contacto("Ana", "600")), ag.agregar(new Contacto("Ana", "611"))); // true false
  ag.agregar(new Contacto("Luis", "622"));
  console.log("C13:", ag.buscar("Luis").telefono, ag.buscar("Nadie")); // 622 undefined
  console.log("C13:", ag.eliminar("Ana"), ag.eliminar("Ana"), ag.listar().join()); // true false Luis
}

/* ---------------------------------------------------------------------------
   14. MINI TIENDA
   Producto(nombre, precio, stock) y Carrito con un array items de
   { producto, unidades } y los métodos:
   agregar(producto, unidades) (false si no hay stock suficiente, contando
   lo que ya hay en el carrito), total() y mostrar().
--------------------------------------------------------------------------- */
{
  class Producto {
    constructor(nombre, precio, stock) {
      this.nombre = nombre;
      this.precio = precio;
      this.stock = stock;
    }
  }
  class Carrito {
    constructor() {
      this.items = [];
    }
    agregar(producto, unidades) {
      const existente = this.items.find((i) => i.producto === producto);
      const yaEnCarrito = existente ? existente.unidades : 0;
      if (yaEnCarrito + unidades > producto.stock) return false;
      if (existente) existente.unidades += unidades;
      else this.items.push({ producto: producto, unidades: unidades });
      return true;
    }
    total() {
      let t = 0;
      this.items.forEach((i) => (t += i.producto.precio * i.unidades));
      return t;
    }
    mostrar() {
      this.items.forEach((i) =>
        console.log(`C14: ${i.producto.nombre} x${i.unidades} = ${i.producto.precio * i.unidades} €`)
      );
    }
  }
  const pan = new Producto("Pan", 2, 5);
  const leche = new Producto("Leche", 3, 10);
  const carrito = new Carrito();
  console.log("C14:", carrito.agregar(pan, 3)); // true
  console.log("C14:", carrito.agregar(pan, 3)); // false (solo hay 5)
  console.log("C14:", carrito.agregar(leche, 2)); // true
  carrito.mostrar();
  console.log("C14: total", carrito.total()); // 12
}
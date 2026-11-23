// ============================================
// CUESTIONES RA4
// ============================================

// --- 1. Orden de ejecución ---
console.log("A");
setTimeout(() => console.log("B"), 500);
console.log("C");
let id = setInterval(() => console.log("D"), 1000);
setTimeout(() => clearInterval(id), 3500);

// Salida:
// A
// C
// B
// D
// D
// D

// --- 2. Arrays de productos ---
let productos = [
  { nombre: "teclado", precio: 25, stock: 0 },
  { nombre: "ratón", precio: 12, stock: 8 },
  { nombre: "monitor", precio: 140, stock: 3 },
];

console.log(productos.filter((p) => p.stock > 0).map((p) => p.nombre)); // ["ratón", "monitor"]
console.log(productos.find((p) => p.precio > 100).nombre); // "monitor"
console.log(productos.findIndex((p) => p.precio > 200)); // -1
console.log(productos.map((p, i) => i + p.stock)); // [0, 9, 5]

// --- 3. Array notas ---
let notas = [7, "7", 5, 7];

console.log(notas.indexOf(7)); // 0
console.log(notas.indexOf(7, 1)); // 3
console.log(notas.includes("5")); // false
console.log(notas.concat([9, 10]).join("-")); // "7-7-5-7-9-10"

// --- 4. Objeto libro ---
let libro = { titulo: "Dune", "año edición": 1965 };
let copia = libro;
copia.paginas = 412;
delete libro.titulo;
let clave = "paginas";

console.log(libro[clave]); // 412
console.log(libro.clave); // undefined
console.log("titulo" in copia); // false
console.log(Object.keys(libro)); // ["año edición", "paginas"]

// --- EJERCICIO 5 ---
class Empleado {
  constructor(nombre, sueldo) {
    this.nombre = nombre;
    this.sueldo = sueldo;
  }
  anual() {
    return this.sueldo * 14;
  }
  info() {
    return this.nombre + ": " + this.anual();
  }
}

class Becario extends Empleado {
  constructor(nombre) {
    super(nombre, 600);
  }
  anual() {
    return this.sueldo * 12;
  }
}

let e = new Empleado("Ana", 2000);
let b = new Becario("Luis");
console.log(e.info()); // Ana: 28000
console.log(b.info()); // Luis: 7200

// --- EJERCICIO 6 - Función Contador ---
function Contador(inicio) {
  this.valor = inicio;
  this.incrementa = function (n = 1) {
    this.valor += n;
    return this.valor;
  };
}

let c1 = new Contador(5);
let c2 = c1;
c1.incrementa();
console.log(c2.incrementa(3)); // 9
let c3 = new Contador(5);
console.log(c1 == c3, c3.valor); // false 5

// --- EJERCICIO 7 - Funciones área y cubo ---
const area = (b, h = 2) => (b * h) / 2;
let cubo = (n) => n ** 3;

console.log(area(6)); // 6
console.log(area(6, 4)); // 12
console.log(area(3, 5)); // 7.5
console.log(cubo(2)); // 8

// --- EJERCICIO 8 - Métodos de array ---
let dias = ["lun", "mar", "mié", "jue", "vie"];
let a = dias.slice(1, 3);
dias.splice(3, 1, "JUE", "VIE");

console.log(a); // ["mar", "mié"]
console.log(dias.indexOf("vie")); // -1
console.log(dias); // ["lun", "mar", "mié", "JUE", "VIE", "vie"]
console.log(dias.length); // 6

// ============================================
// EJERCICIO 1 - Reservas
// ============================================
let reservas = [
  { pista: "pádel 1", socio: "Lucía", hora: 17, duracion: 1.5 },
  { pista: "tenis", socio: "Marcos", hora: 16, duracion: 1 },
  { pista: "pádel 2", socio: "Lucía", hora: 19, duracion: 1 },
  { pista: "pádel 1", socio: "Iván", hora: 9, duracion: 2 },
  { pista: "tenis", socio: "Sara", hora: 18, duracion: 1.5 },
];

// Función reservasTarde
function reservasTarde(lista) {
  return lista.filter((r) => r.hora >= 15).map((r) => `${r.pista} (${r.hora}:00)`);
}

console.log(reservasTarde(reservas));
// ["pádel 1 (17:00)", "tenis (16:00)", "pádel 2 (19:00)", "tenis (18:00)"]

// Función cancelar
function cancelar(lista, socio, hora) {
  const indice = lista.findIndex((r) => r.socio === socio && r.hora === hora);
  if (indice === -1) return false;
  lista.splice(indice, 1);
  return true;
}

// ============================================
// EJERCICIO 2 - Alumno y notas
// ============================================
let alumno = {
  nombre: "Lucía",
  notas: { DWEC: 7, DWES: 4, DIW: 8, DAW: 3 },
};

// 1. Añadir EIE con un 6 y cambiar DWES a 5
alumno.notas.EIE = 6;
alumno.notas.DWES = 5;

// 2. Función informe
function informe(al) {
  const suspensos = Object.keys(al.notas).filter((mod) => al.notas[mod] < 5);

  if (suspensos.length === 0) {
    return `${al.nombre}. Suspensos: ninguno`;
  }
  return `${al.nombre}. Suspensos: ${suspensos.join(", ")}`;
}

// 3. Función copiaAprobados
function copiaAprobados(al) {
  const notasAprobadas = {};
  for (const mod in al.notas) {
    if (al.notas[mod] >= 5) {
      notasAprobadas[mod] = al.notas[mod];
    }
  }
  return {
    nombre: al.nombre,
    notas: notasAprobadas,
  };
}

// ============================================
// EJERCICIO 3 - Clases Sensor y SensorTemperatura
// ============================================
class Sensor {
  constructor(id, ubicacion) {
    this.id = id;
    this.ubicacion = ubicacion;
    this.lecturas = [];
  }

  registrar(valor) {
    this.lecturas.push(valor);
  }

  ultima() {
    if (this.lecturas.length === 0) return null;
    return this.lecturas[this.lecturas.length - 1];
  }
}

class SensorTemperatura extends Sensor {
  constructor(id, ubicacion, maxima) {
    super(id, ubicacion);
    this.maxima = maxima;
  }

  registrar(valor) {
    super.registrar(valor);
    if (valor > this.maxima) {
      console.log(`Alerta ${this.id}: ${valor} ºC en ${this.ubicacion}`);
    }
  }
}

// Código de prueba
const sensor = new SensorTemperatura("T1", "aula 12", 28);
sensor.registrar(22);
sensor.registrar(29.5); // Alerta T1: 29.5 ºC en aula 12
sensor.registrar(25);
console.log(sensor.ultima()); // 25

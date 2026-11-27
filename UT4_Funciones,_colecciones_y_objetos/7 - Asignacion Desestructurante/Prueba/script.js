/**
 * ============================================================
 * EJERCICIOS RESUELTOS
 * Desestructuración (asignación múltiple) + Spread + Rest
 * ============================================================
 */

// ------------------------------------------------------------
// 1. Desestructuración de arrays (simple)
// ------------------------------------------------------------
const colores = ["rojo", "verde", "azul", "amarillo"];
const [primero, segundo, ...resto] = colores;

console.log("--- Ejercicio 1 ---");
console.log(primero); // "rojo"
console.log(segundo); // "verde"
console.log(resto); // ["azul", "amarillo"]

// ------------------------------------------------------------
// 2. Desestructuración de objetos con renombrado
// ------------------------------------------------------------
const persona = {
  nombre: "Laura",
  edad: 28,
  ciudad: "Madrid",
};

const { nombre: name, edad: age } = persona;

console.log("\n--- Ejercicio 2 ---");
console.log(name); // "Laura"
console.log(age); // 28

// ------------------------------------------------------------
// 3. Valores por defecto
// ------------------------------------------------------------
const config = {
  tema: "oscuro",
  idioma: "es",
};

const { tema, idioma, notificaciones = true } = config;

console.log("\n--- Ejercicio 3 ---");
console.log(tema); // "oscuro"
console.log(idioma); // "es"
console.log(notificaciones); // true

// ------------------------------------------------------------
// 4. Intercambio de variables con desestructuración
// ------------------------------------------------------------
let a = 10;
let b = 20;

[a, b] = [b, a];

console.log("\n--- Ejercicio 4 ---");
console.log(a); // 20
console.log(b); // 10

// ------------------------------------------------------------
// 5. Spread en arrays
// ------------------------------------------------------------
const arrA = [1, 2, 3];
const arrB = [4, 5];
const arrC = [...arrA, ...arrB];

console.log("\n--- Ejercicio 5 ---");
console.log(arrC); // [1, 2, 3, 4, 5]

// ------------------------------------------------------------
// 6. Spread en objetos
// ------------------------------------------------------------
const usuario = { nombre: "Ana", edad: 25 };
const extras = { ciudad: "Barcelona", activo: true };
const usuarioCompleto = { ...usuario, ...extras };

console.log("\n--- Ejercicio 6 ---");
console.log(usuarioCompleto);
// { nombre: "Ana", edad: 25, ciudad: "Barcelona", activo: true }

// ------------------------------------------------------------
// 7. Rest en parámetros de función
// ------------------------------------------------------------
function sumaTodo(...numeros) {
  return numeros.reduce((acum, num) => acum + num, 0);
}

console.log("\n--- Ejercicio 7 ---");
console.log(sumaTodo(1, 2, 3, 4, 5)); // 15
console.log(sumaTodo(10, 20)); // 30

// ------------------------------------------------------------
// 8. Rest en desestructuración de arrays
// ------------------------------------------------------------
const numeros = [10, 20, 30, 40, 50];
const [primeroNum, ...restantes] = numeros;

console.log("\n--- Ejercicio 8 ---");
console.log(primeroNum); // 10
console.log(restantes); // [20, 30, 40, 50]

// ------------------------------------------------------------
// 9. Desestructuración anidada
// ------------------------------------------------------------
const empresa = {
  nombre: "TechCorp",
  ubicacion: {
    ciudad: "Valencia",
    pais: "España",
  },
  empleados: 150,
};

const {
  nombre: nombreEmpresa,
  ubicacion: { ciudad, pais },
} = empresa;

console.log("\n--- Ejercicio 9 ---");
console.log(nombreEmpresa); // "TechCorp"
console.log(ciudad); // "Valencia"
console.log(pais); // "España"

// ------------------------------------------------------------
// 10. Parámetros de función con desestructuración
// ------------------------------------------------------------
function mostrarLibro({ titulo, autor, año = "Desconocido" }) {
  console.log(`"${titulo}" de ${autor} (${año})`);
}

console.log("\n--- Ejercicio 10 ---");
mostrarLibro({ titulo: "Don Quijote", autor: "Cervantes", año: 1605 });
// "Don Quijote" de Cervantes (1605)

mostrarLibro({ titulo: "Lazarillo de Tormes", autor: "Anónimo" });
// "Lazarillo de Tormes" de Anónimo (Desconocido)

// ------------------------------------------------------------
// 11. Copiar y modificar objetos de forma segura (spread)
// ------------------------------------------------------------
const pedido = {
  id: 101,
  cliente: "Carlos",
  productos: ["libro", "bolígrafo"],
};

const pedidoCopia = { ...pedido, id: 102 };

console.log("\n--- Ejercicio 11 ---");
console.log(pedido); // id sigue siendo 101
console.log(pedidoCopia); // id es 102

// ------------------------------------------------------------
// 12. Combinar varios objetos con spread
// ------------------------------------------------------------
const defaults = { tema: "claro", idioma: "es", notificaciones: true };
const usuario1 = { tema: "oscuro" };
const usuario2 = { idioma: "en", notificaciones: false };

const configFinal = { ...defaults, ...usuario1, ...usuario2 };

console.log("\n--- Ejercicio 12 ---");
console.log(configFinal);
// { tema: "oscuro", idioma: "en", notificaciones: false }

// ------------------------------------------------------------
// 13. Función que devuelve máximo y mínimo (rest + spread)
// ------------------------------------------------------------
function extremos(...valores) {
  return {
    max: Math.max(...valores),
    min: Math.min(...valores),
  };
}

console.log("\n--- Ejercicio 13 ---");
console.log(extremos(3, 1, 8, 5, 2)); // { max: 8, min: 1 }
console.log(extremos(10, -5, 0)); // { max: 10, min: -5 }

// ------------------------------------------------------------
// 14. Top salario con desestructuración
// ------------------------------------------------------------
function mejorPagado(salarios) {
  let maxSalary = 0;
  let maxName = null;

  for (const [name, salary] of Object.entries(salarios)) {
    if (salary > maxSalary) {
      maxSalary = salary;
      maxName = name;
    }
  }

  return maxName;
}

const salarios = {
  Ana: 3200,
  Luis: 2800,
  Marta: 3500,
  Pedro: 3100,
};

console.log("\n--- Ejercicio 14 ---");
console.log(mejorPagado(salarios)); // "Marta"
console.log(mejorPagado({})); // null

// ------------------------------------------------------------
// 15. Desestructuración en un bucle for...of
// ------------------------------------------------------------
const productos = [
  { id: 1, nombre: "Teclado", precio: 45 },
  { id: 2, nombre: "Ratón", precio: 25 },
  { id: 3, nombre: "Monitor", precio: 180 },
];

console.log("\n--- Ejercicio 15 ---");
for (const { nombre, precio } of productos) {
  console.log(`${nombre}: ${precio}€`);
}
// Teclado: 45€
// Ratón: 25€
// Monitor: 180€

// ------------------------------------------------------------
// 16. Rest + desestructuración de objetos
// ------------------------------------------------------------
const coche = {
  marca: "Toyota",
  modelo: "Corolla",
  año: 2022,
  color: "blanco",
  km: 45000,
};

const { marca, modelo, ...restoCoche } = coche;

console.log("\n--- Ejercicio 16 ---");
console.log(marca); // "Toyota"
console.log(modelo); // "Corolla"
console.log(restoCoche); // { año: 2022, color: "blanco", km: 45000 }

// ------------------------------------------------------------
// 17. Función que acepta opciones con valores por defecto
// ------------------------------------------------------------
function crearUsuario({ nombre, edad = 18, rol = "usuario" }) {
  return { nombre, edad, rol };
}

console.log("\n--- Ejercicio 17 ---");
console.log(crearUsuario({ nombre: "Elena" }));
// { nombre: "Elena", edad: 18, rol: "usuario" }

console.log(crearUsuario({ nombre: "Carlos", edad: 30, rol: "admin" }));
// { nombre: "Carlos", edad: 30, rol: "admin" }

// ------------------------------------------------------------
// 18. Combinar arrays y objetos de forma avanzada
// ------------------------------------------------------------
const base = [1, 2, 3];
const extra = [4, 5];
const obj = { a: 10, b: 20 };

const resultado = [...base, 99, ...extra, ...Object.entries(obj)];

console.log("\n--- Ejercicio 18 ---");
console.log(resultado);
// [1, 2, 3, 99, 4, 5, ["a", 10], ["b", 20]]

// ------------------------------------------------------------
// 19. Deep clone simple con spread (limitado)
// ------------------------------------------------------------
const original = {
  nombre: "Proyecto",
  tareas: [
    { id: 1, titulo: "Diseño" },
    { id: 2, titulo: "Código" },
  ],
};

const copia = {
  ...original,
  tareas: original.tareas.map((tarea) => ({ ...tarea })),
};

// Modificamos la copia
copia.tareas[0].titulo = "Diseño UX";

console.log("\n--- Ejercicio 19 ---");
console.log("Original:", original.tareas[0].titulo); // "Diseño" (no cambió)
console.log("Copia:   ", copia.tareas[0].titulo); // "Diseño UX"

// Nota: Si hubiéramos hecho solo { ...original }, la modificación
// de tareas[0] habría afectado también al original (copia superficial).

// ------------------------------------------------------------
// 20. Función genérica de “omitir” propiedades
// ------------------------------------------------------------
function omitir(obj, ...claves) {
  const copia = { ...obj };
  for (const clave of claves) {
    delete copia[clave];
  }
  return copia;
}

// Versión más elegante con desestructuración + rest (si conocemos las claves):
function omitirElegante({ password, email, ...resto }) {
  return resto;
}

const user = {
  name: "John",
  age: 30,
  password: "1234",
  email: "john@mail.com",
};

console.log("\n--- Ejercicio 20 ---");
console.log(omitir(user, "password", "email"));
// { name: "John", age: 30 }

console.log(omitirElegante(user));
// { name: "John", age: 30 }

// ------------------------------------------------------------
// 21. Transformar array de objetos
// ------------------------------------------------------------
const personas = [
  { nombre: "Ana", edad: 22 },
  { nombre: "Luis", edad: 35 },
  { nombre: "Marta", edad: 28 },
];

const personasConMayoria = personas.map(({ nombre, edad, ...resto }) => ({
  nombre,
  edad,
  ...resto,
  mayorDeEdad: edad >= 18,
}));

console.log("\n--- Ejercicio 21 ---");
console.log(personasConMayoria);
/*
[
  { nombre: "Ana", edad: 22, mayorDeEdad: true },
  { nombre: "Luis", edad: 35, mayorDeEdad: true },
  { nombre: "Marta", edad: 28, mayorDeEdad: true }
]
*/

// ------------------------------------------------------------
// 22. Función que une varios objetos
// ------------------------------------------------------------
function unirObjetos(...objetos) {
  return objetos.reduce((resultado, obj) => ({ ...resultado, ...obj }), {});
}

console.log("\n--- Ejercicio 22 ---");
console.log(unirObjetos({ a: 1, b: 2 }, { b: 3, c: 4 }, { d: 5, a: 10 }));
// { a: 10, b: 3, c: 4, d: 5 }

console.log("\n========== FIN DE LOS EJERCICIOS ==========");

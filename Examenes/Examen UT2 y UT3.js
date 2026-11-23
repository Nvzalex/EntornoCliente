// ============================================
// CUESTIONES RA2 / RA3
// ============================================

// --- 1. Operador ternario ---
resultado = numero >= 0 ? "Positivo" : "Negativo";
edad >= 18 ? alert("Puedes entrar") : alert("No puedes entrar");

// --- 2. ¿Qué alert se ejecutan? ---
if (-1 || 0) alert("primero"); // SÍ
if (-1 && 0) alert("segundo"); // NO
if (null || (-1 && 1)) alert("tercero"); // SÍ

// --- 3. location ---
// location.origin   → "http://localhost:5500"
// location.protocol → "http:"
// location.search   → "?alumno=7"
// location.port     → "5500"

// --- 4. Verdadero / Falso ---
// localStorage se borra al cerrar el navegador → false
// Dos pestañas comparten localStorage → true
// Cookies se envían al servidor, localStorage no → true
// sessionStorage se borra al cerrar el navegador → true

// --- 5. Fechas ---
let f1 = new Date(2027, 0, 0); // 31/diciembre/2026
let f2 = new Date(2026, 0, 31); // 31/enero/2026
f2.setMonth(1); // 3/marzo/2026

// --- 6. Template strings ---
let numAlumnos = 30;
console.log("Hola ${numAlumnos}"); // Hola ${numAlumnos}
console.log(`Hola ${numAlumnos}`); // Hola 30
console.log(`Hola ${"numAlumnos"}`); // Hola numAlumnos
console.log(`Hola ${30}`); // Hola 30

// --- 7. while ---
let i = 3;
while (i) {
  console.log(i--); // 3, 2, 1
}

// --- 8. Diferencia de fechas ---
const inicio = new Date(2026, 9, 1);
const fin = new Date(2026, 9, 15);
console.log((fin - inicio) / (1000 * 60 * 60 * 24)); // 14

// --- 9. Comparaciones ---
null == 0; // false
undefined == null; // true
"12" < "4"; // true

// --- 10. Math y conversiones ---
Math.floor(3.1); // 3
isNaN("30"); // false
parseInt("30€"); // 30
Number("30€"); // NaN

// --- 11. Métodos de string ---
let str = "Colonia";
str.slice(4); // "nia"
str.slice(0, 4); // "Colo"
str.indexOf("o"); // 1
str.charAt(3); // "o"

// --- 12. switch ---
let a = +prompt("a?");
switch (a) {
  case 0:
    alert(0);
    break;
  case 1:
    alert(1);
    break;
  case 2:
  case 3:
    alert("2,3");
    break;
}

// --- 13. alert con || ---
let nombre;
let usuario = "SuperCoder";
alert(nombre); // vacío (undefined)
alert(nombre || usuario || "Anonimo"); // "SuperCoder"

// --- 14. Literales ---
// 0x17   → 23
// 10e3   → 10000
// 0b1010 → 10
// 3_000  → 3000

// --- 15. Número aleatorio 1-6 ---
Math.floor(Math.random() * 6) + 1;

// --- 16. Operaciones ---
3 + "3"; // "33"
3 - "3"; // 0
3 * "3px"; // NaN
"3" * "3"; // 9

// ============================================
// EJERCICIO 4 - Fechas e importes
// ============================================

let fechaPedido = "04/12/2026";
let diasEntrega = 8;
let importe = "120,50 €";

// Crear objeto Date
let partes = fechaPedido.split("/");
let fecha = new Date(partes[2], partes[1] - 1, partes[0]);

// Sumar días
fecha.setDate(fecha.getDate() + diasEntrega);

// Si cae en sábado o domingo → pasar al lunes
let diaSemana = fecha.getDay();
let sePasoAlLunes = false;

if (diaSemana === 6) {
  // sábado
  fecha.setDate(fecha.getDate() + 2);
  sePasoAlLunes = true;
} else if (diaSemana === 0) {
  // domingo
  fecha.setDate(fecha.getDate() + 1);
  sePasoAlLunes = true;
}

// Mostrar fecha
const dias = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

console.log(`Entrega prevista: ${dias[fecha.getDay()]}, ${fecha.getDate()} de ${meses[fecha.getMonth()]} de ${fecha.getFullYear()}`);

// Aplicar descuento si se pasó al lunes
let importeNum = parseFloat(importe.replace(",", ".").replace(" €", ""));
if (sePasoAlLunes) {
  importeNum *= 0.9;
}

console.log(`Importe: ${importeNum.toFixed(2).replace(".", ",")} €`);

// ============================================
// EJERCICIO 1 RA2 - Notas de alumnos
// ============================================
let insuficientes = 0,
  suficientes = 0,
  bienes = 0,
  notables = 0,
  sobresalientes = 0;
let sumaNotas = 0;
let totalNotas = 0;

while (true) {
  let nombre = prompt("Nombre del alumno (Cancel o vacío para terminar):");
  if (nombre === null || nombre.trim() === "") break;

  while (true) {
    let modulo = prompt("Módulo (Cancel o vacío para pasar al siguiente alumno):");
    if (modulo === null || modulo.trim() === "") break;

    let nota;
    do {
      nota = prompt("Nota (entero entre 1 y 10):");
      if (nota === null) continue;
      nota = Number(nota);
    } while (!Number.isInteger(nota) || nota < 1 || nota > 10);

    console.log(`${nombre} - ${modulo}: ${nota}`);

    if (nota < 5) insuficientes++;
    else if (nota === 5) suficientes++;
    else if (nota === 6) bienes++;
    else if (nota === 7 || nota === 8) notables++;
    else sobresalientes++;

    sumaNotas += nota;
    totalNotas++;
  }
}

console.log("Insuficientes:", insuficientes);
console.log("Suficientes:", suficientes);
console.log("Bien:", bienes);
console.log("Notable:", notables);
console.log("Sobresaliente:", sobresalientes);

if (totalNotas === 0) {
  console.log("No hay ninguna nota");
} else {
  console.log("Nota media:", (sumaNotas / totalNotas).toFixed(2));
}

// ============================================
// EJERCICIO 2 RA3 - Validar y ocultar correo
// ============================================
let correo = " marta.Gil91@educa.jcyl.es ";

// Limpiar
correo = correo.trim().toLowerCase();

// Validar
let partesCorreo = correo.split("@");
if (partesCorreo.length !== 2 || partesCorreo[0] === "" || !partesCorreo[1].includes(".")) {
  console.log("Correo no válido");
} else {
  let usuario = partesCorreo[0];
  let dominio = partesCorreo[1];

  // Ocultar usuario
  let usuarioOculto = usuario[0] + "*".repeat(usuario.length - 2) + usuario[usuario.length - 1];

  console.log(usuarioOculto + "@" + dominio);
  console.log("Extensión: " + dominio.split(".").pop());
}

// ============================================
// EJERCICIO 3 RA3 - Última visita (localStorage)
// ============================================
let ultima = localStorage.getItem("ultimaVisita");

if (ultima === null) {
  console.log("Es tu primera visita");
} else {
  let diferencia = Date.now() - Number(ultima);
  let horas = Math.floor(diferencia / (1000 * 60 * 60));
  let minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  console.log(`Tu última visita fue hace ${horas} h ${minutos} min`);
}

// Guardar la visita actual
localStorage.setItem("ultimaVisita", Date.now());

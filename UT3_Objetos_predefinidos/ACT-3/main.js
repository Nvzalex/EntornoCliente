// =====================================================================
// UT03 - Actividad evaluable: Mi ficha personal
// Alumno/a: ...........................................
// Para mostrar resultados en la página usa mostrar("<p>texto</p>").
// =====================================================================

// Objeto con los datos de la ficha (ver apartado 0 del enunciado).
// Se completa en los apartados 1, 2 y 3 y lo usan los apartados 4 y 5.
// Se declara con var (no con let ni const) para que la ventana hija
// pueda acceder a ella con window.opener.ficha.
var ficha = {};

// 1. STRING ------------------------------------------------------------
function analizarNombre() {
  mostrar("<h2>1. Nombre</h2>");

  let nombreBruto;
  do {
    nombreBruto = prompt("Introduce tu nombre completo:");
  } while (nombreBruto === null || nombreBruto.trim() === "");

  const palabras = nombreBruto
    .trim()
    .toLowerCase()
    .split(/\s+/)
    .filter((p) => p !== "");

  ficha.nombre = palabras.map((p) => p.charAt(0).toUpperCase() + p.slice(1)).join(" ");

  mostrar("<p><h3>Nombre normalizado:</h3> " + ficha.nombre + "</p>");

  // Iniciales
  const iniciales = palabras.map((p) => p.charAt(0).toUpperCase()).join("");
  mostrar("<p><h3>Iniciales:</h3>" + iniciales + "</p>");

  // Número de letras (sin espacios)
  const numLetras = ficha.nombre.replace(/\s/g, "").length;
  mostrar("<p><h3>Número de letras (sin espacios):</h3>" + numLetras + "</p>");

  // Nombre al revés
  const alReves = ficha.nombre.split("").reverse().join("");
  mostrar("<p><h3>Nombre al revés:</h3>" + alReves + "</p>");

  //DNI
  let dni;
  do {
    dni = prompt("Introduce tu DNI (solo números, sin letra):");
  } while (dni === null || dni.trim() === "" || !/^\d+$/.test(dni.trim()));

  dni = dni.trim();
  const quitarTildes = (texto) => {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };
  const primerApellido = palabras[palabras.length - 2] || "";
  const primerNombre = palabras[0] || "";
  const parteApellido = quitarTildes(primerApellido).toLowerCase().slice(0, 4).padEnd(4, "x");
  const inicialNombre = quitarTildes(primerNombre).toLowerCase().charAt(0);
  const ultimosDigitos = dni.slice(-3);
  ficha.usuario = parteApellido + inicialNombre + ultimosDigitos;

  mostrar("<p><h2>Nombre de usuario:</h2>" + ficha.usuario + "</p>");
}
// 2. NUMBER Y MATH -----------------------------------------------------
function analizarNumeros() {
  mostrar("<h2>2. Números</h2>");
  ficha.textoNacimiento = prompt("Fecha de nacimiento");

  const fecha = ficha.textoNacimiento.split("/");
  const dia = Number(fecha[0]);
  const mes = Number(fecha[1]);
  const año = Number(fecha[2]);

  mostrar("<p><h2>Fecha en binario:</h2>" + dia.toString(2) + "/" + mes.toString(2) + "/" + año.toString(2) + "</p>");
  mostrar("<p><h2>Fecha en octal:</h2>" + dia.toString(8) + "/" + mes.toString(8) + "/" + año.toString(8) + "</p>");
  mostrar("<p><h2>Fecha en hexadecimal:</h2>" + dia.toString(16) + "/" + mes.toString(16) + "/" + año.toString(16) + "</p>");
}

// 3. DATE --------------------------------------------------------------
function analizarFechas() {
  mostrar("<h2>3. Fechas</h2>");
  console.log("textoNacimiento:", ficha.textoNacimiento);
  console.log("tipo:", typeof ficha.textoNacimiento, Array.isArray(ficha.textoNacimiento));

  const fecha = ficha.textoNacimiento.split("/");
  const dia = Number(fecha[0]);
  const mes = Number(fecha[1]);
  const anno = Number(fecha[2]);
  ficha.nacimiento = new Date(anno, mes - 1, dia);
  let hoy = new Date();
  mostrar("<p>" + ficha.nacimiento + "</p>");
  mostrar("<p>" + hoy - ficha.nacimiento + "</p>");
}

// 4. VENTANAS ----------------------------------------------------------
let ventanaHija = null;

function abrirVentana() {
  mostrar("<h2>4. Ventanas</h2>");
  ventanaHija = window.open("hija.html", "hija", "width=300" + ficha.nacimiento.dia + "*10", "height=400");
}

// La ventana hija llama a esta función con window.opener.recibirMensaje(texto)
function recibirMensaje(texto) {
  // Tu código aquí
}

// 5. ALMACENAMIENTO ----------------------------------------------------
function guardarFicha() {
  mostrar("<h2>5. Guardar ficha</h2>");
  // Tu código aquí
}

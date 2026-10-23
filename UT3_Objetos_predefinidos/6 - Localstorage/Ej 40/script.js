/**
 * 40. Crea una función guardarAlumno(alumno) que guarde en
 * localStorage un objeto con los datos de un alumno, por ejemplo
 * { nombre: "Ana", edad: 19, aficiones: ["cine", "música"] }, y
 * una función leerAlumno() que lo recupere y devuelva un objeto con
 * esos datos (o null si no hay datos). Utiliza JSON.stringify y JSON.parse.
 *
 * Comprueba que leerAlumno().aficiones es un array (con length).
 * Después, prueba a guardar el objeto sin JSON.stringify
 * y observa qué se almacena realmente.
 */
function guardarAlumno(alumno) {
  localStorage.setItem("alumno", JSON.stringify(alumno));
}

function leerAlumno() {
  const datos = localStorage.getItem("alumno");
  if (datos === null) {
    return null;
  }
  return JSON.parse(datos);
}

guardarAlumno({ nombre: "Ana", edad: 19, aficiones: ["cine", "música"] });
console.log(leerAlumno());
console.log(Array.isArray(leerAlumno().aficiones));
console.log(leerAlumno().aficiones.length);

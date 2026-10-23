/**
 * 43. (Ampliación) Crea una función crearCookie(nombre, valor, segundos)
 * que cree una cookie (con path=/) que caduque pasados los segundos indicados.
 * Si no se indican los segundos, será una cookie de sesión.
 * El valor se debe codificar con encodeURIComponent.
 *
 * Crea una función leerCookie(nombre) que devuelva el valor de la cookie
 * (decodificado con decodeURIComponent) o null si no existe. Utiliza
 * métodos de tipo String sobre document.cookie.
 *
 * crearCookie("usuario", "Ana López", 3600);
 * leerCookie("usuario")   // "Ana López"
 * leerCookie("otra")      // null
 *
 * Comprueba en la pestaña Application que la cookie se ha creado con la caducidad esperada.
 */
function crearCookie(nombre, valor, segundos) {}
console.log(crearCookie("usuario", "Ana López", 3600));

function leerCookie(nombre) {}
console.log(leerCookie("usuario"));
console.log(leerCookie("otra"));

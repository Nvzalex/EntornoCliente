/**
 * 8. Crea una función extraeDatos ( dir ) donde dir
 * es una variable que contiene una cadena con el siguiente
 * formato: usuario@dominio:puerto (ej: admin@servidor.com:8080).
 * Escribe un script que muestre por consola el usuario,
 * el dominio y el puerto. Ej en ejemplo anterior mostraría:
 *
 * Usuario: admin
 * Dominio: servidor.com
 * Puerto: 8080
 *
 * Importante: debes utilizar métodos de tipo String. No hay
 * que comprobar el formato de dir, suponemos que es correcto.
 */
function extraeDatos(dir) {
  let user = dir.split("@");

  let usuario = user[0];
  let dominio = user[1].split(":")[0];
  let puerto = dir.slice(-4);

  return {
    usuario,
    dominio,
    puerto
  };
}

console.log(extraeDatos("admin@servidor.com:8080"));
console.log(extraeDatos("user@test.es:2030"));

/**
 * 14. Tienes un array de objetos usuarios, cada uno tiene nombre, apellido e id.
 * Escribe el código para crear otro array a partir de este, de objetos con id y nombreCompleto, donde nombreCompleto es generado a partir de nombre y apellido.
 * Ejemplo:
 * let john = {nombre: "John", apellido: "Smith", id: 1};
 * let pete = {nombre: "Pete", apellido: "Hunt", id: 2};
 * let mary = {nombre: "Mary", apellido: "Key", id: 3};
 *
 * let usuarios = [john, pete, mary];
 *
 * let usuariosMapeados =
 * //... tu código ...
 * //
 * //usuariosMapeados= [
 * //  {nombreCompleto: "John Smith", id: 1 },
 * //  {nombreCompleto: "Pete Hunt", id: 2 },
 * //  {nombreCompleto: "Mary Key", id: 3 }
 * //]
 *
 * alert(usuariosMapeados[0].id); // 1
 * alert(usuariosMapeados[0].nombreCompleto); // John Smith
 *
 * Para hacerlo, se puede mapear un array de objetos a otro.
 * Si se utilizan funciones flecha (=>), hay un pequeño truco.
 */

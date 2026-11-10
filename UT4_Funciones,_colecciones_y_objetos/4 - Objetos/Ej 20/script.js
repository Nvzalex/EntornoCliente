/**
 * 20. Tenemos un objeto que almacena los salarios de nuestro equipo de trabajo:
 * let salaries = {
 *   Juan: 100,
 *   Pedro: 300,
 *   Marta: 250
 * }
 * Escribe el código para sumar todos los salarios y almacenar el resultado en
 * una variable sum. En el ejemplo de arriba nos debería dar 390.
 * Si salaries está vacío, el valor de sum será 0.
 */
let salaries = {
  Juan: 100,
  Pedro: 300,
  Marta: 250,
};
let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}
console.log(sum);

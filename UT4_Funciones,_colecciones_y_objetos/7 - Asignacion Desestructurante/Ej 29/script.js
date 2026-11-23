/*
 * 29. Hay un objeto salaries:
 * let salaries = {
 *   "John": 100,
 *   "Pete": 300,
 *   "Mary": 250
 * };
 * Crear la función topSalary(salaries) que devuelva el nombre de la persona mejor pagada.
 * •	Si salaries es vacío, debe devolver null.
 * •	Si hay varias personas con la mejor paga, devolver cualquiera de ellas.
 * PD: Utilice Object.entries y desestructuración para iterar sobre pares de claves/valores.
 */
function topSalary(salaries) {
  let maxSalary = 0;
  let maxName = null;

  for (const [name, salary] of Object.entries(salaries)) {
    if (salary > maxSalary) {
      maxSalary = salary;
      maxName = name;
    }
  }

  return maxName;
}

// Ejemplo de uso:
let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

console.log(topSalary(salaries)); // "Pete"
console.log(topSalary({})); // null

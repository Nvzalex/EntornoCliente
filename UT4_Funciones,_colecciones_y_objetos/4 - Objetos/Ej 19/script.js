/**
 * 19. Devuelve el valor true si el objeto no tiene propiedades, en caso contrario false.
 * Ej. de funcionamiento:
 * let schedule = {};
 * alert( isEmpty(schedule) ); // true
 * schedule["8:30"] = "Hora de levantarse";
 * alert( isEmpty(schedule) ); // false
 */
function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}
let schedule = {};
console.log(isEmpty(schedule));
schedule["8:30"] = "Hora de levantarse";
console.log(isEmpty(schedule));

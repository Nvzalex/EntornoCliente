/**
 * 18. Escribe una función ultimoDiaMes(anno, mes) que devuelva
 * el último día del mes dado. A veces es 30, 31 o incluso 28/29 para febrero.
 *
 * Parámetros:
 * anno– el año en formato de cuatro dígitos, por ejemplo 2012.
 * mes – el mes, de 0 a 11.
 *
 * Por ejemplo, ultimoDiaDelMes(2012, 1) = 29 (febrero, año bisiesto).
 */
function ultimoDiaMes(anno, mes) {
  return new Date(anno, mes + 1, 0).getDate();
}

console.log(ultimoDiaMes(2019, 6));
console.log(ultimoDiaMes(2012, 1));

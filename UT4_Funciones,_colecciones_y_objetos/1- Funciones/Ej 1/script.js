/**
 * 1. Escribe una función que recibe como parámetro una cadena
 * y una letra, y devuelve el número de veces que aparece la letra
 * en la cadena. Escríbela de tres modos: como función declarada,
 * como expresión de función, y como función flecha
 */
function numLetra1(cadena, letra) {
  let contador = 0;

  for (let i = 0; i < cadena.length; i++) {
    if (cadena[i] === letra) {
      contador++;
    }
  }

  return contador;
}

let numLetra2 = function (cadena, letra) {
  let contador = 0;

  for (let i = 0; i < cadena.length; i++) {
    if (cadena[i] === letra) {
      contador++;
    }
  }

  return contador;
};

let numLetra3 = (cadena, letra) => {
  let contador = 0;

  for (let i = 0; i < cadena.length; i++) {
    if (cadena[i] === letra) {
      contador++;
    }
  }

  return contador;
};

console.log(numLetra1("Ola k ase", "a"));
console.log(numLetra2("Ola k ase", "a"));
console.log((numLetra3) => "Ola k ase", "a");

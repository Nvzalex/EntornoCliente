/**
 * 10. Crea una función validarNIF_NIE( nif_nie) para comprobar
 * si un DNI o NIE es correcto, es decir, que contiene 8 dígitos
 * y una letra, y que la letra es correcta.
 * En el caso del DNI:
 * •	Se toma el nº del DNI
 * •	Se divide por 23.
 * •	Cogemos el resto (tiene que ser un número comprendido entre el 0 y el 22)
 * •	A cada número entre el 0 y el 22 le corresponde una
 *      letra de control de acuerdo con la tabla de asignación de abajo:
 *
 *  0	1	2	3	4	5	6	7	8	9	10	11	12	13	14	15	16	17	18	19	20	21	22
 *  T	R	W	A	G	M	Y	F	P	D	X	B	N	J	Z	S	Q	V	H	L	C	K	E
 *
 * Para el NIE: tienen una letra (X, Y, Z), 7 números y
 * una letra de control. Para el cálculo de la letra de control,
 * se sustituyen las letras iniciales (X, Y o Z) por los siguientes valores:
 * •	X → 0
 * •	Y → 1
 * •	Z → 2
 * y se hacen los mismos pasos que para el DNI.
 *
 * Ej. de documentos válidos:
 * •	DNI: 56221526G, 50127621H, 76069822J, 73126034H
 * •	NIF: 12313207L, 74997547K, 98319066T, 70454006S
 * •	NIE: Y6478436V, X5997109C, Y7492239A, X3412471F
 */

function validarNIF_NIE(nif_nie) {
  const letras = 'TRWAGMYFPDXBNJZSQVHLCKE';

  const valor = String(nif_nie).trim().toUpperCase().replace(/[\s-]/g, '');

  if (valor.length !== 9) {
    return { valido: false, tipo: null };
  }

  const letra = valor[valor.length - 1];
  let numeros = valor.slice(0, -1);

  // La letra final debe ser una letra
  if (letra < 'A' || letra > 'Z') {
    return { valido: false, tipo: null };
  }

  let tipo = 'DNI';

  // Si empieza por X, Y o Z es un NIE
  const inicial = numeros[0];
  if (inicial === 'X' || inicial === 'Y' || inicial === 'Z') {
    tipo = 'NIE';
    const equivalencia = { X: '0', Y: '1', Z: '2' };
    numeros = equivalencia[inicial] + numeros.slice(1);
  }

  // Todo lo que queda debe ser dígito
  for (const c of numeros) {
    if (c < '0' || c > '9') {
      return { valido: false, tipo: null };
    }
  }

  const letraCorrecta = letras[parseInt(numeros, 10) % 23];

  return { valido: letra === letraCorrecta};
}

// Ejemplos
console.log(validarNIF_NIE('12345678Z')); 
console.log(validarNIF_NIE('X1234567L')); 
console.log(validarNIF_NIE('12345678A')); 
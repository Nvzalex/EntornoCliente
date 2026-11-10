/**
 * 23.	Crea una función constructora Calculator.
 * Los objetos de tipo Calculator tienen tres métodos:
 * • read() pide dos valores y los almacena como propiedades de objeto, con nombres a y b.
 * • sum() devuelve la suma de los valores almacenados.
 * • mul() multiplica los valores almacenados y devuelve el resultado.
 *
 * Ejemplo:
 * let calculator = new Calculator();
 * calculator.read();
 *
 * alert( "Sum=" + calculator.sum() );
 * alert( "Mul=" + calculator.mul() );
 */
function Calculator() {
  this.read = function () {
    this.a = +prompt("Introduce el primer número:", 0);
    this.b = +prompt("Introduce el segundo número:", 0);
  };

  this.sum = function () {
    return this.a + this.b;
  };

  this.mul = function () {
    return this.a * this.b;
  };
}

let calculator = new Calculator();
calculator.read();
console.log("Sum=" + calculator.sum());
console.log("Mul=" + calculator.mul());

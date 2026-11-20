/**
 * 24. Crea una clase denominada Vehículo que tenga algunas características
 * como el color, marca, modelo y la velocidad máxima que puede alcanzar.
 *
 * También tendrá tres métodos además del constructor: comenzar que
 * mostrará el mensaje “Encender motor”, parar que mostrará “Apagar motor”
 * y distanciaMax que recibirá un parámetro con indicando el tiempo de
 * funcionamiento y calculará la distancia máxima que puede haber recorrido,
 * que será el resultado de multiplicar la velocidad máxima por el tiempo.
 */
export class Vehiculo {
  constructor(color, marca, modelo, velocidadMaxima) {
    this.color = color;
    this.marca = marca;
    this.modelo = modelo;
    this.velocidadMaxima = velocidadMaxima;
  }

  comenzar() {
    console.log("Encender motor");
  }

  parar() {
    console.log("Apagar motor");
  }

  distanciaMax(tiempo) {
    return this.velocidadMaxima * tiempo;
  }
}
const coche = new Vehiculo("Rojo", "Seat", "León", 200);

/*coche.comenzar();
coche.parar();
console.log(coche.distanciaMax(2));*/

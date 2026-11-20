/**
 * 27. Partimos de la clase Vehiculo que has creado en un ejercicio anterior.
 * Crea dos clases más, ambas deben heredar de Vehículo:
 * •	Coche: cuya velocidad máxima será 120 y sobrescribirá el
 * método parar para que muestre “Aparcar”.
 * •	Avión: cuya velocidad máxima será 1000 y sobrescribirá los
 * métodos comenzar, para que muestre “Despegar”, y parar, para que muestre “Aterrizar”.
 */
import { Vehiculo } from "../Ej 24/script.js";

class Coche extends Vehiculo {
  constructor(color, marca, modelo) {
    super(color, marca, modelo, 120);
  }

  parar() {
    console.log("Aparcar");
  }
}

class Avion extends Vehiculo {
  constructor(color, marca, modelo) {
    super(color, marca, modelo, 1000);
  }

  comenzar() {
    console.log("Despegar");
  }

  parar() {
    console.log("Aterrizar");
  }
}

const coche = new Coche("Negro", "Citroen", "Xara");
const avion = new Avion("Blanco", "Boeing", "747");

coche.comenzar();
coche.parar();

avion.comenzar();
avion.parar();

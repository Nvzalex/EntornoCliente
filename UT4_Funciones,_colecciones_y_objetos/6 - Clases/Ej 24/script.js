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
function Vehiculo(color, marca, modelo, velocidadMax) {
  this.color = color;
  this.marca = marca;
  this.modelo = modelo;
  this.velocidadMax = velocidadMax;

  let tiempo;
  let tiempo2;

  comenzar = function () {
    tiempo = new Date();
    return "Encender motor";
  };
  parar = function () {
    tiempo2 = new Date();
    return "Apagar motor";
  };
  distanciaMax = function () {
    return "Distancia maxima: " + velocidadMax * ((tiempo2 - tiempo) / (1000 * 3600)) + " km";
  };
}

console.log(Vehiculo("Negro", "Citroen", "Xara", 150));
//comenzar();
//parar();
//distanciaMax();

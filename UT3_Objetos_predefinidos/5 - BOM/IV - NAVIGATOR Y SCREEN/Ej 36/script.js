/**
 * 36. Crea una función saludo(idioma) que devuelva «¡Hola!» si el idioma
 * empieza por es, «Bonjour !» si empieza por fr y «Hello!» en cualquier
 * otro caso. El parámetro es opcional: si no se indica, se utiliza el idioma del navegador.
 * saludo("es-ES")   // "¡Hola!"
 * saludo("fr-FR")   // "Bonjour !"
 * saludo("de-DE")   // "Hello!"
 * saludo()          // el saludo correspondiente al idioma de tu navegador
 */
function saludo(idioma = navigator.language) {
  if (idioma.startsWith("es")) {
    return "¡Hola!";
  } else if (idioma.startsWith("fr")) {
    return "Bonjour !";
  } else {
    return "Hello!";
  }
}

console.log(saludo("es-ES")); // ¡Hola!
console.log(saludo("fr-FR")); // Bonjour !
console.log(saludo("de-DE")); // Hello!
console.log(saludo()); // Saludo según el idioma del navegador

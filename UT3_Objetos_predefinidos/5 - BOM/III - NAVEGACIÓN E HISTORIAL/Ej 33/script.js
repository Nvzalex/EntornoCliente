/**
 * 33. Crea una función mismoOrigen(url1, url2) que devuelva true
 * si las dos url tienen el mismo origen (mismo protocolo, dominio y puerto)
 * y false si no. Es el criterio que usa el navegador para decidir
 * qué ventanas pueden comunicarse y qué páginas comparten localStorage.
 * Puedes reutilizar descomponerURL.
 *
 * mismoOrigen("https://ejemplo.com:8080/a.html", "https://ejemplo.com:8080/b/c.html")   // true
 * mismoOrigen("http://ejemplo.com:8080/a.html", "https://ejemplo.com:8080/a.html")      // false (protocolo)
 * mismoOrigen("https://ejemplo.com:8080/a", "https://tienda.ejemplo.com:8080/a")        // false (dominio)
 * mismoOrigen("https://ejemplo.com:8080/a", "https://ejemplo.com:9090/a")               // false (puerto)
 *
 * Si has hecho la ampliación del ejercicio anterior, también
 * debe devolver true para "https://ejemplo.com/a" y "https://ejemplo.com:443/b".
 */
function mismoOrigen(url1, url2) {
  const [protocolo1, dominio1, puerto1] = descomponerURL(url1);
  const [protocolo2, dominio2, puerto2] = descomponerURL(url2);

  return protocolo1 === protocolo2 && dominio1 === dominio2 && puerto1 === puerto2;
}

console.log(mismoOrigen("https://ejemplo.com:8080/a.html", "https://ejemplo.com:8080/b/c.html")); // true
console.log(mismoOrigen("http://ejemplo.com:8080/a.html", "https://ejemplo.com:8080/a.html")); // false (protocolo)
console.log(mismoOrigen("https://ejemplo.com:8080/a", "https://tienda.ejemplo.com:8080/a")); // false (dominio)
console.log(mismoOrigen("https://ejemplo.com:8080/a", "https://ejemplo.com:9090/a")); // false (puerto)

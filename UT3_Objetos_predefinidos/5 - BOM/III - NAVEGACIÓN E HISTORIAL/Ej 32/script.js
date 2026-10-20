/**
 * 32. Crea una función descomponerURL(url) que reciba como
 * parámetro una url y devuelva un array de cadenas con el protocolo,
 * el dominio, el puerto y el path (en ese orden).
 * Importante: debes utilizar métodos de tipo String (no el objeto URL).
 * Suponemos que la url es correcta y tiene el formato protocolo://dominio:puerto/path.
 * descomponerURL("https://ejemplo.com:8080/curso/tema.html")
 * // ["https", "ejemplo.com", "8080", "/curso/tema.html"]
 *
 * Ampliación: el puerto puede no aparecer en la url. En ese caso,
 * devuelve el puerto por defecto: "80" si el protocolo es http y "443" si es https.
 * descomponerURL("https://ejemplo.com/index.html")
 * // ["https", "ejemplo.com", "443", "/index.html"]
 */
function descomponerURL(url) {
  const iProtocolo = url.indexOf("://");
  const protocolo = url.slice(0, iProtocolo);

  const resto = url.slice(iProtocolo + 3);

  const iPath = resto.indexOf("/");
  const path = resto.slice(iPath);

  const autoridad = resto.slice(0, iPath);
  const partes = autoridad.split(":");

  const dominio = partes[0];
  let puerto;

  // prettier-ignore
  if (partes[1] !== undefined) {
    puerto = partes[1];
  } else if (protocolo === "https") {
    puerto = "443";} else {puerto = "80";}

  return [protocolo, dominio, puerto, path];
}

//console.log(descomponerURL("https://ejemplo.com:8080/curso/tema.html")); // ["https", "ejemplo.com", "8080", "/curso/tema.html"]

//console.log(descomponerURL("https://ejemplo.com/index.html")); // ["https", "ejemplo.com", "443", "/index.html"]

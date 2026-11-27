/*
  NASA: imagen del día y galería (APOD, Astronomy Picture of the Day)

  La NASA ofrece los datos de APOD en formato JSON. No hace falta clave.
  Puedes ver el JSON escribiendo estas direcciones en el navegador:
    - Una imagen (el número es la fecha en formato AAMMDD):
        https://science.nasa.gov/wp-json/wp/v2/apod-basic/261123
    - Las 6 imágenes más recientes:
        https://science.nasa.gov/wp-json/wp/v2/apod-basic?per_page=6

  Si la API no responde, cambia USAR_RESPALDO a true para leer los datos de la carpeta
  "respaldo". Para leer archivos locales, la página se tiene que abrir con un servidor
  (por ejemplo, la extensión Live Server de Visual Studio Code).
*/
const USAR_RESPALDO = false;

const URL_APOD = "https://science.nasa.gov/wp-json/wp/v2/apod-basic";
const URL_HOY = USAR_RESPALDO ? "respaldo/hoy.json" : `${URL_APOD}?per_page=1`;
const URL_GALERIA = USAR_RESPALDO ? "respaldo/galeria.json" : `${URL_APOD}?per_page=6`;

// El script se carga con defer: cuando se ejecuta, el DOM ya está listo.
obtenerDatos();
obtenerGaleria();

// a) Imagen más reciente. La lista devuelve un array con un solo elemento:
//    a mostrarDatos se le pasa ese elemento, que es UN OBJETO.
function obtenerDatos() {
  fetch(URL_HOY)
    .then((respuesta) => respuesta.json())
    .then((lista) => mostrarDatos(lista[0]));
}

// b) Galería: la API devuelve UN ARRAY de objetos.
function obtenerGaleria() {
  fetch(URL_GALERIA)
    .then((respuesta) => respuesta.json())
    .then((lista) => mostrarGaleria(lista));
}

function mostrarDatos(apod) {
  // Tu código aquí
}

function mostrarGaleria(lista) {
  // Tu código aquí
}

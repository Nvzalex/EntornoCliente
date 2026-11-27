/*
  Pokédex

  PokéAPI (https://pokeapi.co) no necesita clave.
  Puedes ver el JSON de cada petición escribiendo la dirección en el navegador:
    - Un Pokémon: https://pokeapi.co/api/v2/pokemon/pikachu
    - Lista:      https://pokeapi.co/api/v2/pokemon?limit=12

  Si la API no responde, cambia USAR_RESPALDO a true para leer los datos de la carpeta
  "respaldo". Para leer archivos locales, la página se tiene que abrir con un servidor
  (por ejemplo, la extensión Live Server de Visual Studio Code).
*/
const USAR_RESPALDO = false;

const URL_POKEMON = USAR_RESPALDO
  ? "respaldo/pikachu.json"
  : "https://pokeapi.co/api/v2/pokemon/pikachu";
const URL_LISTA = USAR_RESPALDO
  ? "respaldo/lista.json"
  : "https://pokeapi.co/api/v2/pokemon?limit=12";

// El script se carga con defer: cuando se ejecuta, el DOM ya está listo.
obtenerPokemon();
obtenerLista();

// a) Un Pokémon: la API devuelve UN OBJETO
function obtenerPokemon() {
  fetch(URL_POKEMON)
    .then((respuesta) => respuesta.json())
    .then((pokemon) => mostrarPokemon(pokemon));
}

// b) Lista: la API devuelve UN OBJETO que contiene UN ARRAY (results)
function obtenerLista() {
  fetch(URL_LISTA)
    .then((respuesta) => respuesta.json())
    .then((datos) => mostrarLista(datos));
}

function mostrarPokemon(pokemon) {
  // Tu código aquí
}

function mostrarLista(datos) {
  // Tu código aquí
}

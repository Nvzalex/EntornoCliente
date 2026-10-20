/**
 * 29. Crea una función mostrarUbicacion() que muestre por consola
 * las partes de la dirección de la página actual: href, origin,
 * protocol, hostname, port, pathname, search y hash.
 *
 * Pruébala con una dirección como http://127.0.0.1:5500/ejercicios/pagina.html?id=5&nombre=Ana#final
 * (escribe a mano los parámetros y el fragmento en la barra de direcciones).
 * Después, prueba con una dirección que no incluya el puerto. ¿Qué valor tiene port en ese caso?
 */
function mostrarUbicacion(url) {
  const u = new URL(url);

  // prettier-ignore
  return { href: u.href, origin: u.origin, protocol: u.protocol, hostname: u.hostname, 
    port: u.port, pathname: u.pathname, search: u.search, hash: u.hash };
}

console.log(mostrarUbicacion("http://127.0.0.1:5500/ejercicios/pagina.html?id=5&nombre=Ana#final"));

/**
 * 34. Crea tres páginas, pag1.html, pag2.html y pag3.html,
 * enlazadas entre sí con enlaces <a href>. En cada una añade tres botones:
 * «Atrás» (history.back()), «Adelante» (history.forward()) y «Atrás 2» (history.go(-2)).
 * Al cargar la página, debe mostrar por consola history.length.
 *
 * Navega de pag1 a pag2 y a pag3 y prueba los botones. Observa qué ocurre
 * cuando pulsas «Adelante» en la última página del historial.
 * Después, sustituye en pag2 el enlace a pag3 por un botón que use
 * location.replace("pag3.html"). ¿Qué cambia en el comportamiento del botón Atrás y en history.length?
 */
/** 
1. ¿Qué ocurre al pulsar «Adelante» en la última página del historial?
No ocurre nada.
Si estás en pag3.html (la última página visitada) y pulsas el botón «Adelante» 
(history.forward()), el navegador no hace nada. No hay una página siguiente en el 
historial a la que ir, por lo que la acción se ignora silenciosamente, sin errores ni recargas.

2. ¿Qué cambia al usar location.replace("pag3.html") en pag2?
Al cambiar el enlace por un botón con location.replace(), se producen dos cambios fundamentales:

    A. En la propiedad history.length
    Con enlace normal (<a href>): La longitud es 3. Cada página visitada añade un 
    nuevo registro al historial (pag1 -> pag2 -> pag3).

    Con location.replace: La longitud es 2. En lugar de añadir una nueva entrada, replace 
    sustituye la página actual. El historial queda como (pag1 -> pag3), borrando pag2 de la memoria.

    B. En el comportamiento del botón «Atrás»
    Con enlace normal (<a href>): Si pulsas «Atrás» en pag3, vuelves a pag2.html.

    Con location.replace: Si pulsas «Atrás» en pag3, saltas directamente a pag1.html.
    La página pag2.html ha sido eliminada del historial.
*/

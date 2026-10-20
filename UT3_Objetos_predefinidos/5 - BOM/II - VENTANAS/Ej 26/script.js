/**
 * 26. Crea dos páginas del mismo origen, principal.html
 * e hija.html, que se comuniquen entre sí:
 *
 * •	principal.html tiene dos botones: «Abrir hija», que
 * abre hija.html con window.open(), y «Enviar mensaje», que
 * pide un texto con prompt() y lo muestra con alert() en la
 * ventana hija, llamando a una función de esa ventana.
 *
 * •	hija.html tiene un botón «Responder», que pide un texto con
 * prompt() y lo muestra con alert() en la ventana que la
 * abrió (utiliza window.opener).
 *
 * Comprueba qué ocurre si pulsas «Enviar mensaje» sin haber abierto la hija, o después de cerrarla, y evita el error en tu código.
 */
let ventanaHija = null;

function mostrarMensajeEnHija(texto) {
  alert("Mensaje desde principal:\n" + texto);
}

function mostrarMensajeEnPrincipal(texto) {
  alert("Respuesta desde hija:\n" + texto);
}

document.addEventListener("DOMContentLoaded", () => {
  const btnAbrir = document.getElementById("btn-abrir");
  const btnEnviar = document.getElementById("btn-enviar");

  if (btnAbrir) {
    btnAbrir.addEventListener("click", () => {
      ventanaHija = window.open(
        "hija.html",
        "ventanaHija",
        "width=400,height=300",
      );
    });
  }

  if (btnEnviar) {
    btnEnviar.addEventListener("click", () => {
      if (!ventanaHija || ventanaHija.closed) {
        alert("La ventana hija no está abierta o ha sido cerrada.");
        return;
      }

      const texto = prompt("Escribe el mensaje para la ventana hija:");
      if (texto === null) return;

      try {
        ventanaHija.mostrarMensajeEnHija(texto);
      } catch (error) {
        alert("No se pudo enviar el mensaje a la ventana hija.");
      }
    });
  }

  const btnResponder = document.getElementById("btn-responder");

  if (btnResponder) {
    btnResponder.addEventListener("click", () => {
      if (!window.opener || window.opener.closed) {
        alert("La ventana principal no está disponible.");
        return;
      }

      const texto = prompt("Escribe la respuesta para la ventana principal:");
      if (texto === null) return;

      try {
        window.opener.mostrarMensajeEnPrincipal(texto);
      } catch (error) {
        alert("No se pudo enviar la respuesta a la ventana principal.");
      }
    });
  }
});

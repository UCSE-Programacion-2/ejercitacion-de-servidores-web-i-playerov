/**
 * Módulo que crea y configura el servidor HTTP
 */
const http = require('http');

/**
 * Crea un servidor HTTP que utiliza la función router para manejar las solicitudes
 * @returns {http.Server} Instancia del servidor HTTP
 */
function createServer() {
  const server = http.createServer((req, res) => {
    /* Aquí la lógica del enrutador */
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');

    switch (req.url) {
      case '/':
        res.writeHead(200);
        res.end('Bienvenid@s! Gracias por tu visita.');
        break;
      case '/nosotros':
        res.writeHead(200);
        res.end('Bienvenid@s a saber + de nosotros :)');
        break;
      case '/cursos':
        res.writeHead(200);
        res.end('Te interesan nuestros cursos. Vení a conocer la oferta!');
        break;
      case '/contacto':
        res.writeHead(200);
        res.end('Si querés contactarnos, hacelo a este Email: :)');
        break;
      default:
        res.writeHead(404);
        res.end('No se ha encontrado la ruta ingresada.');
    }
  });

  return server;
}

module.exports = createServer;

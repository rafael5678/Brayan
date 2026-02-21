/**
 * Servidor para la página de cumpleaños.
 * Solo necesita Node.js (no npm install).
 * Puerto: 4201 — Abre: http://localhost:4201
 */
const http = require('http');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const PORT = 4201;
const ROOT = __dirname;

function openBrowser() {
  const url = 'http://localhost:' + PORT;
  const cmd = process.platform === 'win32' ? 'start' : process.platform === 'darwin' ? 'open' : 'xdg-open';
  exec(cmd + ' "' + url + '"', () => {});
}

const server = http.createServer((req, res) => {
  const url = req.url === '/' ? '/index.html' : req.url;

  if (url === '/index.html' || url === '/') {
    const htmlPath = path.join(ROOT, 'ABRIR-PAGINA-AQUI.html');
    fs.readFile(htmlPath, 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500);
        return res.end('Error leyendo la pagina');
      }
      const html = data
        .replace(/src="src\/assets\/images\//g, 'src="/images/')
        .replace(/src="src\/assets\/audio\//g, 'src="/audio/');
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(html);
    });
    return;
  }

  if (url.startsWith('/images/')) {
    const file = path.join(ROOT, 'src', 'assets', 'images', path.basename(url));
    fs.readFile(file, (err, data) => {
      if (err) {
        res.writeHead(404);
        return res.end();
      }
      const ext = path.extname(url).toLowerCase();
      const types = { '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.gif': 'image/gif' };
      res.writeHead(200, { 'Content-Type': types[ext] || 'application/octet-stream' });
      res.end(data);
    });
    return;
  }

  if (url.startsWith('/audio/')) {
    const file = path.join(ROOT, 'src', 'assets', 'audio', path.basename(url));
    fs.readFile(file, (err, data) => {
      if (err) {
        res.writeHead(404);
        return res.end();
      }
      res.writeHead(200, { 'Content-Type': 'audio/ogg' });
      res.end(data);
    });
    return;
  }

  res.writeHead(404);
  res.end();
});

server.listen(PORT, () => {
  console.log('');
  console.log('  Servidor de cumpleanos activo.');
  console.log('  Abre en el navegador:  http://localhost:' + PORT);
  console.log('');
  console.log('  No cierres esta ventana mientras quieras ver la pagina.');
  console.log('  Para detener: Ctrl+C');
  console.log('');
  setTimeout(openBrowser, 800);
});

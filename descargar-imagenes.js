/**
 * Descarga imágenes placeholder para la galería.
 * Ejecutar: node descargar-imagenes.js
 */
const https = require('https');
const fs = require('fs');
const path = require('path');

const IMG_DIR = path.join(__dirname, 'src', 'assets', 'images');
const PHOTOS = [
  { id: 1, seed: 'brayan1' },
  { id: 2, seed: 'brayan2' },
  { id: 3, seed: 'brayan3' },
  { id: 4, seed: 'brayan4' },
  { id: 5, seed: 'brayan5' },
  { id: 6, seed: 'brayan6' },
  { id: 7, seed: 'brayan7' },
  { id: 8, seed: 'brayan8' },
  { id: 9, seed: 'brayan9' },
];

function download(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        const loc = res.headers.location;
        return download(loc.startsWith('http') ? loc : new URL(loc, url).href).then(resolve).catch(reject);
      }
      const chunks = [];
      res.on('data', (c) => chunks.push(c));
      res.on('end', () => resolve(Buffer.concat(chunks)));
      res.on('error', reject);
    }).on('error', reject);
  });
}

async function main() {
  if (!fs.existsSync(IMG_DIR)) fs.mkdirSync(IMG_DIR, { recursive: true });
  console.log('Descargando imágenes...');
  for (const p of PHOTOS) {
    const url = `https://picsum.photos/seed/${p.seed}/800/600`;
    try {
      const buf = await download(url);
      const file = path.join(IMG_DIR, `photo${p.id}.png`);
      fs.writeFileSync(file, buf);
      console.log('  OK photo' + p.id + '.png');
    } catch (e) {
      console.log('  ERROR photo' + p.id + ':', e.message);
    }
  }
  console.log('Listo. Refresca la página en el navegador.');
}

main();

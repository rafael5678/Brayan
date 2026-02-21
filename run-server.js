/**
 * Inicia el servidor de Angular en esta carpeta.
 * Ejecutar: node run-server.js
 * Luego abre: http://localhost:4200
 */
const { spawn } = require('child_process');
const path = require('path');

const root = __dirname;
process.chdir(root);

console.log('Carpeta del proyecto:', root);
console.log('');

function run(cmd, args, label) {
  return new Promise((resolve, reject) => {
    const child = spawn(cmd, args, {
      stdio: 'inherit',
      shell: true,
      cwd: root,
    });
    child.on('close', (code) => {
      if (code === 0) resolve();
      else reject(new Error(`${label} salió con código ${code}`));
    });
    child.on('error', reject);
  });
}

const OPEN_URL = 'http://localhost:4201';

function openBrowser() {
  const start = process.platform === 'darwin' ? 'open' : process.platform === 'win32' ? 'start' : 'xdg-open';
  require('child_process').exec(start + ' ' + OPEN_URL, () => {});
}

(async () => {
  try {
    console.log('Instalando dependencias (npm install)...\n');
    await run('npm', ['install'], 'npm install');
    console.log('\nIniciando servidor (npm start)...\n');
    console.log('>>> La pagina se abrira en: ' + OPEN_URL + '\n');
    const child = spawn('npm', ['start'], { stdio: 'inherit', shell: true, cwd: root });
    setTimeout(openBrowser, 12000);
    child.on('close', (code) => process.exit(code || 0));
    child.on('error', (e) => { console.error(e); process.exit(1); });
  } catch (e) {
    console.error('\nError:', e.message);
    process.exit(1);
  }
})();

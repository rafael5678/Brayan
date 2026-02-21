@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo.
echo  Carpeta: %~dp0
echo  Instalando dependencias e iniciando servidor...
echo  Cuando veas "Compiled successfully", abre:  http://localhost:4200
echo.
node run-server.js
if errorlevel 1 (
  echo.
  echo  Si falla, asegurate de tener Node.js instalado: https://nodejs.org
  pause
)
pause

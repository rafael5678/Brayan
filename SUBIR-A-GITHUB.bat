@echo off
chcp 65001 >nul
cd /d "%~dp0"

echo.
echo  ========================================
echo   SUBIR A GITHUB: rafael5678/Brayan
echo  ========================================
echo.

if not exist .git (
    echo  [1/4] Inicializando repositorio Git...
    git init
    echo.
) else (
    echo  [1/4] Repositorio Git ya existe.
    echo.
)

echo  [2/4] Configurando remoto...
git remote remove origin 2>nul
git remote add origin https://github.com/rafael5678/Brayan.git

echo  [3/4] Añadiendo archivos...
git add .
git status
echo.

echo  [4/4] Subiendo a GitHub...
git commit -m "Feliz Cumpleanos Brayan - Pagina de cumpleanos 22/02/2026"
git branch -M main
git push -u origin main

echo.
echo  ========================================
echo   LISTO! Revisa: https://github.com/rafael5678/Brayan
echo  ========================================
echo.
pause

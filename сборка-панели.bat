@echo off
chcp 65001 >nul
cd /d "%~dp0"

echo ============================================
echo   NLB Studio — SuperPanel (production build)
echo ============================================
echo.

if not exist "node_modules\astro\astro.js" (
  echo [1/3] Установка зависимостей...
  call npm install --no-audit --no-fund --legacy-peer-deps --ignore-scripts
)

echo [2/3] Сборка...
call npx astro build
if errorlevel 1 (
  echo.
  echo [ОШИБКА] Сборка провалилась.
  pause
  exit /b 1
)

echo [3/3] Запуск preview...
echo.
echo Открывать dist: http://localhost:4321
start "" http://localhost:4321
call npx astro preview --port 4321 --host localhost
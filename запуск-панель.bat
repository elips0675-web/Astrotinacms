@echo off
chcp 65001 >nul
cd /d "%~dp0"

echo ============================================
echo   NLB Studio — SuperPanel (Astro, dev)
echo   http://localhost:4321
echo ============================================
echo.

where node >nul 2>nul
if errorlevel 1 (
  echo [ОШИБКА] Node.js не найден. Установите Node.js 18+.
  pause
  exit /b 1
)

if not exist "node_modules\astro\astro.js" (
  echo [1/2] Установка зависимостей...
  call npm install --no-audit --no-fund --legacy-peer-deps --ignore-scripts
)

echo [2/2] Запуск dev-сервера...
echo.
start "" http://localhost:4321
call npx astro dev --port 4321 --host localhost
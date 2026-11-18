@echo off
rem Starts the game in your browser via a tiny local server (serve.ps1). Close this window to stop.
cd /d "%~dp0"
title Cyber City: Open World 3D (Gemini, 2nd run)
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0serve.ps1" -Root "%~dp0."
if errorlevel 1 pause

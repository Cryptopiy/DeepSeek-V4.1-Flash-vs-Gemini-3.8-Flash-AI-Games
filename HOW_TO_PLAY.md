# How to play / Как запустить

**[Русский](#русский) · [English](#english)**

---

## Русский

### Игры и файлы запуска

- **Mini Open World (DeepSeek)** (Web · Three.js): [онлайн](https://cryptopiy.github.io/DeepSeek-V4.1-Flash-vs-Gemini-3.8-Flash-AI-Games/games/deepseek-01-mini-open-world/dist/) · `games/deepseek-01-mini-open-world/PLAY.bat`
- **Car Crash Lab (DeepSeek)** (Web · React Three Fiber): [онлайн](https://cryptopiy.github.io/DeepSeek-V4.1-Flash-vs-Gemini-3.8-Flash-AI-Games/games/deepseek-02-car-crash-lab/dist/) · `games/deepseek-02-car-crash-lab/PLAY.bat`
- **Tsunami Simulator (DeepSeek)** (Web · React Three Fiber): [онлайн](https://cryptopiy.github.io/DeepSeek-V4.1-Flash-vs-Gemini-3.8-Flash-AI-Games/games/deepseek-03-tsunami-simulator/dist/) · `games/deepseek-03-tsunami-simulator/PLAY.bat`
- **Voxel T-Rex (DeepSeek)** (Web · React Three Fiber): [онлайн](https://cryptopiy.github.io/DeepSeek-V4.1-Flash-vs-Gemini-3.8-Flash-AI-Games/games/deepseek-05-voxel-trex/dist/) · `games/deepseek-05-voxel-trex/PLAY.bat`
- **Mini Open World 3D (Gemini)** (Web · Three.js): [онлайн](https://cryptopiy.github.io/DeepSeek-V4.1-Flash-vs-Gemini-3.8-Flash-AI-Games/games/gemini-01-mini-open-world/dist/) · `games/gemini-01-mini-open-world/PLAY.bat`
- **Cyber City: Open World 3D (Gemini, 2nd run)** (Web · Three.js): [онлайн](https://cryptopiy.github.io/DeepSeek-V4.1-Flash-vs-Gemini-3.8-Flash-AI-Games/games/gemini-01b-cyber-city/) · `games/gemini-01b-cyber-city/PLAY.bat`
- **3D Car Crash Laboratory (Gemini)** (Web · Three.js): [онлайн](https://cryptopiy.github.io/DeepSeek-V4.1-Flash-vs-Gemini-3.8-Flash-AI-Games/games/gemini-02-car-crash-lab/dist/) · `games/gemini-02-car-crash-lab/PLAY.bat`
- **Tsunami Disaster Simulator 3D (Gemini)** (Web · Three.js): [онлайн](https://cryptopiy.github.io/DeepSeek-V4.1-Flash-vs-Gemini-3.8-Flash-AI-Games/games/gemini-03-tsunami-simulator/) · `games/gemini-03-tsunami-simulator/PLAY.bat`
- **Voxel Tyrannosaurus Rex 3D (Gemini)** (Web · React Three Fiber): [онлайн](https://cryptopiy.github.io/DeepSeek-V4.1-Flash-vs-Gemini-3.8-Flash-AI-Games/games/gemini-05-voxel-trex/dist/) · `games/gemini-05-voxel-trex/PLAY.bat`

### Браузерные игры

**Онлайн:** ссылка «онлайн» выше — игра откроется прямо в браузере (Chrome / Edge / Firefox).

**Локально (Windows):**
1. Нажмите зелёную кнопку **Code → Download ZIP** на странице репозитория и распакуйте архив.
2. Откройте папку нужной игры и дважды кликните **`PLAY.bat`**.
3. Откроется браузер с игрой. Не закрывайте чёрное окно, пока играете; закройте его, чтобы остановить игру.

`PLAY.bat` запускает маленький локальный веб-сервер (`serve.ps1`, встроенный PowerShell Windows) только на `http://localhost`. Это нужно, потому что браузеры не дают запускать современные JS-модули при открытии `index.html` двойным кликом.

**macOS / Linux:** в терминале `sh play.sh` в папке игры (нужен `python3`).

**Для разработчиков (проекты с `package.json`):** установите Node.js 18+, затем в папке игры `npm install` и `npm run dev`.

### Как открыть исходники в движке

**Web:** любой редактор кода (например, VS Code). Проекты с `package.json`: `npm install`, `npm run dev`, сборка — `npm run build`.

### Сделать такую же игру с ИИ

Промпты лежат в папке [prompts/](prompts) (если есть), а гайд по связке Claude/Codex + движок + Blender MCP — в [BLENDER_MCP_GUIDE.md](BLENDER_MCP_GUIDE.md).

---

## English

### Games and launch files

- **Mini Open World (DeepSeek)** (Web · Three.js): [online](https://cryptopiy.github.io/DeepSeek-V4.1-Flash-vs-Gemini-3.8-Flash-AI-Games/games/deepseek-01-mini-open-world/dist/) · `games/deepseek-01-mini-open-world/PLAY.bat`
- **Car Crash Lab (DeepSeek)** (Web · React Three Fiber): [online](https://cryptopiy.github.io/DeepSeek-V4.1-Flash-vs-Gemini-3.8-Flash-AI-Games/games/deepseek-02-car-crash-lab/dist/) · `games/deepseek-02-car-crash-lab/PLAY.bat`
- **Tsunami Simulator (DeepSeek)** (Web · React Three Fiber): [online](https://cryptopiy.github.io/DeepSeek-V4.1-Flash-vs-Gemini-3.8-Flash-AI-Games/games/deepseek-03-tsunami-simulator/dist/) · `games/deepseek-03-tsunami-simulator/PLAY.bat`
- **Voxel T-Rex (DeepSeek)** (Web · React Three Fiber): [online](https://cryptopiy.github.io/DeepSeek-V4.1-Flash-vs-Gemini-3.8-Flash-AI-Games/games/deepseek-05-voxel-trex/dist/) · `games/deepseek-05-voxel-trex/PLAY.bat`
- **Mini Open World 3D (Gemini)** (Web · Three.js): [online](https://cryptopiy.github.io/DeepSeek-V4.1-Flash-vs-Gemini-3.8-Flash-AI-Games/games/gemini-01-mini-open-world/dist/) · `games/gemini-01-mini-open-world/PLAY.bat`
- **Cyber City: Open World 3D (Gemini, 2nd run)** (Web · Three.js): [online](https://cryptopiy.github.io/DeepSeek-V4.1-Flash-vs-Gemini-3.8-Flash-AI-Games/games/gemini-01b-cyber-city/) · `games/gemini-01b-cyber-city/PLAY.bat`
- **3D Car Crash Laboratory (Gemini)** (Web · Three.js): [online](https://cryptopiy.github.io/DeepSeek-V4.1-Flash-vs-Gemini-3.8-Flash-AI-Games/games/gemini-02-car-crash-lab/dist/) · `games/gemini-02-car-crash-lab/PLAY.bat`
- **Tsunami Disaster Simulator 3D (Gemini)** (Web · Three.js): [online](https://cryptopiy.github.io/DeepSeek-V4.1-Flash-vs-Gemini-3.8-Flash-AI-Games/games/gemini-03-tsunami-simulator/) · `games/gemini-03-tsunami-simulator/PLAY.bat`
- **Voxel Tyrannosaurus Rex 3D (Gemini)** (Web · React Three Fiber): [online](https://cryptopiy.github.io/DeepSeek-V4.1-Flash-vs-Gemini-3.8-Flash-AI-Games/games/gemini-05-voxel-trex/dist/) · `games/gemini-05-voxel-trex/PLAY.bat`

### Browser games

**Online:** use the “online” link above — the game opens right in your browser (Chrome / Edge / Firefox).

**Locally (Windows):**
1. Click the green **Code → Download ZIP** button on the repo page and extract the archive.
2. Open the game's folder and double-click **`PLAY.bat`**.
3. Your browser opens the game. Keep the black window open while playing; close it to stop the game.

`PLAY.bat` starts a tiny local web server (`serve.ps1`, using the PowerShell built into Windows) on `http://localhost` only. It's needed because browsers block modern JS modules when `index.html` is opened by double-click.

**macOS / Linux:** run `sh play.sh` in the game folder (needs `python3`).

**For developers (projects with `package.json`):** install Node.js 18+, then run `npm install` and `npm run dev` in the game folder.

### Open the source in the engine

**Web:** any code editor (e.g. VS Code). Projects with `package.json`: `npm install`, `npm run dev`, build with `npm run build`.

### Make a game like this with AI

The prompts are in [prompts/](prompts) (if present), and the Claude/Codex + engine + Blender MCP setup guide is in [BLENDER_MCP_GUIDE.md](BLENDER_MCP_GUIDE.md).

# ⚡ Vite Crash Course – FreeCodeCamp

## Overview
Today I completed the **Vite Crash Course** from [FreeCodeCamp](https://www.youtube.com/watch?v=do62-z3z6FM&t=168s).  
This session gave me a clear understanding of how Vite works and why it's one of the fastest modern build tools for React.

---

## 🧠 Topics Learned

### 1. Build React App with `Vite`
Vite makes it simple to create a new `React` project using a few commands.  
It provides a lightweight and optimized setup, avoiding the complexity of traditional build tools like Webpack.

**Command Example:**
```bash
npm create vite@latest my-react-app
cd my-react-app
npm install
npm run dev
```

---

### 2. Experiencing `Fast Development`
Vite offers **instant server start** and **fast hot reloads**.  
It uses `ES Modules` in development, so only the changed code is reloaded — saving time during development.

---

### 3. `Dev`, `Build`, and `Preview` Modes
- `npm run dev` → Runs the development server  
- `npm run build` → Builds the app for production  
- `npm run preview` → Previews the built version locally  

This helps simulate both development and production environments easily.

---

### 4. `Plugin` System
Vite supports a **plugin system** that extends its functionality.  
Plugins can be used for tasks like adding new frameworks, optimizing assets, or customizing build behavior.

Eg:`vite-plugin-qrcode`
[Reference](https://github.com/svitejs/vite-plugin-qrcode)

**How to use plugin:-**
1.Install as a dev dependency in package.json eg`npm install --save-dev vite-plugin-qrcode`
2.Import and add in plugin array in vite.config.js 
eg:
```
// vite.config.js
import { qrcode } from 'vite-plugin-qrcode';

export default defineConfig({
	plugins: [
		qrcode() // only applies in dev mode
	]
});

```
3.Check addition detail in pluggin doc [Reference](https://github.com/svitejs/vite-plugin-qrcode)

---

### 5. `HMR` – Hot Module Replacement
`HMR` updates modules in real-time without reloading the entire page.  
This makes the development process **blazing fast**, allowing instant updates while coding.

---

## 🚀 Summary
- Built a React app using `Vite`
- Understood why Vite is fast (`HMR`, `ESM`, lightweight build system)
- Explored core commands (`dev`, `build`, `preview`)
- Learned about the `plugin` ecosystem

Vite is now my go-to tool for starting React projects quickly and efficiently! 💡

# Episode 2 – Igniting Our App (Overview)

This file lists all the **topics and questions** covered in Episode 2 – Igniting Our App. Use this file to quickly check what you learned and track your progress.

## Topics Covered

1. **NPM (Node Package Manager)**
2. **Bundler**
3. **Vite/Webpack and why we need them**
4. **npx**
5. **Difference between npx and npm**
6. **Dependencies vs DevDependencies**
7. **Tree Shaking**
8. **Hot Module Replacement (HMR)**
9. **Superpowers of Vite**
10. **.gitignore**
11. **Difference between package.json and package-lock.json**
12. **vite.config.js**
13. **Transitive Dependency**
14. **Why should I not modify package-lock.json?**
15. **node_modules**
16. **dist folder**
17. **browserslist**
18. **^ (caret) vs ~ (tilde)**
19. **Script types in HTML**
20. **Things needed to do React**
21. **Webpack (Extra)**
22. **ES Modules (ESM) (Extra)**
23. **Configuration & Configuration File (Extra)**
24. **JSX (Extra)**



# Episode 2 – Igniting Our App (Full Notes)

---

### 1. What is NPM (Node Package Manager)?

**Why we need it:**
When we start working on React or any JavaScript project, we need tools and libraries. Imagine building a car — you don’t make every part yourself; you buy wheels, mirrors, engines from others. NPM gives you ready-made “parts” (libraries).

**Real-world example:**
If your React app needs animations, you don’t code the animation system from scratch. You just install a package like `npm install framer-motion`. Boom — animation ready!

**Definition:**
> NPM (Node Package Manager) is a tool that helps developers to install, manage, and share JavaScript packages. It comes bundled with Node.js.

---

### 2. What is a Bundler?

**Why we need it:**
When you code, you create many small files (React components, styles, etc.). The browser doesn’t understand `import/export` or modern JavaScript by itself. Bundlers combine all your files into one optimized file that browsers can understand.

**Real-world example:**
Packing all your clothes, shoes, and items in a single suitcase when going on a trip. Instead of carrying 100 small bags, you carry one optimized bundle.

**Definition:**
> A Bundler combines and optimizes all your project files (JS, CSS, images) into one or more files that browsers can run efficiently.

**Examples:** Webpack, Vite, Parcel

---

### 3. What is Vite/Webpack? Why do we need it?

**How it helps:**
- Starts a local server.
- Converts modern JS → browser-compatible JS.
- Automatically reloads the browser when code changes (HMR).

**Real-world example:**
Imagine a chef has an assistant who keeps your ingredients ready while you cook — that’s Vite. You focus on the recipe (coding), Vite handles preparation (bundling, serving, reloading).

**Definition:**
> Vite (French for “fast”) is a next-generation bundler and dev server that gives lightning-fast builds using ES Modules.

**Vite vs Webpack:**
| Feature | Vite | Webpack |
|---------|------|---------|
| Speed | Very fast (native ES modules) | Slower (bundles all before start) |
| HMR | Built-in | Slower |
| Config | Simple | Complex |

---

### 4. What is npx?

**Why it exists:**
When we use npm, we install packages. Sometimes we just need to run a command once — not install it permanently. That’s where npx helps.

**Real-world example:**
You don’t buy a ladder for one-time bulb replacement — you borrow one! npx does the same — it “borrows” a package, runs it once, and removes it.

**Definition:**
> npx is a tool to run npm packages without installing them globally.

**Example:**
```bash
npx create-react-app myApp
```

---

### 5. Difference between npx and npm

| Feature | npm | npx |
|---------|-----|-----|
| Purpose | Installs packages | Executes packages |
| Example | `npm install vite` | `npx create-vite@latest` |
| Needs installation? | Yes | No |
| Usage | Repeated | One-time |

**Trick to remember:**
> npm keeps it, npx just uses it.

---

### 6. Dependencies vs DevDependencies

**Why we need both:**
Some packages are used during development, others during production.

**Examples:**
- dependencies: react, axios (needed when app runs)
- devDependencies: vite, eslint (used during development)

**Definition:**
> dependencies are packages required for the app to run. devDependencies are packages only needed during development.

---

### 7. Tree Shaking

**Why we need it:**
When we import a big library but use only one function, we don’t want the rest of the code in the final build.

**Real-world example:**
If you buy a whole pizza but eat only 2 slices — tree shaking ensures only those 2 slices are delivered to production.

**Definition:**
> Tree shaking is the process of removing unused code from the final JavaScript bundle to reduce file size.

---

### 8. Hot Module Replacement (HMR)

**Why we need it:**
Every time we make changes, we don’t want to refresh the page.

**Real-world example:**
Like cooking — when you add salt, you instantly taste the change without restarting the dish. That’s HMR!

**Definition:**
> HMR updates only the changed part of your app in real time without refreshing the browser.

---

### 9. Superpowers of Vite

**Top 5 features:**
1. Super Fast Development
2. Hot Module Replacement (HMR)
3. Optimized Production Builds
4. Plugin Support
5. Minimal Configuration

**Describe 3:**
- Super Fast: starts server instantly using ES modules.
- HMR: see changes instantly without refreshing.
- Plugins: extend features like Tailwind, React Refresh.

---

### 10. .gitignore

**Why we use it:**
We don’t want to upload unnecessary files (like node_modules) to GitHub.

**Definition:**
> .gitignore tells Git which files/folders to ignore.

**Example:**
```
node_modules/
dist/
.env
```

---

### 11. package.json vs package-lock.json

| File | Purpose |
|------|---------|
| package.json | Lists dependencies and project info |
| package-lock.json | Locks exact versions for reproducible builds |

**Reproducible build:**
> A build that produces the exact same result every time, for every developer, because package versions are locked.

---

### 12. vite.config.js

**Definition:**
> The configuration file for Vite where you can customize build paths, plugins, and server settings.

**Example:**
```js
export default defineConfig({
  server: { port: 3000 }
})
```

---

### 13. Transitive Dependency

**Definition:**
> A dependency of a dependency. For example, React depends on scheduler — scheduler is a transitive dependency.

---

### 14. Why not modify package-lock.json?

Because it ensures consistency between developers. Editing it manually can break version lock and cause build issues.

---

### 15. node_modules

> Contains all installed packages. Never push to GitHub (add to .gitignore).

---

### 16. dist folder

> After `npm run build`, optimized output files go to dist folder — used for deployment.

---

### 17. browserslist

> Defines which browsers your project should support. Helps Babel and Autoprefixer optimize output.

**Example in package.json:**
```json
"browserslist": [
  "last 2 versions",
  ">0.5%",
  "not dead"
]
```

---

### 18. ^ (caret) vs ~ (tilde)

- ^version → allows latest minor updates (e.g., ^1.2.3 → 1.3.0)
- ~version → allows only patch updates (e.g., ~1.2.3 → 1.2.4)

**Rule:** Caret = new features, Tilde = fixes only

---

### 19. Script types in HTML

- `text/javascript` → default JS
- `module` → ES Modules
- `text/babel` → JSX

**Example:**
```html
<script type="module" src="main.js"></script>
```

---

### 20. Things needed to do React

✅ Node.js + npm
✅ Vite or CRA setup
✅ React + ReactDOM
✅ Understanding components
✅ JSX + Babel
✅ Dev tools like Git, VSCode

---

### 21. Webpack (Extra)

> Module bundler that combines JS, CSS, images into optimized files.

### 22. ES Modules (ESM) (Extra)

> Allows import/export between JS files for reusable code.

### 23. Configuration & Configuration File (Extra)

> Settings to define how a tool behaves; stored in a config file like vite.config.js.

### 24. JSX (Extra)

> HTML-like syntax inside JS; converted to React.createElement behind the scenes.


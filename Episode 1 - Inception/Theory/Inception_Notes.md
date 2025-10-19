# 📘 Namaste React - Episode Inception Notes

## 🧩 What is React?
**React** is a JavaScript library used for building **dynamic, fast, and interactive user interfaces (UIs)**.  
It allows developers to create reusable components that update automatically when data changes.

➡ Example: When you like a YouTube video, only that section updates — not the whole page.

---

## 🚀 Topics Covered

1. What is React?
2. Dynamic User Interfaces (UIs)
3. Single Page Applications (SPAs)
4. Component-Based Architecture
5. Cross-Origin
6. Emmet
7. Library vs Framework
8. CDN (Content Delivery Network)
9. Why React is called React?
10. Crossorigin in Script Tag
11. React vs ReactDOM
12. react.development.js vs react.production.js
13. Async and Defer

---

## 🧠 Explanations

### 1. What is React?
- React is a **JavaScript library** developed by **Facebook (Meta)**.
- It helps in creating **dynamic UIs** that update efficiently.
- It uses a **Virtual DOM** to make updates faster and smoother.
- React is **component-based**, meaning each part of the UI is a small, reusable piece of code.

---

### 2. Dynamic User Interfaces (UIs)
A **Dynamic UI** changes based on user actions or data updates without reloading the page.  
➡ Example: When you comment or like a post, the change happens instantly.

---

### 3. Single Page Applications (SPAs)
A **Single Page Application** loads one main HTML file, and React updates parts of the page dynamically.  
➡ Example: Gmail or Netflix — only content updates, not the entire page.

---

### 4. Component-Based Architecture
- Think of components like **LEGO blocks**.  
- Each block (component) does one job — such as header, footer, or button.
- You can reuse them anywhere in your app.

---

### 5. Cross-Origin
When your webpage loads files (like images, CSS, or scripts) from **a different domain**, it’s called **cross-origin** access.  
React uses `crossorigin` in script tags to securely load scripts from a CDN.

---

### 6. Emmet
**Emmet** helps developers write HTML faster using short abbreviations.  
➡ Example:
```html
div.container>h1{Hello}
```
becomes:
```html
<div class="container">
  <h1>Hello</h1>
</div>
```

---

### 7. Library vs Framework
| Feature | Library | Framework |
|----------|----------|-----------|
| Control | You control the flow | Framework controls the flow |
| Example | React, Lodash | Angular, Django |
| Use | Pick and use what you need | Must follow its rules and structure |

---

### 8. CDN (Content Delivery Network)
A **CDN** delivers files (like React JS) faster from nearby servers.  
You can load React directly using CDN links instead of installing packages.

➡ Example:
```html
<script src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
```

---

### 9. Why React is called React?
React is called “React” because it **reacts** automatically to changes in data and updates the UI efficiently without full page reloads.

---

### 10. Crossorigin in Script Tag
The `crossorigin` attribute tells the browser that it’s okay to load files from other domains securely.

➡ Example:
```html
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
```

---

### 11. React vs ReactDOM
| React | ReactDOM |
|--------|-----------|
| Handles component logic, state, and creation | Handles rendering to the browser DOM |
| Example: `React.createElement()` | Example: `ReactDOM.createRoot()` |

---

### 12. react.development.js vs react.production.js
| File | Use |
|------|------|
| **react.development.js** | Used for development, includes helpful warnings |
| **react.production.js** | Used in production, optimized and smaller for speed |

---

### 13. Async and Defer
| Attribute | Description | When Script Runs |
|------------|--------------|------------------|
| **async** | Loads file asynchronously (parallel with HTML) | Runs as soon as downloaded |
| **defer** | Loads in background but executes **after HTML parsing** | Runs after HTML is fully loaded |

➡ Example:
```html
<script async src="file.js"></script>
<script defer src="file.js"></script>
```

---

## ✅ Summary
In **Day 1 of Namaste React**, you learned:
- What React is and why it’s powerful
- Core concepts like SPA, components, CDN, and script handling
- The difference between React, ReactDOM, and script attributes

Keep revising these topics with small examples.  
React becomes easier when you understand *how it thinks*! ⚡

---

**Author:** Naveen Kumar R  
**GitHub:** [naveenkumar-ramesh2004](https://github.com/naveenkumar-ramesh2004)

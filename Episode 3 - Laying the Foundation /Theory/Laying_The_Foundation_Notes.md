
# 🚀 Episode 3 – Laying the Foundation

## 1. What is `JSX`?
`JSX` stands for **JavaScript XML**. It allows us to write HTML-like code directly inside JavaScript files.  
This makes React code more readable and easier to write.

🧠 **Example:**
```jsx
const element = <h1>Hello, React!</h1>;
```

Without JSX, the same thing would be:
```jsx
const element = React.createElement("h1", {}, "Hello, React!");
```

✅ JSX makes React development faster and cleaner.

---

## 2. Superpowers of `JSX`
JSX provides several powerful features:
- You can **embed JavaScript expressions** using `{}`.
- JSX prevents **cross-site scripting (XSS)** by default (sanitizes data).  
- Makes code more **declarative and structured**.  
- Helps with **component nesting** and **composition**.

🧠 **Example:**
```jsx
const name = "Naveen";
const greet = <h2>Hello, {name}!</h2>;
```

---

## 3. `React.createElement()` vs `JSX`
| Feature | `React.createElement()` | `JSX` |
|----------|--------------------------|--------|
| Syntax | Verbose and complex | Simple and readable |
| Readability | Low | High |
| Common Usage | Internal (under the hood) | Developer-facing |

🧠 JSX is a **syntactic sugar** for `React.createElement()`.

---

## 4. Benefits of JSX
- Easier to **visualize UI structure**.
- **Integrates logic with UI** cleanly.
- Helps identify errors early during development.
- **Prevents injection attacks** by escaping unsafe values.

---

## 5. Behind the Scenes of JSX
JSX is not understood by browsers directly.  
It is **transpiled** (converted) by a tool (like **Babel** or **esbuild**) into regular JavaScript before execution.

🧩 Example:
```jsx
const heading = <h1>Namaste React!</h1>;
```
transpiles into:
```jsx
const heading = React.createElement("h1", {}, "Namaste React!");
```

---

## 6. Role of `type` Attribute in Script Tag
The `type` attribute in `<script>` tells the browser how to handle the script.

🧠 Common types:
- `type="text/javascript"` → Default JS file.  
- `type="module"` → For **ES Modules** (used in React/Vite).  
- `type="text/babel"` → Used when Babel transpiles JSX in-browser.

🧩 **Example:**
```html
<script type="module" src="main.js"></script>
```

---

## 7. What package does Vite use as Transpiler?
Vite uses `esbuild` internally — a super-fast bundler and transpiler written in **Go**.  
It’s much faster than Babel and works perfectly for modern projects.

---

## 8. Why use `()` in JSX?
Parentheses `()` are used when returning **multi-line JSX** in a function to improve readability and avoid automatic semicolon insertion.

🧩 **Example:**
```jsx
return (
  <div>
    <h1>Hello</h1>
    <p>Welcome!</p>
  </div>
);
```

---

## 9. Components
Components are **reusable pieces of UI**.  
They can be **Functional Components** or **Class Components**.

---

### 🧩 Functional Components
These are JavaScript functions that return JSX.

```jsx
function Welcome() {
  return <h1>Hello, World!</h1>;
}
```
✅ Simple, fast, and commonly used.

---

### 🏛 Class Components
Older style (before React 16.8).  
They use ES6 classes and `render()` method.

```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, Class Component!</h1>;
  }
}
```

---

## 10. Naming Convention of Components
- Component names **must start with a capital letter**.
---

## ❌ Wrong (Will break React)

```jsx
function header() {
  return <h1>Hello</h1>;
}
```

### Why this is wrong ❌

* React treats `header` as a **normal HTML tag**
* It is NOT treated as a React component

---

## ✅ Correct (React Component)

```jsx
function Header() {
  return <h1>Hello</h1>;
}
```

### Why this works ✅

* `Header` starts with a **capital letter**
* React understands it as a **custom React component**

---

## 🧠 How React decides (Important Concept)

| Name Style                  | React Treats It As |
| --------------------------- | ------------------ |
| lowercase (`div`, `header`) | HTML element       |
| Capitalized (`Header`)      | React component    |

---

- Files usually match the component name.  
Example: `Header.js` contains `Header` component.

```jsx
function Header() { ... }
```

---

## 11. `React Element`
A `React Element` is an object representation of what you want to show in the UI.

🧩 Example:
```jsx
const heading = <h1>Hello React!</h1>;
```

Behind the scenes:
```js
{ type: 'h1', props: { children: 'Hello React!' } }
```

---

## 12. Rendering Elements and Components
We use `ReactDOM.createRoot()` and `render()` to display elements.

```jsx
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
```

---

## 13. Component Composition
You can combine multiple components inside one another.

🧩 **Example:**
```jsx
function Header() { return <h1>Header</h1>; }
function App() {
  return (
    <div>
      <Header />
      <p>Welcome to my app!</p>
    </div>
  );
}
```

---

## 14. Inserting React Elements into JSX
You can embed **React Elements** inside JSX using `{}`.

🧩 Example:
```jsx
const element = <h2>This is a heading</h2>;
const container = <div>{element}</div>;
```

---

## 15. Sanitizing Data in JSX
JSX automatically **escapes dangerous values**, preventing injection attacks.

🧩 Example:
```jsx
const userInput = "<script>alert('Hacked!')</script>";
const safeOutput = <p>{userInput}</p>; // React shows it as plain text
```

✅ This makes JSX **secure by default**.

---

## 16. Composing Components
Combining multiple smaller components to build complex UIs.

🧩 Example:
```jsx
function Header() { return <h1>Logo</h1>; }
function Body() { return <p>Welcome!</p>; }
function App() { return (<><Header /><Body /></>); }
```

---

## 17. Difference between `{TitleComponent}`, `{<TitleComponent/>}`, and `{<TitleComponent></TitleComponent>}`
| Syntax | Meaning |
|--------|----------|
| `{TitleComponent}` | Refers to the **component function** itself (not executed). |
| `{<TitleComponent />}` | Executes and **renders the component**. |
| `{<TitleComponent></TitleComponent>}` | Same as above; used when the component wraps children. |

🧠 Example:
```jsx
const TitleComponent = () => <h1>React Rocks!</h1>;

<App>
  {<TitleComponent />} {/* Correct */}
</App>
```

---

🎯 **Summary**
- JSX makes React expressive and powerful.
- Functional components are the heart of modern React.
- Composition helps in building reusable and scalable UI.
- JSX is secure and prevents XSS.
- Tools like Vite and esbuild make React development blazing fast! 🚀

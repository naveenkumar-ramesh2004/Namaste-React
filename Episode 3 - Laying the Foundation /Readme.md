# ⚡ Episode 3: Laying the Foundation

In this episode, I explored the **core building blocks of React** — from JSX to Components — understanding how React truly works behind the scenes. This laid the foundation for creating clean, structured, and dynamic user interfaces.

---

## 🧠 Topics Covered

- JSX and its Superpowers ⚡  
- `React.createElement()` vs JSX  
- Benefits and Behind-the-Scenes of JSX  
- Role of `type` attribute in `<script>` tag  
- Transpilers in Vite and Babel’s role  
- Why we use `()` in JSX  
- Components in React  
  - Functional Components  
  - Class Components  
  - Naming Conventions for Components  
- React Element and Rendering Process  
- Component Composition  
- Using React Elements inside JSX  
- Data Sanitization in JSX with `{}`  
- Composing Components  
- Difference between `{TitleComponent}`, `{<TitleComponent />}`, and `{<TitleComponent></TitleComponent>}`  

---

## 🚀 Key Takeaways

- JSX makes React code cleaner, readable, and developer-friendly.  
- Functional Components are the modern way to build UI blocks.  
- Every JSX element is converted to a `React.createElement()` call.  
- React automatically sanitizes data in `{}` to prevent XSS attacks.  
- Component Composition improves reusability and modular design.  

---

## 💡 Personal Note

This episode helped me connect the dots between **React’s syntax and its underlying logic**. I now understand how JSX compiles, how components render, and why React’s structure is so powerful. A strong foundation to build bigger things ahead! 💪

---

## Coding Assignment:
- Create a `Nested header Element` using `React.createElement`(h1,h2,h3 inside a div with class "title")
    - Create the `same element using JSX`
    - Create a `functional component of the same with JSX`
    - `Pass attribute` into the tag in `JSX`
    - `Composition of Component` (Add a component inside another)
    - `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX.

- Create a `Header Component` from scratch using `Functional Component` with JSX
    - Add a `Logo on Left`
    - Add a `search bar in middle`
    - Add `User icon on right`
    - Add `CSS to make it look nice`

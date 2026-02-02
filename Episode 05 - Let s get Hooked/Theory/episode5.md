
# 🚀 Episode 5 – React State & Project Logic

## 1. File & Folder Structure in React

### Why it matters
A clean file structure makes the project:
- Easy to understand
- Easy to scale
- Easy to debug

### Common structure
```
src/
 ├── components/
 │    ├── Header.js
 │    ├── Body.js
 │    ├── RestaurantCard.js
 ├── utils/
 │    ├── mockData.js
 ├── App.js
 └── main.jsx
```

🧠 **Real-world idea:**  
Like arranging files in folders on your laptop — documents, photos, videos all separated.

---

## 2. Types of Import & Export

### Named Export
```js
export const Title = () => {};
import { Title } from "./Title";
```

### Default Export
```js
export default Header;
import Header from "./Header";
```

📌 Rule:
- One **default export** per file
- Multiple **named exports** allowed

---

## 3. State Variable – `useState`

### Why we need state
Normal variables don’t update the UI when data changes.  
**State** tells React: “Something changed — re-render the UI.”

### Example
```jsx
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
};
```

🧠 **Real-world example:**  
Like a TV remote — pressing a button instantly changes the screen.

---

## 4. Project Rating Filter

### What it does
Filters restaurants based on rating (e.g., show only rating > 4).

### Example Logic
```jsx
const filteredList = restaurants.filter(
  (res) => res.rating > 4
);
setRestaurantList(filteredList);
```

📌 Uses:
- `useState`
- `Array.filter()`

---

## 5. Restaurant Filter Feature

### Purpose
Allows users to search or filter restaurants dynamically.

### Example (Search Filter)
```jsx
const searchHandler = () => {
  const filteredData = restaurantList.filter((res) =>
    res.name.toLowerCase().includes(searchText.toLowerCase())
  );
  setRestaurantList(filteredData);
};
```

🧠 **Real-world example:**  
Like searching food in Swiggy/Zomato.

---

## 🎯 Key Takeaways

- File structure improves maintainability
- Import/export controls code sharing
- `useState` is the heart of interactivity
- Filters make UI dynamic and user-friendly
- React apps are **data-driven**

---

✨ This episode helped me understand how real React apps manage data and UI together.

import React, { useState } from "react";
import Header from "./components/Header";
import ShoppingList from "./components/ShoppingList";
import ItemForm from "./components/ItemForm";
import "./App.css";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [items, setItems] = useState([
    { id: 1, name: "Milk", category: "Dairy", inCart: false },
    { id: 2, name: "Bread", category: "Bakery", inCart: false },
    { id: 3, name: "Eggs", category: "Dairy", inCart: false },
  ]);

  function handleToggleMode() {
    setIsDarkMode((prevMode) => !prevMode);
  }

  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  function handleToggleCart(itemId) {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, inCart: !item.inCart } : item
      )
    );
  }

  return (
    <div className={isDarkMode ? "dark" : "light"}>
      <Header isDarkMode={isDarkMode} onToggleMode={handleToggleMode} />
      <ItemForm onAddItem={handleAddItem} />
      <ShoppingList items={items} onToggleCart={handleToggleCart} />
    </div>
  );
}

export default App;

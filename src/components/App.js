import React, { useState } from "react";
import Filter from "./Filter";
import ShoppingList from "./ShoppingList";
import ItemForm from "./ItemForm";
import itemsData from "../data/items";

function App() {
  const [items, setItems] = useState(itemsData);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  function handleAddItem(newItem) {
    setItems([...items, newItem]); // Update state correctly
  }

  return (
    <div className="App">
      <h1>Shopping List</h1>
      <ItemForm onItemFormSubmit={handleAddItem} />
      <Filter
        search={search}
        onSearchChange={setSearch}
        category={category}
        onCategoryChange={setCategory}
      />
      <ShoppingList items={items} search={search} category={category} />
    </div>
  );
}

export default App;

import React from "react";

function Filter({ search, onSearchChange, category, onCategoryChange }) {
  return (
    <div className="Filter">
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)} // Ensure callback is called correctly
      />
      <select
        value={category}
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Meat">Meat</option>
        <option value="Bakery">Bakery</option>
      </select>
    </div>
  );
}

export default Filter;

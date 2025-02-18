import React from "react";
import Item from "./Item";


function Filter({ onCategoryChange, search, onSearchChange ,items}) {

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="Filter">
      <input type="text"
       name="search" 
       placeholder="Search..."
       value={search}
       onChange={onSearchChange}/>

       <ul> {filteredItems.map((item) =>
          <li key={item.id}> {item.name} </li> 
          )}
        </ul>

      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;

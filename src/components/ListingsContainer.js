
import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({itemListings, onHandleRemove, searchItem, searchTerm, sortItem}) {

    const searchedItem = itemListings.filter(item => 
    item.description.toLowerCase().includes(searchTerm.toLowerCase()))
    
    const filteredItem = searchedItem.filter(item => 
      item.location.toLowerCase().includes(sortItem.toLowerCase()))
  
    const sortedItem = filteredItem.sort((item1, item2) => item1.location.localeCompare(item2.location))
    
  const cards = sortedItem.map(item => 
    <ListingCard key={item.id} {...item} onHandleRemove= {onHandleRemove}/>)
  return (
    <main>
      <ul className="cards">
       {cards}
      </ul>
    </main>
  );
}

export default ListingsContainer;

import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({itemListings, onHandleRemove, searchItem}) {

  const searchedItem = itemListings.filter(item => 
    item.description.toLowerCase().includes(searchItem.toLowerCase()))

  const cards = searchedItem.map(item => 
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
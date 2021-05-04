import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, onHandleRemove, search, sort}) {


  function handleSearch(search){
    console.log(search)
     const searchUpdate = listings.filter(listing =>
      listing.description.toLowerCase().includes(search.toLowerCase()))
      
  }

  const filteredList = listings.filter(listing => listing.location.toLowerCase().includes(sort.toLowerCase()))
  // console.log(filteredList)

  const sortedList = filteredList.sort((listing1, listing2) => 
      listing1.location.localeCompare(listing2.location))

    // console.log(sortedList)
    const listingObj = sortedList.map(listing => 
      <ListingCard key={listing.id} image={listing.image} description={listing.description} 
          location={listing.location} id={listing.id} onHandleRemove={onHandleRemove}/>
      )

  return (
    <main>
      <ul className="cards">
        {listingObj}
      </ul>
    </main>
  );
}

export default ListingsContainer;

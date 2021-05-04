import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const[listings, setListings] = useState([])
  const[search, setSearch] = useState(" ")
  const [sort, setSort] = useState('')


  useEffect(()=> {

    fetch('http://localhost:6001/listings')
    .then(res => res.json())
    .then(listingData => {
      setListings(listingData)
    })
  }, [])

  function handleRemoveListing(listingObjId){
    
     const updatedListing = listings.filter(listing => 
      listing.id !== listingObjId)
      setListings(updatedListing)
  }

  function handleFormSubmit(newObj){
     setListings([...listings, newObj])
  }

  function handleSearch(search){    
    const updatedSearchList = listings.filter(listing =>
        (listing.description.toLowerCase() === search.toString().toLowerCase())
      )
      setListings(updatedSearchList)
  }
 
  

  return (
    <div className="app">
      <Header search onHandleSearch={handleSearch} search={search} setSearch={setSearch} 
        sort={sort} setSort={setSort} onHandleFormSubmit={handleFormSubmit}/>

      <ListingsContainer listings={listings} onHandleRemove={handleRemoveListing} 
       onHandleSearch={handleSearch} search={search} sort={sort}/>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [items, setItems] = useState([])
  const [searchItem, setSearchItem] = useState('')

  useEffect(()=>{
      fetch('http://localhost:6001/listings')
      .then (res => res.json())
      .then(itemsData => {
        setItems(itemsData)
      })
  }, [])

  function handleRemoveCard(cardObjId){
    const updatedItems = items.filter(item =>
      item.id !== cardObjId)
      setItems(updatedItems)
     

  }

 


  return (
    <div className="app">
      <Header searchItem={searchItem} setSearchItem={setSearchItem}/>
      <ListingsContainer itemListings={items} onHandleRemove={handleRemoveCard} searchItem={searchItem}/>
    </div>
  );
}

export default App;
import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import NewItemForm from "./NewListingForm";
import SortItem from "./SortItem";

function App() {

  const [items, setItems] = useState([])
  const [searchItem, setSearchItem] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [sortItem, setSortItem] = useState('')

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
  function addNewItem(newItemObj){
      setItems([...items, newItemObj]) 
  }
 


  return (
    <div className="app"><br></br>
      <NewItemForm onAddNewItem={addNewItem} /><br></br><br></br>
      <Header searchItem={searchItem} setSearchItem={setSearchItem} setSearchTerm={setSearchTerm}/>
      <SortItem sortItem={sortItem} setSortItem={setSortItem}/>
      <ListingsContainer itemListings={items} onHandleRemove={handleRemoveCard} searchItem={searchItem} searchTerm={searchTerm} sortItem={sortItem}/>
    </div>
  );
}

export default App;
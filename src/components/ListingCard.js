
import React, { useState } from "react";

function ListingCard({id, image, description, location, onHandleRemove }) {
  const[isFavorite, setIsFavorite] = useState(false)

  function handleClick(){
    setIsFavorite(isFavorite => !isFavorite)
  }

  function handleRemove(){

    onHandleRemove(id)

    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE"
      })
    .then(res => res.json())
    
    
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isFavorite ? (
          <button className="emoji-button favorite active" onClick={handleClick}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleClick}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleRemove}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
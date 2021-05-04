import React, { useState } from "react";

function ListingCard({image, description, location, id, onHandleRemove}) {

   const[favorite, setFavorite] = useState(true)

   function handleClick(){
     setFavorite((favorite) => !favorite)
   }

   function handleRemove(){
      onHandleRemove(id)
      fetch(`http://localhost:6001/listings/${id}`, {
        method: 'DELETE',
      })
      .then(res => res.json())
      .then(data => console.log(data))
   }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorite ? (
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

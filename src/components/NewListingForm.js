
import React, { useState } from 'react';

function NewListingForm({onHandleFormSubmit}){
    const[description, setDescription]= useState('')
    const[image, setImage]= useState('')
    const[location, setLocation]= useState('')

    function handleSubmit(e){
        e.preventDefault()
        const newObj = {
            description,
            image,
            location
        }
        fetch('http://localhost:6001/listings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newObj)
        })
        .then(r => r.json())
        .then(listingData =>{
            onHandleFormSubmit(listingData)
        })
        setDescription(" ")
        setImage(" ")
        setLocation(" ")
        
    }

    return(

    <div className="searchbar">
      <h4>New Listing</h4>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Listing description" value={description} onChange={(e)=>setDescription(e.target.value)}/>
        <input type="text" name="image" placeholder="Image URL" value={image} onChange={(e)=>setImage(e.target.value)}/>
        <input type="text" name="location" placeholder="Location" value={location} onChange={(e)=>setLocation(e.target.value)}/>
        <button type="submit">Add Listings</button>
      </form>
    </div>
    
    )

}
export default NewListingForm;


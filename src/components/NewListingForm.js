
import React, { useState } from 'react';

function NewItemForm({onAddNewItem}){
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    const [location, setLocation] = useState('')

    function handleFormSubmit(e){
        e.preventDefault()
        const newItem={
            description,
            image,
            location
        }
        fetch('http://localhost:6001/listings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newItem)
        })
        .then(res => res.json())
        .then(itemData => {
            onAddNewItem(itemData)
        })
        setDescription('')
        setImage('')
        setLocation('')
    }

    return(
        <div>
                    <h3>Add New Item!</h3>
            <form className="searchbar" onSubmit={handleFormSubmit}>
                <input
                    type="text"
                    name="description"
                    value={description}
                    onChange={(e)=> setDescription(e.target.value)}
                    placeholder="Enter a item's description..."
                    className="input-text"
                />
                <br />
                <input
                    type="text"
                    name="image"
                    value={image}
                    onChange={(e)=> setImage(e.target.value)}
                    placeholder="Enter a item's image URL..."
                    className="input-text"
                />
                <br />

                <input
                    type="text"
                    name="location"
                    value={location}
                    onChange={(e)=> setLocation(e.target.value)}
                    placeholder="Enter a item's Location..."
                    className="input-text"
                />
                <br />

                <input
                    type="submit"
                    name="submit"
                    value="Add New Item"
                    className="submit"
                />
            </form>
        </div>


    )
}
export default NewItemForm;


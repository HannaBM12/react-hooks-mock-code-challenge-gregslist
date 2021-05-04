
import React from 'react'

function SortItem({sortItem, setSortItem}){

    return(
    <>
      <label>Sort By Location</label>
      <input className="searchbar"
        type="text"
        id="search"
        placeholder="sort By Location"
        value={sortItem}
        onChange={(e) => setSortItem(e.target.value)}
        />
    </>
    )
}
export default SortItem;
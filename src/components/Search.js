import React from "react";
import NewListingForm from './NewListingForm'

function Search({onHandleSearch, setSearch, search, onHandleFormSubmit}) {
  

  function handleSubmit(e) {
    e.preventDefault();
    onHandleSearch(search)
  }

  return (
    <>
      <form className="searchbar" onSubmit={handleSubmit}>
        <input
          type="text"
          id="search"
          placeholder="search free stuff"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">🔍</button>
      </form>
      <NewListingForm onHandleFormSubmit={onHandleFormSubmit}/>
      </>
  );
}

export default Search;

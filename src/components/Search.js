import React from "react";

function Search({searchItem, setSearchItem, setSearchTerm}) {

  function handleSubmit(e) {
    e.preventDefault();
    setSearchTerm(searchItem);
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;

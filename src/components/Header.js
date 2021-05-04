import React from "react";
import Search from "./Search";

function Header({onHandleSearch, search, setSearch, sort, setSort, onHandleFormSubmit}) {

  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onHandleSearch={onHandleSearch} search={search} setSearch={setSearch} onHandleFormSubmit={onHandleFormSubmit}/>
      <label>Sort By Location:- </label>
      <input
        type="text"
        id="sort"
        placeholder="search by Location"
        value={sort}
        onChange={(e)=>setSort(e.target.value)}
      />
    </header>
  );
}

export default Header;

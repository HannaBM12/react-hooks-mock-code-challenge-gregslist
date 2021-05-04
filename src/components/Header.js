
import React from "react";
// import NewItemForm from "./NewListingForm";
import Search from "./Search";

function Header({searchItem, setSearchItem, setSearchTerm}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
    <Search searchItem={searchItem} setSearchItem = {setSearchItem} setSearchTerm={setSearchTerm}/>
    {/* <NewItemForm /> */}
    </header>
  );
}

export default Header;

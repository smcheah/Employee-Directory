import React from "react";
import "./style.css";

const Search = ({ search, onChangeHandler, handleSearch, handleReset }) => {
    return <div className="search">
        <label htmlFor="searchInput">Enter a search term:</label>
        <input type="search" name="search" id="searchInput" value={ search } onChange={ onChangeHandler } placeholder="search term" />
        <button onClick={ handleSearch }>Search</button>
        <button onClick={ handleReset }>Reset</button>
    </div>;
};

export default Search;
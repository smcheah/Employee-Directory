import React from "react";

const Search = ({ search, onChangeHandler, handleSearch }) => {
    return <>
        <label>Search by name, id, role or email</label>
        <input type="search" name="search" value={ search } onChange={ onChangeHandler } placeholder="search term" />
        <button onClick={ handleSearch }>search</button>
    </>;
};

export default Search;
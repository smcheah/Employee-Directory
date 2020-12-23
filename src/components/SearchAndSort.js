import React from "react";

const SearchAndSort = () => {
    return <form className="searchandfilter">

        <input type="search" name="search-term" id="search-term" placeholder="search term" />
        {/* filter and search by all fields */ }
        <button>search</button>
        <br />

        <label htmlFor="sort-by">Sort By</label>
        <div id="sort-by">
            <button value="name">Name</button>
            <button>Role</button>
            <button>D.O.B</button>
            <button>asc</button>
            <button>desc</button>
        </div>

        <button type="submit">Submit</button>

    </form>;
};

export default SearchAndSort;

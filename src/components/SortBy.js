import React from "react";

const SortBy = ({ sortBy, sortByDOB }) => {
    return <>
        <label htmlFor="sort-by">Sort By</label>
        <div id="sort-by">
            <button onClick={ e => sortBy("name", e) }>Name</button>
            <button onClick={ e => sortBy("role", e) }>Role</button>
            <button onClick={ sortByDOB }>D.O.B</button>
            <button onClick={ e => sortBy("gender", e) }>Gender</button>
        </div>
    </>;
};

export default SortBy;
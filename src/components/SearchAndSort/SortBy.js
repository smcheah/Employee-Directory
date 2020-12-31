import React from "react";
import "./style.css";

const SortBy = ({ sortByNum, sortBy, sortByDOB }) => {
    return <div className="sort-by">
        <label>Sort by:</label>
        <button onClick={ sortByNum }>ID</button>
        <button onClick={ e => sortBy("name", e) }>Name</button>
        <button onClick={ e => sortBy("role", e) }>Role</button>
        <button onClick={ e => sortBy("gender", e) }>Gender</button>
        <button onClick={ sortByDOB }>Date of birth</button>
    </div>;
};

export default SortBy;
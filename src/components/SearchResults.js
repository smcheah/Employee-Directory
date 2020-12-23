import React from "react";

const SearchResults = ({ employeesList }) => {


    return <ul>
        { employeesList.map(({ name, image, role, gender, dateOfBirth, email }) => (
            <li key={ image } onClick={ showModal }>
                <div>{ name }</div>
                <div>{ role }</div>
                <div>{ gender }</div>
                <div>{ dateOfBirth }</div>
                <div>{ email }</div>
            </li>
        )) }
    </ul>;
};

export default SearchResults;
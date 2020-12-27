import React, { useState } from "react";
import EmployeeModal from "./EmployeeModal/EmployeeModal";

const SearchResults = ({ employeesList }) => {

    const [modal, setModal] = useState({
        isDisplayed: false,
        employeeInfo: ""
    });

    const handleShowModal = (data, e) => {
        e.preventDefault()
        setModal({ isDisplayed: true, employeeInfo: data });

    };
    const handleCloseModal = (e) => {
        e.preventDefault()
        setModal({ isDisplayed: false });
    };

    return <div>
        <EmployeeModal
            isDisplayed={ modal.isDisplayed }
            employeeInfo={ modal.employeeInfo }
            handleCloseModal={ handleCloseModal } />
            
        <ul>
            { employeesList.map(({ name, id, image, role, gender, dateOfBirth, email }) => (
                <li key={ id } onClick={ (e) => handleShowModal({ name, image, role, gender, dateOfBirth, email }, e) }>
                    <div>{ name }</div>
                    <div>{ image }</div>
                    <div>{ role }</div>
                    <div>{ gender }</div>
                    <div>{ dateOfBirth }</div>
                    <div>{ email }</div>
                </li>
            )) }
        </ul>;
    </div>;

};

export default SearchResults;
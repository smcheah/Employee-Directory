import React from "react";
// import "./style.css"

const EmployeeList = ({ handleShowModal, results }) => {
    return <ul>
        { results.employeeList.map(({ name, id, image, role, gender, dateOfBirth, email }) => (
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
};

export default EmployeeList;
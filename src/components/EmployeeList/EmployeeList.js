import React from "react";
// import "./style.css"

const EmployeeList = ({ handleShowModal, results }) => {
    const { name, id, image, role, gender, dateOfBirth, email } = results;

    return <li key={ id } onClick={ (e) => handleShowModal({ name, image, role, gender, dateOfBirth, email }, e) }>
        {/* <div>{ id }</div> */ }
        <div>{ name }</div>
        <div>{ image }</div>
        <div>{ role }</div>
        <div>{ gender }</div>
        <div>{ dateOfBirth }</div>
        <div>{ email }</div>
    </li>;

};

export default EmployeeList;
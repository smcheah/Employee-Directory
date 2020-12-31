import React from "react";
import "./style.css";

const EmployeeList = ({ handleShowModal, results }) => {
    const { name, id, image, role, gender, dateOfBirth, email } = results;

    return <tr className="employee" key={ id } onClick={ (e) => handleShowModal({ name, image, role, gender, dateOfBirth, email }, e) }>
        <td>{ id }</td>
        <td>{ name }</td>
        <td>{ role }</td>
        <td>{ gender }</td>
        <td>{ dateOfBirth }</td>
        <td>{ email }</td>
    </tr>;

};

export default EmployeeList;
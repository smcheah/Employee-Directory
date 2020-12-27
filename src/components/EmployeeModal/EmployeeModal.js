import React from "react";
import "./style.css";

const EmployeeModal = ({ isDisplayed, employeeInfo, handleCloseModal }) => {

    const toggleModal = isDisplayed ? "modal display-block" : "modal display-none";

    const { name, image, role, gender, dateOfBirth, email } = employeeInfo;

    return <div className={ toggleModal }>
        <div className="modal-main">
            <h1>{ name }</h1>
            <img src={ image } alt="employee portrait" />

            <p>hello world</p>
            <button onClick={ handleCloseModal }>close</button>
        </div>
    </div>;
};

export default EmployeeModal;
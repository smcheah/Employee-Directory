import React from "react";
import "./style.css";

const EmployeeModal = ({ isDisplayed, employeeInfo, handleCloseModal }) => {
    let toggleModal;

    if (isDisplayed) {
        toggleModal = "modal display-block";

        const { name, image, role, gender, dateOfBirth, email } = employeeInfo;

        return <div className={ toggleModal }>
            <div className="modal-main">
                <button onClick={ handleCloseModal }>close</button>
                <img src={ image } alt="employee portrait" />

                <h1>{ name }</h1>
                <p>{ role }</p>

                <p>Gender: { gender }</p>
                <p>Date of birth: { dateOfBirth }</p>

                <p>Contact: { email }</p>

                <p>LinkedIn</p>
            </div>
        </div>;
    }

    toggleModal = "modal display-none";
    return null;
};

export default EmployeeModal;
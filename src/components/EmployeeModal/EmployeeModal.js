import React from "react";
import "./style.css";

const EmployeeModal = ({ isDisplayed, employeeInfo, handleCloseModal }) => {
    let toggleModal;

    if (isDisplayed) {
        toggleModal = "modal display-block";

        const { id, name, image, role, gender, dateOfBirth, email } = employeeInfo;

        return <div className={ toggleModal }>
            <div className="modal-main">
                <div className="modal-header">
                    <h1>{ name }</h1>
                    <p>#{ id }</p>
                </div>
                <div className="modal-portrait">
                    <img src={ image } alt="employee portrait" />
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
                </div>
                <div className="modal-info">
                    <p>{ role }</p>
                    <p>Gender: { gender }</p>
                    <p>Date of birth: { dateOfBirth }</p>
                    <p>Contact: { email }</p>
                </div>
                <button onClick={ handleCloseModal } className="modal-close-button">close</button>
            </div>
        </div>;
    }

    toggleModal = "modal display-none";
    return null;
};

export default EmployeeModal;
import React, { useState, useEffect } from "react";
import EmployeeModal from "./EmployeeModal/EmployeeModal";
import EmployeeList from "./EmployeeList/EmployeeList";

const MainPage = ({ employees }) => {

    const [modal, setModal] = useState({
        isDisplayed: false,
        employeeInfo: ""
    });
    const [filtered, setFiltered] = useState({
        employeeList: employees
    });

    useEffect(() => {
        console.log("filtered state: ", filtered);
    }, [filtered]);

    //modal
    const handleShowModal = (data, e) => {
        e.preventDefault();
        setModal({ isDisplayed: true, employeeInfo: data });

    };
    const handleCloseModal = (e) => {
        e.preventDefault();
        setModal({ isDisplayed: false });
    };

    // search and sort
    const sortBy = (char, e) => {
        e.preventDefault();

        employees.sort(function (a, b) {
            let charA = a[char].toUpperCase();
            let charB = b[char].toUpperCase();
            if (charA < charB) return -1;
            if (charA > charB) return 1;
            return 0;
        });

        setFiltered({ employeeList: employees });
    }; 

    const sortByDOB = (e) => {
        e.preventDefault();

        // sort by value
        employees.sort(function (a, b) {
            let arrA = a.dateOfBirth.split("/");
            let arrB = b.dateOfBirth.split("/");
            let dateA = new Date(arrA[2], arrA[1], arrA[0]);
            let dateB = new Date(arrB[2], arrB[1], arrB[0]);

            return dateA - dateB;
        });

        setFiltered({ employeeList: employees });
    };

    return <div>

        <form className="searchandfilter">

            <label>Search by name, id, role or email</label>
            <input type="search" name="search-term" id="search-term" placeholder="search term" />
            <button>search</button>
            <br />

            <label htmlFor="sort-by">Sort By</label>
            <div id="sort-by">
                <button onClick={ e => sortBy("name", e) }>Name</button>
                <button onClick={ e => sortBy("role", e) }>Role</button>
                <button onClick={ sortByDOB }>D.O.B</button>
                <button onClick={ e => sortBy("gender", e) }>Gender</button>
            </div>

            <button type="submit">Submit</button>

        </form>

        <EmployeeModal
            isDisplayed={ modal.isDisplayed }
            employeeInfo={ modal.employeeInfo }
            handleCloseModal={ handleCloseModal } />

        <EmployeeList
            handleShowModal={ handleShowModal }
            results={ filtered } />
    </div>;

};

export default MainPage;
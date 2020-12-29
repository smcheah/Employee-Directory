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
    useEffect(() => {
        console.log("filtered state: ", filtered);
    }, [filtered]);

    const sortByName = (e) => {
        e.preventDefault();
        let tempArr = employees;
        tempArr.sort(function (a, b) {
            let nameA = a.name.toUpperCase();
            let nameB = b.name.toUpperCase();
            if (nameA < nameB) return -1;
            if (nameA > nameB) return 1;
            return 0;
        });

        setFiltered({ employeeList: tempArr });

        // sort by value
        // items.sort(function (a, b) {
        //     return a.value - b.value;
        // });
    };

    const sortByRole = (e) => {
        e.preventDefault();
        let tempArr = employees;
        tempArr.sort(function (a, b) {
            let roleA = a.role.toUpperCase();
            let roleB = b.role.toUpperCase();
            if (roleA < roleB) return -1;
            if (roleA > roleB) return 1;
            return 0;
        });

        setFiltered({ employeeList: tempArr });

        // sort by value
        // items.sort(function (a, b) {
        //     return a.value - b.value;
        // });
    };

    return <div>

        <form className="searchandfilter">

            <label>Search by name, id, role or email</label>
            <input type="search" name="search-term" id="search-term" placeholder="search term" />
            <button>search</button>
            <br />

            <label htmlFor="sort-by">Sort By</label>
            <div id="sort-by">
                <button onClick={ e => sortByName(e) }>Name</button>
                <button onClick={ e => sortByRole(e) }>Role</button>
                {/* <button onClick={ sortByDOB }>D.O.B</button>
                <button onClick={ sortByDOB }>D.O.B</button>
                <button onClick={ sortByAsc }>asc</button>
                <button onClick={ sortByDesc }>desc</button> */}
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
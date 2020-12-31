import React, { useState } from "react";
import EmployeeModal from "./EmployeeModal/EmployeeModal";
import EmployeeList from "./EmployeeList/EmployeeList";



const MainPage = ({ employees }) => {

    const [modal, setModal] = useState({
        isDisplayed: false,
        employeeInfo: ""
    });
    const [sortedList, setSortedList] = useState({
        employeeList: employees
    });
    const [sortToggle, setSortToggle] = useState(false);
    const [search, setSearch] = useState("");

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
    const sortFrom = (a, b, char, from, to) => {
        let charA = a[char].toUpperCase();
        let charB = b[char].toUpperCase();
        if (charA < charB) return from;
        if (charA > charB) return to;
        return 0;
    };

    const sortBy = (char, e) => {
        e.preventDefault();

        if (sortToggle === false) {
            setSortToggle(true);
            sortedList.employeeList.sort(function (a, b) {
                return sortFrom(a, b, char, -1, 1);
            });
        } else {
            setSortToggle(false);
            sortedList.employeeList.sort(function (a, b) {
                return sortFrom(a, b, char, 1, -1);
            });
        }
        setSortedList({ employeeList: sortedList.employeeList });
    };

    const sortByDOB = (e) => {
        e.preventDefault();

        // sort by value
        if (sortToggle === false) {
            setSortToggle(true);
            sortedList.employeeList.sort(function (a, b) {
                let arrA = a.dateOfBirth.split("/");
                let arrB = b.dateOfBirth.split("/");
                let dateA = new Date(arrA[2], arrA[1], arrA[0]);
                let dateB = new Date(arrB[2], arrB[1], arrB[0]);

                return dateA - dateB;
            });
        } else {
            setSortToggle(false);
            sortedList.employeeList.sort(function (a, b) {
                let arrA = a.dateOfBirth.split("/");
                let arrB = b.dateOfBirth.split("/");
                let dateA = new Date(arrA[2], arrA[1], arrA[0]);
                let dateB = new Date(arrB[2], arrB[1], arrB[0]);

                return dateB - dateA;
            });
        }
        setSortedList({ employeeList: sortedList.employeeList });
    };

    const handleFilter = (data) => {
        const result = search.toUpperCase();
        const { name, id, role, gender, dateOfBirth, email } = data;

        if (name.toUpperCase() === result ||
            parseInt(id) === parseInt(search) ||
            role.toUpperCase() === result ||
            gender.toUpperCase() === result ||
            dateOfBirth === search ||
            email.toUpperCase() === result) {
            return true;
        } return false;
    };

    const handleSearch = async (e) => {
        e.preventDefault();
        setSearch(search);
        console.log(search);
        console.log(sortedList);

        const result = await sortedList.employeeList.filter(handleFilter);
        console.log(result);
        setSortedList({ employeeList: result });
    };

    const onChangeHandler = (e) => setSearch(e.target.value);

    const handleReset = (e) => {
        e.preventDefault();
        setSortedList({ employeeList: employees });
    };

    return <div>

        <form className="searchandsort">

            <label>Search by name, id, role or email</label>
            <input type="search" name="search" value={ search } onChange={ onChangeHandler } placeholder="search term" />
            <button onClick={ handleSearch }>search</button>
            <br />

            <label htmlFor="sort-by">Sort By</label>
            <div id="sort-by">
                <button onClick={ e => sortBy("name", e) }>Name</button>
                <button onClick={ e => sortBy("role", e) }>Role</button>
                <button onClick={ sortByDOB }>D.O.B</button>
                <button onClick={ e => sortBy("gender", e) }>Gender</button>
            </div>

            <button onClick={ handleReset }>reset</button>

        </form>

        <EmployeeModal
            isDisplayed={ modal.isDisplayed }
            employeeInfo={ modal.employeeInfo }
            handleCloseModal={ handleCloseModal } />

        {/* move loop to here */ }
        <EmployeeList
            handleShowModal={ handleShowModal }
            results={ sortedList } />
    </div>;

};

export default MainPage;
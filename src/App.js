import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import SearchAndSort from "./components/SearchAndSort";
import SearchResults from "./components/SearchResults";
// import EmployeeModal from "./components/EmployeeModal";
// import Footer from "./components/Footer";

import employeesList from "./data/employees.json";

// the table of contents
const App = () => {

    return <Router>
        <Navbar />
        <main>
            <SearchAndSort />
            <SearchResults { ...{ employeesList } } />
        </main>
        {/* <Footer /> */ }
    </Router >;
};

export default App;

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainPage from "./components/MainPage";
// import EmployeeModal from "./components/EmployeeModal";
// import Footer from "./components/Footer";

import employees from "./data/employees.json";

// the table of contents
const App = () => {

    return <Router>
        <Navbar />
        <MainPage { ...{ employees } } />
        {/* <Footer /> */ }
    </Router >;
};

export default App;

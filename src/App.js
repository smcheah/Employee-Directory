import React from "react";
import Navbar from "./components/Navbar";
import MainPage from "./components/MainPage";
import Footer from "./components/Footer";

import employees from "./data/employees.json";

// the table of contents
const App = () => {

    return <>
        <Navbar />
        <MainPage { ...{ employees } } />
        <Footer />
    </ >;
};

export default App;

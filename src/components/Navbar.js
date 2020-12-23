import React from "react";
import { Link } from "react-router-dom"; // link to home page, about, mission statement

const Navbar = () => {
    return <nav>
        <a href="/">HELLO </a>
        <Link to="/">COMPANY NAME</Link>
    </nav>;
};

export default Navbar;
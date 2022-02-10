import * as React from "react";
import { Link } from "gatsby";

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About CGM</Link>
                </li>
                <li>
                    <Link to="/personnel">Educational Personnel</Link>
                </li>
                <li>
                    <Link to="/students">Students</Link>
                </li>
                <li>
                    <Link to="/news">News Feed</Link>
                </li>
                <li>
                    <Link to="/events">Events & Activities</Link>
                </li>
                <li>
                    <Link to="/contact">Contact Us</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
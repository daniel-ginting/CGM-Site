import {Link} from "gatsby";
import * as React from "react";
import * as classes from "./NavBar.module.css";

const NavLinks = () => {
    return (
        <ul>
            <li>
                <Link to="/" className={classes.link}>Home</Link>
            </li>
            <li>
                <Link to="/about" className={classes.link}>About</Link>
            </li>
            <li>
                <Link to="/personnel" className={classes.link}>Personnel</Link>
            </li>
            <li>
                <Link to="/students" className={classes.link}>Students</Link>
            </li>
            <li>
                <Link to="/news" className={classes.link}>News</Link>
            </li>
            <li>
                <Link to="/events" className={classes.link}>Events</Link>
            </li>
            <li>
                <Link to="/contact" className={classes.link}>Contact</Link>
            </li>
        </ul>
    );
};

export default NavLinks;
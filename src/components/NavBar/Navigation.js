import * as React from "react";
import NavLinks from "./NavLinks";
import * as classes from "./NavBar.module.css";

const Navigation = () => {
    return (
        <nav className={classes.Navigation}>
            <NavLinks />
        </nav>
    );
};

export default Navigation;
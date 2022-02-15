import * as React from "react";
import * as classes from "./NavBar.module.css";
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";

const NavBar = () => {
    return (
        <div className={classes.NavBar}>
            {/*We add both navigation components here, but we show only one based on screen size. That is controlled in the NavBar.module.css media query at 1024px*/}
            <Navigation />
            <MobileNavigation />
        </div>
    );
};

export default NavBar;
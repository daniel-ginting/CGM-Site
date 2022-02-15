import * as React from "react";
import * as classes from "./NavBar.module.css";

const HamburgerButton = ({ hamburgerButtonClick, isMobNavOpen }) => {
    // Computed style css classes based on weather isMobNavOpen is true or false
    const div1Css = [
        classes.hamburgerButtonDiv,
        isMobNavOpen ? classes.hamburgerButtonDiv1 : ""
    ];
    const div2Css = [
        classes.hamburgerButtonDiv,
        isMobNavOpen ? classes.hamburgerButtonDiv2 : ""
    ];
    const div3Css = [
        classes.hamburgerButtonDiv,
        isMobNavOpen ? classes.hamburgerButtonDiv3 : ""
    ];

    return (
        <div onClick={hamburgerButtonClick}
            className={classes.HamburgerButton}>
            <div className={div1Css.join(" ")}></div>
            <div className={div2Css.join(" ")}></div>
            <div className={div3Css.join(" ")}></div>
        </div>
    );
};

export default HamburgerButton;
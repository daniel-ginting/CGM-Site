import * as React from "react";
import {useState, useEffect, useRef} from "react";
import useOutMobNavClick from "./useOutMobNavClick";
import NavLinks from "./NavLinks";
import * as classes from "./NavBar.module.css";
import HamburgerButton from "./HamburgerButton";

const MobileNavigation = () => {
    const [isMobNavOpen, setIsMobNavOpen] = useState(false);
    const sideBarRef = useRef(null);
    // We use useOutMobNavClick custom hook to determine if a click event happened outside opened mobile sidebar to close it. We pass the sideBar as a reference and isMobNavOpen to let it know that sideBar is open.
    const sideBarOutsideClick = useOutMobNavClick(sideBarRef, isMobNavOpen);

    // We use this hook to disable page scrolling if mobile sideBar is open.
    useEffect(() => {
        const body = document.querySelector(':root');
        body.style.overflowY = isMobNavOpen ? 'hidden' : 'auto';
    }, [isMobNavOpen]);

    // We use this hook along with our custom hook's returned value to close the sideBar if the user clicks outside the opened sideBar
    useEffect(() => {
        if (sideBarOutsideClick) {
            setIsMobNavOpen(!isMobNavOpen);
        }
    }, [sideBarOutsideClick]);

    // Computed CSS classes based on isMobNavOpen, for styling animation of moving the sideBar and showing the mobile overlay
    const mobileNavigationCss = [
        classes.MobileNavigation,
        isMobNavOpen? classes.MobileNavigationOpen : ""
    ];
    const mobileOverlayCss = [
        classes.mobileOverlay,
        isMobNavOpen? classes.mobileOverlayOpen : ""
    ];

    // Event handler for showing or hiding the sideBar
    const hamburgerButtonClick = () => {
        setIsMobNavOpen(!isMobNavOpen);
    }

    return (
        <>
            <HamburgerButton
                hamburgerButtonClick={hamburgerButtonClick}
                isMobNavOpen={isMobNavOpen}
            />
            {/*We use mobile overlay to add a fixed overlay behind opened mobile sidebar to grey out the background and disable it*/}
            <div className={mobileOverlayCss.join(" ")}></div>
            <nav
                ref={sideBarRef}
                className={mobileNavigationCss.join(" ")}
            >
                <NavLinks />
            </nav>
        </>
    );
};

export default MobileNavigation;
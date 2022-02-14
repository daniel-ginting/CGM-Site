import * as React from "react";
import {useState, useEffect, useRef} from "react";
import useOutMobNavClick from "./useOutMobNavClick";
import NavLinks from "./NavLinks";
import * as classes from "./NavBar.module.css";
import HamburgerButton from "./HamburgerButton";

const MobileNavigation = () => {
    const [isMobNavOpen, setIsMobNavOpen] = useState(false);
    const sideBarRef = useRef(null);
    const sideBarOutsideClick = useOutMobNavClick(sideBarRef, isMobNavOpen);

    useEffect(() => {
        const body = document.querySelector(':root');
        body.style.overflowY = isMobNavOpen ? 'hidden' : 'auto';
    }, [isMobNavOpen]);

    useEffect(() => {
        if (sideBarOutsideClick) {
            setIsMobNavOpen(!isMobNavOpen);
        }
    }, [sideBarOutsideClick]);

    const mobileNavigationCss = [
        classes.MobileNavigation,
        isMobNavOpen? classes.MobileNavigationOpen : ""
    ];
    const mobileOverlayCss = [
        classes.mobileOverlay,
        isMobNavOpen? classes.mobileOverlayOpen : ""
    ];

    const hamburgerButtonClick = () => {
        setIsMobNavOpen(!isMobNavOpen);
    }

    return (
        <>
            <HamburgerButton
                hamburgerButtonClick={hamburgerButtonClick}
                isMobNavOpen={isMobNavOpen}
            />
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
import * as React from "react";
import { useState, useEffect } from "react";
import * as classes from "./ScrollTopButton.module.css";
import { FaAngleUp } from "@react-icons/all-files/fa/FaAngleUp";

// showBelow is the scrolled pixels of Y axis in the page. We want to show the ScrollTopButton after we scroll the amount contained in showBelow
const ScrollTopButton = ({ showBelow }) => {
    const [isButtonShown, setIsButtonShown] = useState(!showBelow);

    const handleScroll = () => {
        if (window.scrollY > showBelow) {
            if (!isButtonShown) {
                setIsButtonShown(true);
            }
        } else {
            if (isButtonShown) {
                setIsButtonShown(false);
            }
        }
    };

    const handleClick = () => {
        window[`scrollTo`]({ top: 0, behavior: `smooth` });
    };

    useEffect(() => {
        if (showBelow) {
            window.addEventListener(`scroll`, handleScroll);

            return () => window.removeEventListener(`scroll`, handleScroll);
        }
    });

    return (
        <>
            {
                isButtonShown &&
                <div
                    className={classes.toTopButton}
                    onClick={handleClick}
                >
                    <FaAngleUp />
                </div>
            }
        </>
    );
};

export default ScrollTopButton;

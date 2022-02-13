import { useState, useEffect } from "react";

const useOutMobNavClick = (ref, isMobNavOpen) => {
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (isMobNavOpen && (ref.current && !ref.current.contains(event.target))) {
                setIsClicked(true);
            } else {
                setIsClicked(false);
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [ref, isMobNavOpen]);

    return isClicked;
};

export default useOutMobNavClick;
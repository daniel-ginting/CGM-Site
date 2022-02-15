import * as React from "react";
import "normalize.css";
import * as classes from "./Layout.module.css";
import NavBar from "../NavBar/NavBar";
import Logo from "../Logo/Logo";
import ScrollTopButton from "../ScrollTopButton/ScrollTopButton";

// pageTitle and children are destructured from props received from pages using Layout.js template
const Layout = ({pageTitle, children}) => {
    return (
        <>
            <header className={classes.headerSection}>
                <Logo />
                <NavBar/>
            </header>
            {/*<title> is used to add description on the browser's tab*/}
            <title>{`${pageTitle} | CGM`}</title>
            <div className={classes.container}>
                <main className={classes.mainSection}>
                    <h1>{pageTitle}</h1>
                    <p>The purpose of this main element is testing height.</p>
                    {children}
                </main>
                <footer className={classes.footerSection}>
                    <h1>Test footer</h1>
                    <p>The purpose of this footer is testing height.</p>
                </footer>
            </div>
            <ScrollTopButton showBelow={250}/>
        </>
    );
};

export default Layout;
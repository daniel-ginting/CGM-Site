import * as React from "react";
import "normalize.css";
import * as classes from "./Layout.module.css";
import NavBar from "../NavBar/NavBar";

const Layout = ({ pageTitle, children }) => {
    return (
        <div>
            <title>{`${pageTitle} | CGM`}</title>
            <NavBar/>
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
    );
};

export default Layout;
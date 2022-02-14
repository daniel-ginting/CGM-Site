import * as React from "react";
import "normalize.css";
import * as classes from "./Layout.module.css";
import NavBar from "../NavBar/NavBar";
import Logo from "../Logo/Logo";

const Layout = ({pageTitle, children}) => {
    return (
        <>
            <header className={classes.headerSection}>
                <Logo />
                <NavBar/>
            </header>
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
        </>
        // <div className={classes.container}>
        //     <header className={classes.headerSection}>
        //         <Logo />
        //         <NavBar/>
        //     </header>
        //     <title>{`${pageTitle} | CGM`}</title>
        //     <main className={classes.mainSection}>
        //         <h1>{pageTitle}</h1>
        //         <p>The purpose of this main element is testing height.</p>
        //         {children}
        //     </main>
        //     <footer className={classes.footerSection}>
        //         <h1>Test footer</h1>
        //         <p>The purpose of this footer is testing height.</p>
        //     </footer>
        // </div>
    );
};

export default Layout;
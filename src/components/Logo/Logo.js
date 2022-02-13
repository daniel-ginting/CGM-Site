import * as React from "react";
import { Link } from "gatsby";
import * as classes from "./Logo.module.css";

const Logo = () => {
    return(
        <div className={classes.Logo}>
            <Link to="/" className={classes.logoLink}>
                <p className={classes.firstLine}>CGM</p>
                <p className={classes.secondLine}>school</p>
            </Link>
        </div>
    );
};

export default Logo;
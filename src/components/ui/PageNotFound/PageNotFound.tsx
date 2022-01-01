import React from 'react';
import classes from "./PageNotFound.module.scss"
import {HiOutlineEmojiSad} from "react-icons/hi"

const PageNotFound = () => {
    return (
        <div className={classes.Container}>
            <div>
                <div className={classes.Image}>
                    <HiOutlineEmojiSad/>
                </div>

                <h1> Page not found</h1>
                <p>The resource requested could not be found on this website.</p>
            </div>

        </div>
    );
};

export default PageNotFound;
import React, {FC} from 'react';
import classes from './Footer.module.scss';

const Footer: FC = () => {
    return (
        <footer className={classes.Container}>
            <div>
                <p>Domen Perko </p>
                <a href={"https://github.com/perkzen/computer_store"}>View source code on github</a>
                <p>Copyright © 2022 - All right reserved</p>
            </div>
        </footer>
    );
};

export default Footer;

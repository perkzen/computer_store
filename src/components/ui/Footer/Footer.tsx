import React, { FC } from 'react';
import classes from './Footer.module.scss';

const Footer: FC = () => {
  return (
    <footer className={classes.Container}>
      <div>
        <p>Domen Perko Industries Ltd. Providing reliable tech since 2020</p>
        <p>Copyright © 2021 - All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;

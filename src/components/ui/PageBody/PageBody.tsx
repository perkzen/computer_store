import React, { FC } from 'react';
import Navbar from '../Navbar/Navbar';
import classes from './PageBody.module.scss';
import Footer from '../Footer/Footer';
import classNames from 'classnames';
import { useLocation } from 'react-router-dom';
import { unprotectedRoutePaths } from '../../../routes';

const PageBody: FC = ({ children }) => {
  const location = useLocation();
  const productPage = location.pathname.includes(unprotectedRoutePaths.PRODUCT);
  return (
    <div
      className={classNames(classes.Container, {
        [classes.Spacer]: productPage,
      })}
    >
      <Navbar />
      <main
        className={classNames({
          [classes.ContentPadding]:
            location.pathname !== unprotectedRoutePaths.HOME,
        })}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PageBody;

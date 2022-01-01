import React from 'react';
import classes from './Navbar.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { unprotectedRoutePaths } from '../../../routes';
import { FaShoppingCart } from 'react-icons/fa';
import { RiLoginBoxLine, RiLogoutBoxLine } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { addModal } from '../../../features/globalSlice';
import { ModalType } from '../../../store/models/Modal';
import { useAppSelector } from '../../../app/hooks';
import { logout } from '../../../features/authSlice';

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const admin = useAppSelector((state) => state.auth.admin);
  const cartItems = useAppSelector((state) => state.shop.cart.products.length);

  return (
    <div className={classes.NavContainer}>
      <div
        className={classes.NavItemLogo}
        onClick={() => navigate(unprotectedRoutePaths.HOME)}
      >
        <span>
          Computers<span>.com</span>
        </span>
      </div>
      <div className={classes.NavItem}>
        <div>
          <Link className={classes.Link} to={unprotectedRoutePaths.SHOP}>
            Shop
          </Link>
          {admin && (
            <>
              <Link
                className={classes.Link}
                to={unprotectedRoutePaths.ADD_PRODUCT}
              >
                Add product
              </Link>
              <Link
                className={classes.Link}
                to={unprotectedRoutePaths.PURCHASE_HISTORY}
              >
                Purchase history
              </Link>
            </>
          )}

          <Link className={classes.Link} to={unprotectedRoutePaths.ABOUT}>
            About us
          </Link>
        </div>
      </div>
      <div className={classes.RightNav}>
        <div className="my-6 indicator mr-5">
          {cartItems > 0 && (
            <div className="indicator-item badge bg-red-500">{cartItems}</div>
          )}
          <button
            className={classes.Link}
            onClick={() => navigate(unprotectedRoutePaths.CHECKOUT)}
          >
            <FaShoppingCart />
          </button>
        </div>
        <button
          className={classes.Link}
          onClick={() =>
            admin
              ? dispatch(logout())
              : dispatch(
                  addModal({
                    modalType: ModalType.LOGIN,
                  })
                )
          }
        >
          {admin ? <RiLogoutBoxLine /> : <RiLoginBoxLine />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;

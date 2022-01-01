import React, { FC, useEffect } from 'react';
import classes from './ShoppingCart.module.scss';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import CartItem from '../../ui/CartItem/CartItem';
import { v4 } from 'uuid';
import { Product } from '../../../store/models/Product';
import BillCard from '../../ui/BillCard/BillCard';
import classNames from 'classnames';
import { MdRemoveShoppingCart } from 'react-icons/md';
import { getTotalPrice } from '../../../features/shopSlice';

const ShoppingCart: FC = () => {
  const { products, total } = useAppSelector((state) => state.shop.cart);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTotalPrice());
    //eslint-disable-next-line
  }, [products]);

  return (
    <div className={classes.Container}>
      <div className={classes.Row}>
        <h1>Shopping cart</h1>
      </div>
      <div className={classes.Row}>
        <div className={classNames(classes.Column, classes.ProductContainer)}>
          {products.length > 0 ? (
            <>
              {products.map((product: Product) => (
                <CartItem key={v4()} product={product} />
              ))}
            </>
          ) : (
            <h1 className={classNames(classes.Row, classes.Empty)}>
              <MdRemoveShoppingCart /> No items in your shopping cart yet!
            </h1>
          )}
        </div>
        <div className={classes.Column}>
          <BillCard products={products} total={total} />
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;

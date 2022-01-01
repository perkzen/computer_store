import React, { FC } from 'react';
import { Product } from '../../../store/models/Product';
import classes from './CartItem.module.scss';
import CounterInput from '../CounterInput/CounterInput';
import { CgRemove } from 'react-icons/cg';
import { useAppDispatch } from '../../../app/hooks';
import {
  removeFromCart,
  updateProductAmount,
} from '../../../features/shopSlice';

interface CartItemProps {
  product: Product;
}

const CartItem: FC<CartItemProps> = ({ product }) => {
  const dispatch = useAppDispatch();

  const handleChange = (amount: number) => {
    dispatch(updateProductAmount({ ...product, amount }));
  };

  return (
    <div className={classes.Container}>
      <div className={classes.Row}>
        <img src={product.image} alt={product.name} />
        <div className={classes.Column}>
          <h2>
            {product.brand} {product.name}
          </h2>
          <h3>Price: {product.price}$</h3>
          <CounterInput count={product.amount!} setCount={handleChange} disablePlus={product.amount! >= product.stock} />
        </div>
        <div className={classes.RemoveBtn}>
          <CgRemove onClick={() => dispatch(removeFromCart(product.code))} />
        </div>
      </div>
    </div>
  );
};

export default CartItem;

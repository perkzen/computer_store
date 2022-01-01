import React, { FC, useEffect, useState } from 'react';
import classes from './ProductPage.module.scss';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { addToCart, getProduct } from '../../../features/shopSlice';
import CounterInput from '../../ui/CounterInput/CounterInput';
import { FaShoppingCart } from 'react-icons/fa';

const ProductPage: FC = () => {
  const { productId } = useParams();
  const dispatch = useAppDispatch();
  const product = useAppSelector((state) => state.shop.currentProduct[0]);
  const [amount, setAmount] = useState(1);
  const [updateStock, setUpdateStock] = useState(false);

  useEffect(() => {
    dispatch(getProduct(productId!));
    //eslint-disable-next-line
  }, [updateStock]);

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, amount }));
    setUpdateStock(!updateStock)
  };

  return (
    <div className={classes.Container}>
      <div className={classes.Column}>
        <img src={product?.image} alt={product?.name} />
        <div className={classes.Description}>
          <h1>
            {product?.brand} {product?.name} {product?.year}
          </h1>
          <p>{product?.description}</p>
        </div>
      </div>
      <div className={classes.Column}>
        <h1>Price: {product?.price}$</h1>
        <h2>In stock: {product?.stock}</h2>
        <div>
          <CounterInput count={amount} setCount={setAmount} />
          <button
            className={classes.AddToCartBtn}
            onClick={handleAddToCart}
            disabled={amount > product?.stock}
          >
            <FaShoppingCart />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

import React, { FC, useEffect } from 'react';
import Carousel from '../../ui/Carousel/Carousel';
import classes from './Home.module.scss';
import ProductCard from '../../ui/ProductCard/ProductCard';
import { v4 } from 'uuid';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { getFavourites } from '../../../features/shopSlice';
import { Product } from '../../../store/models/Product';

const Home: FC = () => {
  const favourites: Product[] = useAppSelector(
    (state) => state.shop.favourites
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getFavourites());
    //eslint-disable-next-line
  }, []);

  return (
    <div className={classes.Container}>
      <Carousel />
      <div className={classes.Content}>
        <div className={classes.TopSeller}>
          <h2>Top Sellers</h2>
        </div>
        <div className={classes.TopSellersContainer}>
          {favourites.map((product) => (
            <div
              key={v4()}
              className={
                'py-10 px-5 carousel-item transition ease-in-out hover:scale-110 duration-200 delay-100'
              }
            >
              <ProductCard key={v4()} product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

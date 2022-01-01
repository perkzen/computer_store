import React, { FC, useEffect } from 'react';
import Searchbar from '../../ui/Searchbar/Searchbar';
import ProductCard from '../../ui/ProductCard/ProductCard';
import { v4 } from 'uuid';
import classes from './Shop.module.scss';
import Filter from '../../ui/Filter/Filter';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { getShopProducts } from '../../../features/shopSlice';
import { MdProductionQuantityLimits } from 'react-icons/md';

const Shop: FC = () => {
  const { shopProducts } = useAppSelector((state) => state.shop);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getShopProducts());
    //eslint-disable-next-line
  }, []);

  return (
    <div className={classes.Container}>
      <Searchbar className={classes.SearchBar} />
      <div className={classes.ShopContainer}>
        <Filter />
        {shopProducts.length > 0 ? (
          <div className={classes.ProductContainer}>
            <>
              {shopProducts.map((item) => (
                <div className={classes.Product} key={v4()}>
                  <ProductCard product={item} />
                </div>
              ))}
            </>
          </div>
        ) : (
          <div className={classes.EmptyState}>
            <MdProductionQuantityLimits />
            No products found.
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;

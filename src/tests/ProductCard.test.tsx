import React from 'react';
import { render } from '@testing-library/react';
import ProductCard from '../components/ui/ProductCard/ProductCard';
import { products } from '../constants/products';
import { Product } from '../store/models/Product';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../app/store';

it('should render product card with given props', () => {
  const testProduct: Product = products[0];
  const utils = render(
    <BrowserRouter>
      <Provider store={store}>
        <ProductCard product={testProduct} />
      </Provider>
    </BrowserRouter>)
  ;
  expect(utils.container.querySelector('span')?.textContent).toEqual(`${testProduct.brand} ${testProduct.name}`);
});
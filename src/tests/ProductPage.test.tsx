import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ProductPage from '../components/pages/ProductPage/ProductPage';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import { BrowserRouter } from 'react-router-dom';
import { unprotectedRoutePaths } from '../routes';


const renderWithRouter = (ui: JSX.Element, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return render(ui, { wrapper: BrowserRouter });
};


it('Should add item to cart', () => {
  const utils = renderWithRouter(
    <Provider store={store}>
      <ProductPage />
    </Provider>,
    { route: `${unprotectedRoutePaths.PRODUCT}/1` });
  fireEvent.click(utils.getByText('Add to cart'));
  expect(store.getState().shop.cart.products.length).toEqual(1);
});


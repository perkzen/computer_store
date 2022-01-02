import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import BillCard from '../components/ui/BillCard/BillCard';
import { Product } from '../store/models/Product';
import { products } from '../constants/products';
import { Provider } from 'react-redux';
import { store } from '../app/store';

it('Should display total price', () => {
  const testCart: Product[] = [products[0]];
  const utils = render(
    <Provider store={store}>
      <BillCard products={testCart} total={699.99} />
    </Provider>,
  );
  expect(utils.container.querySelector('h2')?.textContent).toEqual('Total price: 699.99$');
});


it('should clear cart when checkout', () => {
  const testCart: Product[] = [products[0]];
  const utils = render(
    <Provider store={store}>
      <BillCard products={testCart} total={699.99} />
    </Provider>,
  );
  fireEvent.click(utils.getByText("Checkout"))
  expect(store.getState().shop.cart).toEqual({ products: [], total: 0 });
});





import React from 'react';
import WarningModal from '../components/ui/WarningModal/WarningModal';
import { render, fireEvent } from '@testing-library/react';
import { ModalType } from '../store/models/Modal';
import { products } from '../constants/products';
import { store } from '../app/store';
import { removeProduct } from '../features/shopSlice';

it('handle delete should be called', () => {
  const handleClose = jest.fn();
  const testProduct = products[0];
  const utils = render(<WarningModal modal={{
    modalType: ModalType.WARNING,
    body: 'Are you sure you want to delete this item?',
    primaryButtonText: 'Delete',
    primaryButtonAction: () => store.dispatch(removeProduct(testProduct.code)),
    secondaryButtonText: 'Cancel',
    secondaryButtonAction: handleClose,
  }} />);
  fireEvent.click(utils.getByText('Delete'));
  expect(store.getState().shop.products.length).toEqual(4);
});
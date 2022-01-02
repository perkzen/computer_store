import React from 'react';
import { store } from '../app/store';
import { Category } from '../store/models/Product';
import { addProduct, editProduct } from '../features/shopSlice';

it('Should edit product', () => {
  const product = {
    brand: 'Gigabyte',
    category: Category.COMPONENT,
    code: '1',
    description:
      'The GeForce GTX 1080 Ti Founders Edition is truly unique. Designed and built by NVIDIA. ' +
      'Crafted with premium materials and components, including a die-cast aluminum body and 7-phase dualFET power supply.',
    image:
      'https://images.nvidia.com/pascal/img/gtx1080ti/gallery/gallery-1.jpg',
    name: 'GTX 1080 Ti',
    price: 699.99,
    type: 'Graphics card',
    year: 2021,
    stock: 1,
    favourite: true,
  };

  store.dispatch(editProduct(product));
  expect(store.getState().shop.products[0]).toEqual(product);

});

it("Should add product", ()=>{
  const product = {
    brand: 'Apple',
    category: Category.LAPTOP,
    code: '6',
    description: "very good",
    image:
      'https://images.nvidia.com/pascal/img/gtx1080ti/gallery/gallery-1.jpg',
    name: 'Macbook',
    price: 2099.99,
    type: 'Laptop',
    year: 2021,
    stock: 10,
    favourite: false,
  };
  store.dispatch(addProduct(product));
  expect(store.getState().shop.products[5]).toEqual(product);
})
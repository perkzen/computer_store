import { ReactElement } from 'react';
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import Shop from './components/pages/Shop/Shop';
import ProductForm from './components/pages/ProductForm/ProductForm';
import ProductPage from './components/pages/ProductPage/ProductPage';
import ShoppingCart from './components/pages/ShoppingCart/ShoppingCart';
import PurchaseHistory from './components/pages/PurschaseHistory/PurchaseHistory';

export enum unprotectedRoutePaths {
  HOME = '/',
  CHECKOUT = '/shopping-cart',
  PRODUCT = '/product',
  SHOP = '/shop',
  ABOUT = '/about-us',
  ADD_PRODUCT = '/add-product',
  EDIT_PRODUCT = '/edit-product',
  PURCHASE_HISTORY = '/purchase-history',
}

// export enum protectedRoutePaths {
//   CUSTOMER_LIST = '/customer-list',
//   /add-product
// }

export interface Route {
  path: string;
  element: ReactElement;
}

export const unprotectedRoutes: Route[] = [
  {
    path: unprotectedRoutePaths.HOME,
    element: <Home />,
  },
  {
    path: unprotectedRoutePaths.ABOUT,
    element: <About />,
  },
  {
    path: unprotectedRoutePaths.SHOP,
    element: <Shop />,
  },
  {
    path: unprotectedRoutePaths.ADD_PRODUCT,
    element: <ProductForm />,
  },
  {
    path: `${unprotectedRoutePaths.PRODUCT}/:productId`,
    element: <ProductPage />,
  },
  {
    path: `${unprotectedRoutePaths.EDIT_PRODUCT}/:productId`,
    element: <ProductForm />,
  },
  {
    path: unprotectedRoutePaths.CHECKOUT,
    element: <ShoppingCart />,
  },
  {
    path: unprotectedRoutePaths.PURCHASE_HISTORY,
    element: <PurchaseHistory />,
  },
];
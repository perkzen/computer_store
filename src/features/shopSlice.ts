import {
    CHOOSE_BRAND,
    CHOOSE_CATEGORY,
    Product,
} from '../store/models/Product';
import {products} from '../constants/products';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Cart} from '../store/models/Cart';
import {Purchase} from '../store/models/Purchase';
import {Filter} from '../store/models/Filter';

export interface shopState {
    products: Product[];
    cart: Cart;
    currentProduct: Product[];
    favourites: Product[];
    shopProducts: Product[];
    purchaseHistory: Purchase[];
    filteredProducts: Product[];
}

const initialState: shopState = {
    products: products,
    cart: {products: [], total: 0},
    currentProduct: [],
    favourites: [],
    shopProducts: [],
    purchaseHistory: [],
    filteredProducts: [],
};

export const shopSlice = createSlice({
    name: 'shop',
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<Product>) => {
            state.products = [...state.products, action.payload];
            state.shopProducts = state.products;
        },
        removeProduct: (state, action: PayloadAction<string>) => {
            state.products = state.products.filter(
                (product: Product) => product.code !== action.payload
            );
            state.shopProducts = state.products;
        },
        getProduct: (state, action: PayloadAction<string>) => {
            state.currentProduct = state.products.filter(
                (product: Product) => product.code === action.payload
            );
        },
        addToCart: (state, action: PayloadAction<Product>) => {
            const foundProduct = state.cart.products.find(
                (product) => product.code === action.payload.code
            );

            state.products = state.products.map((product) =>
                product.code === action.payload.code
                    ? {
                        ...product,
                        stock: product.stock - action.payload.amount!,
                    }
                    : product
            );

            if (foundProduct) {
                state.cart.products = state.cart.products.map((product: Product) =>
                    product.code === foundProduct.code
                        ? {
                            ...product,
                            amount: product.amount! + action.payload.amount!,
                            stock: product.stock - action.payload.amount!
                        }
                        : product
                );
            } else {
                state.cart.products = [...state.cart.products, {
                    ...action.payload,
                    stock: action.payload.stock - action.payload.amount!
                }];
            }
        },
        removeFromCart: (state, action: PayloadAction<string>) => {
            const foundProduct = state.cart.products.find(
                (product) => product.code === action.payload
            );

            if (foundProduct) {
                state.products = state.products.map((item) => item.code === action.payload ? {
                    ...foundProduct,
                    stock: foundProduct.stock + foundProduct.amount!,
                    amount: 0
                } : item)
            }

            state.cart.products = state.cart.products.filter(
                (product: Product) => product.code !== action.payload
            );
        },
        editProduct: (state, action: PayloadAction<Product>) => {
            state.products = state.products.map((product: Product) =>
                product.code === action.payload.code
                    ? {...product, ...action.payload}
                    : product
            );
        },
        getFavourites: (state) => {
            state.favourites = state.products.filter(
                (product: Product) => product?.favourite === true
            );
        },
        getTotalPrice: (state) => {
            let currentTotal = 0;
            for (let item of state.cart.products) {
                currentTotal += item.amount! * item.price;
            }
            state.cart.total = currentTotal;
        },
        updateProductAmount: (state, action: PayloadAction<Product>) => {
            state.cart.products = state.cart.products.map((product: Product) =>
                product.code === action.payload.code
                    ? {
                        ...product,
                        amount: action.payload.amount,
                    }
                    : product
            );
        },
        addFilter: (state, action: PayloadAction<Filter>) => {
            if (action.payload.category !== CHOOSE_CATEGORY) {
                state.shopProducts = state.products.filter(
                    (product: Product) => product.category === action.payload.category
                );
            }

            if (action.payload.brand !== CHOOSE_BRAND) {
                state.shopProducts = state.products.filter(
                    (product: Product) => product.brand === action.payload.brand
                );
            }

            state.filteredProducts = state.shopProducts;
        },
        removeFilter: (state) => {
            state.shopProducts = state.products;
            state.filteredProducts = [];
        },
        getShopProducts: (state) => {
            state.shopProducts = state.products;
        },
        searchItems: (state, action: PayloadAction<string>) => {
            state.shopProducts =
                state.filteredProducts.length > 0
                    ? state.filteredProducts
                    : state.products;

            if (action.payload.length > 0) {
                state.shopProducts = state.shopProducts.filter(
                    (item: Product) =>
                        item.brand.toLowerCase().includes(action.payload.toLowerCase()) ||
                        item.name.toLowerCase().includes(action.payload.toLowerCase())
                );
            }
        },
        checkout: (state, action: PayloadAction<Purchase>) => {
            state.purchaseHistory = [...state.purchaseHistory, action.payload];
            state.cart = {products: [], total: 0};
        },
    },
});

export const {
    addProduct,
    removeProduct,
    getProduct,
    addToCart,
    removeFromCart,
    editProduct,
    getFavourites,
    getTotalPrice,
    updateProductAmount,
    addFilter,
    removeFilter,
    getShopProducts,
    searchItems,
    checkout,
} = shopSlice.actions;

export default shopSlice.reducer;

import { createContext, useReducer } from 'react';
import React from 'react';

export const Store = createContext();

const initialState = {
  // storing in COOKIES
  // local storage used for user settings ...
  userInfo: localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null,

  cart: {
    shippingAddress: localStorage.getItem('shippingAddress')
      ? JSON.parse(localStorage.getItem('shippingAddress'))
      : {},

    paymentMethod: localStorage.getItem('paymentMethod')
      ? localStorage.getItem('paymentMethod')
      : '',

    cartItems: localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : [],
  },
};

export const reducer = (state, action) => {
  switch (action.type) {
    // fetching
    case 'FETCH_HOME_DATA':
      return {
        ...state,
        loading: false,
        products: action.payload.products,
        news: action.payload.news,
        // pages: action.payload.totalPagesHome,
      };
    case 'FETCH_PRODUCTS':
      return {
        ...state,
        products: action.payload.products,
        pages: action.payload.totalPages,
        loading: false,
      };
    case 'FETCH_NEWS':
      return {
        ...state,
        news: action.payload,
        loading: false,
      };
    case 'FETCH_SAVED_FOOD':
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    case 'FETCH_SINGLE_PRODUCT':
      return {
        ...state,
        product: action.payload,
        loading: false,
      };
    case 'FETCH_SINGLE_POST':
      return {
        ...state,
        post: action.payload,
        loading: false,
      };

    // pass props
    case 'CART_ADD_ITEM':
      const newItem = action.payload;
      const existItem = state.cart.cartItems.find(
        (item) => item._id === newItem._id
      ); //

      const cartItems = existItem
        ? state.cart.cartItems.map((item) =>
            item._id === existItem._id ? newItem : item
          )
        : [...state.cart.cartItems, newItem];
      localStorage.setItem(
        'cartItems',
        JSON.stringify(cartItems)
      );
      return {
        ...state,
        cart: { ...state.cart, cartItems },
      };
    case 'CART_REMOVE_ITEM': {
      const cartItems = state.cart.cartItems.filter(
        (item) => item._id !== action.payload._id
      );
      localStorage.setItem(
        'cartItems',
        JSON.stringify(cartItems)
      );
      return {
        ...state,
        cart: { ...state.cart, cartItems },
      };
    }
    case 'CART_CLEAR':
      return {
        ...state,
        cart: { ...state.cart, cartItems: [] },
      };
    case 'SAVE_PAYMENT_METHOD':
      return {
        ...state,
        cart: {
          ...state.cart,
          paymentMethod: action.payload,
        },
      };
    case 'SAVE_ADDRESS':
      return {
        ...state,
        cart: {
          ...state.cart,
          shippingAddress: action.payload,
        },
      };
    // user operators
    case 'USER_SIGNIN':
      return { ...state, userInfo: action.payload };
    case 'USER_LOGOUT':
      return {
        ...state,
        userInfo: null,
      };
    case 'USER_UPDATE':
      return {
        ...state,
        loading: false,
      };
    // order
    default:
      return state;
  }
};

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(
    reducer,
    initialState
  );
  const value = { state, dispatch };
  return (
    <Store.Provider value={value}>
      {props.children}
    </Store.Provider>
  );
}

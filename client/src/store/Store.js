import { createContext, useReducer, useState } from 'react';
export const Store = createContext();

const initialState = {
  userInfo: localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null,

  cart: {
    // shippingAddress: localStorage.getItem("shippingAddress")
    //   ? JSON.parse(localStorage.getItem("shippingAddress"))
    //   : {},

    // paymentMethod: localStorage.getItem("paymentMethod")
    //   ? localStorage.getItem("paymentMethod")
    //   : "",

    cartItems: localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : [],
  },
  savedBox: {
    savedItems: localStorage.getItem('savedItems')
      ? JSON.parse(localStorage.getItem('savedItems'))
      : [],
  },
};

const reducer = (state, action) => {
  switch (action.type) {
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
    case 'STORE_SAVED': {
      const newSavedItems = action.payload;
      const savedItems = [
        ...state.savedBox.savedItems,
        newSavedItems,
      ];
      localStorage.setItem(
        'savedItems',
        JSON.stringify(savedItems)
      );
      return {
        ...state,
        savedBox: { ...state.savedBox, savedItems },
      };
    }
    case 'REMOVE_SAVED': {
      const savedItems = state.savedBox.savedItems.filter(
        (item) => item._id !== action.payload._id
      );
      localStorage.setItem(
        'savedItems',
        JSON.stringify(savedItems)
      );
      return {
        ...state,
        savedBox: { ...state.savedBox, savedItems },
      };
    }
    case 'USER_SIGNIN':
      return { ...state, userInfo: action.payload };
    case 'USER_LOGOUT':
      return {
        ...state,
        userInfo: null,
        savedBox: {
          savedItems: [],
        },
      };
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

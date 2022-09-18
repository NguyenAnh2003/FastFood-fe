import { createContext, useReducer, useState } from "react";
export const Store = createContext();

const initialState = {
  cart: {
    // cartItems: localStorage.getItem('cartItems') ?
    // JSON.parse(localStorage.getItem('cartItems')) : [],
  }
}

const reducer = (state, action) => {
  switch (action.type) {
    case '':
      
    default:

  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = {state, dispatch};
  return <Store.Provider value={value}>{props.children}</Store.Provider>
}

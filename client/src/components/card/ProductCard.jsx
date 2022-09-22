import React, { useContext } from 'react'
import { Store } from '../../store/Store.js';
import { Link } from "react-router-dom";

export default function ProductCard(props) {
  const { product } = props;
  // const {state, dispatch: ctxDispatch} = useContext(Store);

  return (
    <div className="h-[404px] flex items-center">
      <div className="p-6 bg-white rounded-xl shadow-xl  transition-all transform duration-500">
        <img className="w-64 h-60 object-cover rounded-t-md" src={product.image} alt={product.name} />
        <div className="mt-4">
          <h1 className="w-64 text-13 font-bold text-gray-700">{product.name}</h1>
          <div className="mt-4 mb-2 flex justify-between pl-4 pr-2">
            <button className="block text-xl font-semibold text-gray-700 cursor-auto">${product.price}</button>
            <button className="text-lg block font-semibold py-2 px-6 text-green-100 bg-green-400 rounded-lg shadow">Buy</button>
          </div>
        </div>
      </div>
    </div>
  )
}

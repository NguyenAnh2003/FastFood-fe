import React, { useContext, useState } from 'react'
import { Store } from '../../store/Store.js';
import { Link } from "react-router-dom";
import {AiOutlineHeart} from 'react-icons/ai'

export default function ProductCard(props) {
  const { product } = props;
  // const {state, dispatch: ctxDispatch} = useContext(Store);

  const [fillHeart, setFillHeart] = useState(false);

  const addToCartHandler = async () => {
  }
  
  const addFavorHandler = () => {
    setFillHeart(!fillHeart);
    
  }

  return (
    <div className="min-w-[320px] flex items-center">
      <div className="pl-2 pr-2 bg-white rounded-xl shadow-xl">
        <a href=""><img className="w-64 h-60 object-cover rounded-t-md" src={product.image} alt={product.name} /></a>
        <div className=" mt-4 text-26 overflow-hidden">
          {/* Content */}
          <div className="min-h-[98px] px-2 mb-2 flex flex-col">
            <div className="mb-2 flex justify-between">
              <h1 className="w-64 text-14 font-bold text-gray-700">{product.name}</h1>
              <button
              disabled={''}
              onClick={addFavorHandler}
              > 
                {fillHeart ? (
                  <AiOutlineHeart fill='#ff5b6a' size={30} className="hover:cursor-pointer"/>
                ) : (
                  <AiOutlineHeart  size={30} className="hover:cursor-pointer"/>
                )}
              </button>
            </div>
            <div>
              <p className='text-[10px] font-bold text-description-color max-w-[286px] overflow-hidden'>{product.description}</p>
            </div>
          </div>
          {/* Price */}
          <div className='px-2 mb-2 flex flex-col border-t-2 border-[#eeeeee]'>
            <h1 className='my-2 font-bold text-price-color'>{product.price} đ</h1>
            <button 
            className='py-3 mb-2 rounded-xl bg-add-to-cart-btn text-white text-16'
            onClick={addToCartHandler}
            >Thêm vào giỏ hàng</button>
          </div>
        </div>
      </div>
    </div>
  )
}

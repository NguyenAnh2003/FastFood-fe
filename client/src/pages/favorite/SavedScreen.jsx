import React, { useContext, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import ProductCard from '../../components/card/ProductCard';
import { Store } from '../../store/Store';
import { useNavigate } from 'react-router-dom';

export default function SavedScreen() {
  const {
    state,
    dispatch: { ctxDispatch },
  } = useContext(Store);

  const {
    savedBox: { savedItems },
  } = state;

  const navigate = useNavigate();
  const { userInfo } = state;

  useEffect(() => {
    if (!userInfo) {
      navigate('/signin');
    }
  }, [userInfo, navigate]);

  return savedItems.length > 0 ? (
    <div className="container">
      <Helmet>
        <title>Your wishlist</title>
      </Helmet>
      <h1 className="text-center text-7xl font-lob font-bold uppercase text-[#f97316] mt-10">
        yêu thích
      </h1>
      <div className="flex flex-col lg:flex-row gap-1 mt-5 justify-center min-h-[600px]">
        <div className="px-3 grid-cols-1 sm:grid-cols-2 col-span-5 lg:w-3/4">
          <div className=" grid-cols-1 sm:grid-cols-2  grid gap-6 lg:grid-cols-3">
            {savedItems.map((item) => (
              <ProductCard product={item} key={item._id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>
      <Helmet>
        <title>Your wishlist</title>
      </Helmet>
      <h1 className="text-center text-7xl font-lob font-bold uppercase text-[#f97316] mt-10">
        yêu thích
      </h1>
      <div className="min-h-[600px] flex items-center justify-center">
        <h1 className="text-center text-7xl font-bold uppercase text-[#f97316] mt-10">
          None
        </h1>
      </div>
    </div>
  );
}

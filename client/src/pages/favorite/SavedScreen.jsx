import React, {
  useContext,
  useState,
  Fragment,
  useEffect,
} from 'react';
import { Helmet } from 'react-helmet-async';
import ProductCard from '../../components/card/ProductCard';
import { Store } from '../../store/Store';
import { Transition } from '@headlessui/react';

import { Listbox } from '@headlessui/react';
import CategoryDropDown from './CategoryDropDown';
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

  return (
    <div className="container">
      <Helmet>
        <title>Your wishlist</title>
      </Helmet>
      <h1 className="text-center text-7xl font-lob font-bold uppercase text-[#f97316] mt-10">
        Your favorite
      </h1>
      <div className="grid grid-cols-6 gap-1 justify-evenly">
        <div className="p-3 mt-11 grid-cols-1 col-span-1">
          {/* Filter food */}
        <CategoryDropDown/>
        </div>
        <div className="p-3 mt-5 grid-cols-1 sm:grid-cols-2 col-span-5">
          <div className=" grid-cols-1 sm:grid-cols-2 mt-6 grid gap-6 xl:grid-cols-4 lg:grid-cols-3">
            {savedItems.map((item) => (
              <ProductCard product={item} key={item._id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

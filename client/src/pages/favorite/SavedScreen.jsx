import React, { useContext, useState, Fragment } from 'react'
import { Helmet } from 'react-helmet-async';
import ProductCard from '../../components/card/ProductCard';
import { Store } from '../../store/Store';
import { Transition } from "@headlessui/react";

import { Listbox } from "@headlessui/react";
import CategoryDropDown from './module/CategoryDropDown';

export default function SavedScreen() {
  const { state, dispatch: { ctxDispatch } } = useContext(Store)
  const { savedBox: { savedItems } } = state;

  return (
    <div className='container'>
      <Helmet>
        <title>Save</title>
      </Helmet>
      <h1 className='text-center text-26 uppercase font-semibold'>Your favorite</h1>
      <div className='p-3 mt-5 min-h-[530px] shadow'>
        {/* Filter food */}
        <CategoryDropDown/>
        {/* Store save food */}
        <div className=' grid-cols-1 sm:grid-cols-2 mt-6 grid gap-6 xl:grid-cols-4 lg:grid-cols-3'>
          {savedItems.map(item => (
            <ProductCard product={item} key={item._id} />
          ))}
        </div>
      </div>
    </div>
  )
}


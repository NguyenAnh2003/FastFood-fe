import axios from 'axios';
import React, { useEffect, Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react';


export default function CategoryDropDown() {

  const [categories, setCategories] = useState([]);
  const [selected, setSelected] = useState('Category')
 
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const {data} = await axios.get('/api/products/categories');
        console.log(data);
        setCategories(data)
      } catch (error) {
        console.log(error);
      }
    }
    fetchCategory()
  }, [selected]);

  // console.log(categories[0]);
  console.log(categories[0]);
  console.log('Selected',selected);

  return (
    <div className="">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative">
          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-primary-color py-2 pl-3 pr-4 justify-center text-white shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white sm:text-sm">
            <span className="block truncate font-semibold">{selected}</span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="px-1.5 absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm scrollbar-hide">
              {categories.map((category, index) => (
                <Listbox.Option
                  key={index}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-3 pr-4 ${
                      active ? 'hover:bg-[#f97316] hover:text-white hover:font-bold hover:scale-100 rounded-lg transition duration-150 ease-in-out' : 'text-gray-900'
                    }`
                  }
                  value={category}
                >
                  {({ selected }) => (
                    <React.Fragment>
                      <span
                        className={`block truncate ${
                          selected ? 'py-2 pl-3 pr-4 text-center font-bold text-white bg-[#f97316] rounded-lg' : 'font-normal'
                        }`}
                      >
                        {category}
                      </span>
                    </React.Fragment>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}

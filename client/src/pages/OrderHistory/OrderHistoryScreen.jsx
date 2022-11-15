import React from 'react';
import {
  AiTwotoneHome,
  AiFillCloseCircle,
  AiOutlineMenuUnfold,
} from 'react-icons/ai';
import {
  MdFastfood,
  MdAccountCircle,
} from 'react-icons/md';
import {
  BsNewspaper,
  BsBookmarkHeartFill,
  BsFillCartCheckFill,
} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Component } from 'react';

export default function ProfileScreen() {
  let [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div>
      <div className="fixed inset-0 mt-20 ml-4 justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          <AiOutlineMenuUnfold size={20} />
        </button>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <div class="min-h-screen w-56 ">
          <div class="w-56 h-full border-r overflow-hidden hover:bg-white hover:shadow-lg transition-all ease-in-out">
            <div class="h-screen flex flex-col relative justify-between pt-2 pb-6 bg-[#c91e34]">
              <button
                onClick={closeModal}
                type="button"
                value="close sdiebar"
                class="absolute pb-5 top-2 right-2 flex items-center justify-center w-10 h-10 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-200"
              >
                <AiFillCloseCircle
                  size={30}
                ></AiFillCloseCircle>
              </button>
              <div class="overflow-y-auto flex-1">
                <ul class="  mt-6 space-y-2 ">
                  <li class="min-w-max">
                    <Link to={'/'}>
                      <a class="bg group flex items-center space-x-4 px-4 py-3 text-white hover:bg-[#f5d3d6] hover:text-[#941516] hover:scale-95 rounded-full transition duration-150 ease-in-out">
                        <AiTwotoneHome
                          fill="#65a30d"
                          size={20}
                        />
                        <span class="-mr-1 font-medium">
                          Trang chủ
                        </span>
                      </a>
                    </Link>
                  </li>
                  <li class="min-w-max">
                    <Link to={'/Menu'}>
                      <a class="bg group flex items-center space-x-4 px-4 py-3 text-white hover:bg-[#f5d3d6] hover:text-[#941516] hover:scale-95 rounded-full transition duration-150 ease-in-out">
                        <MdFastfood
                          fill="#65a30d"
                          size={20}
                        />
                        <span class="-mr-1 font-medium">
                          Thực đơn
                        </span>
                      </a>
                    </Link>
                  </li>
                  <li class="min-w-max">
                    <Link to={'/news'}>
                      <a class="bg group flex items-center space-x-4 px-4 py-3 text-white hover:bg-[#f5d3d6] hover:text-[#941516] hover:scale-95 rounded-full transition duration-150 ease-in-out">
                        <BsNewspaper
                          fill="#65a30d"
                          size={20}
                        />
                        <span class="-mr-1 font-medium">
                          Tin tức
                        </span>
                      </a>
                    </Link>
                  </li>
                  <li class="min-w-max">
                    <Link to={'/saved'}>
                      <a class="bg group flex items-center space-x-4 px-4 py-3 text-white hover:bg-[#f5d3d6] hover:text-[#941516] hover:scale-95 rounded-full transition duration-150 ease-in-out">
                        <BsBookmarkHeartFill
                          fill="#65a30d"
                          size={20}
                        />
                        <span class="-mr-1 font-medium">
                          Yêu thích
                        </span>
                      </a>
                    </Link>
                  </li>
                  <li class="min-w-max">
                    <Link to={'/cart'}>
                      <a class="bg group flex items-center space-x-4 px-4 py-3 text-white hover:bg-[#f5d3d6] hover:text-[#941516] hover:scale-95 rounded-full transition duration-150 ease-in-out">
                        <BsFillCartCheckFill
                          fill="#65a30d"
                          size={20}
                        />
                        <span class="-mr-1 font-medium">
                          Giỏ hàng
                        </span>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <ul class="mt-6 space-y-2 tracking-wide">
                  <li class="min-w-max">
                    <Link to={'/ProfileScreen'}>
                      <a class="bg group flex items-center space-x-4 px-4 py-3 text-white hover:bg-[#f5d3d6] hover:text-[#941516] hover:scale-95 rounded-full transition duration-150 ease-in-out">
                        <MdAccountCircle
                          fill="#65a30d"
                          size={20}
                        />
                        <span class="-mr-1 font-medium">
                          Tài khoản
                        </span>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  );
}

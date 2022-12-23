import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment, useState } from 'react';
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

const directSiderBar = [
  {
    path: '/',
    pathname: 'Trang Chủ',
    pathicon: AiTwotoneHome,
  },
  {
    path: '/menu',
    pathname: 'Thực Đơn',
    pathicon: MdFastfood,
  },
  {
    path: '/news',
    pathname: 'Tin Tức',
    pathicon: BsNewspaper,
  },
  {
    path: '/saved',
    pathname: 'Yêu Thích',
    pathicon: BsBookmarkHeartFill,
  },
  {
    path: '/cart',
    pathname: 'Giỏ Hàng',
    pathicon: BsFillCartCheckFill,
  },
];

export default function SideBar({isOpen, setIsOpen}) {

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <React.Fragment>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={closeModal}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-x-0"
                enterTo="opacity-100 translate-x-0"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-x-[-100%]"
                leaveTo="opacity-0 translate-x-[-100%]"
              >
                <Dialog.Panel className="fixed inset-0 min-h-screen">
                  <div class="w-56 h-full border-r overflow-hidden hover:bg-white hover:shadow-lg transition-all ease-in-out">
                    <div class="h-screen flex flex-col relative justify-between pt-2 pb-6 bg-[#faecd0]">
                      <button
                        onClick={closeModal}
                        type="button"
                        value="close sidebar"
                        class="absolute pb-5 pt-5 top-2 right-2 flex items-center justify-center w-10 h-10 rounded-full mb-2 bg-[#ff5b6a] cursor-pointer select-none
                        active:translate-y-2  active:[box-shadow:0_0px_0_0_#dc2626,0_0px_0_0_#475569]
                        active:border-b-[0px]
                        transition-all duration-150 [box-shadow:0_10px_0_0_#dc2626,0_15px_0_0_#475569]
                        border-b-[1px] border-[#f87171] font-lob text-center text-white"
                      >
                        <AiFillCloseCircle size={30} />
                      </button>
                      <div class="overflow-y-auto flex-1">
                        <ul class="mt-[60px] space-y-2 ">
                          {directSiderBar.map((item) => (
                            <li class="min-w-max">
                              <Link
                                to={item.path}
                                className="group flex items-center space-x-4 px-4 py-3 text-[#d87708] hover:bg-[#f5d3d6] hover:text-[#941516] hover:scale-95 rounded-full transition duration-150 ease-in-out"
                              >
                                <item.pathicon
                                  fill="#dc2626"
                                  size={30}
                                />
                                <span class="-mr-1 font-lob font-medium text-xl">
                                  {item.pathname}
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <ul class="mt-6 space-y-2 tracking-wide">
                          <li class="min-w-max">
                            <Link to={'/profile'} className="bg group flex items-center space-x-4 px-4 py-3 text-[#d87708] hover:bg-[#f5d3d6] hover:text-[#941516] hover:scale-95 rounded-full transition duration-150 ease-in-out">

                              <MdAccountCircle
                                fill="#dc2626"
                                size={30}
                              />
                              <span class="-mr-1 font-lob font-medium text-xl">
                                Tài khoản
                              </span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </React.Fragment>
  );
}

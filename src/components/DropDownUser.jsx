import { Menu, Transition } from '@headlessui/react';
import React from 'react';
import { Fragment, useContext } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Store } from '../store/Store';

const userTitle = [
  {
    page: 'Trang Cá Nhân',
    path: '/profile',
  },
];

const DropDownUser = () => {
  const { state, dispatch: ctxDispatch } =
    useContext(Store);
  const { userInfo } = state;
  console.log('User', typeof userInfo);
  const submitHandler = () => {
    ctxDispatch({ type: 'USER_LOGOUT' });
    localStorage.removeItem('userInfo');
  };
  return (
    <div className="text-right">
      <Menu
        as="div"
        className="relative inline-block text-left"
      >
        <div>
          <Menu.Button className="">
            <AiOutlineUser size={24} />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="z-30 absolute right-0 mt-2 p-3 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none overflow-hidden">
            {userTitle.map((item, index) => (
              <Menu.Item key={index}>
                {({ active }) => (
                  <Link
                    to={item.path}
                    className={`${
                      active
                        ? 'font-bold justify-center hover:bg-primary-color hover:text-white hover:scale-100 rounded-lg transition duration-150 ease-in-out'
                        : 'text-gray-900 justify-center'
                    } group flex w-full items-center px-2 py-2 text-sm`}
                  >
                    {item.page}
                  </Link>
                )}
              </Menu.Item>
            ))}
            {userInfo ? (
              <Menu.Item>
                {({ active }) => (
                  <Link
                    onClick={submitHandler}
                    to={'/signin'}
                    className={`${
                      active
                        ? ' font-bold justify-center hover:bg-primary-color hover:text-white hover:scale-100 rounded-lg transition duration-150 ease-in-out'
                        : 'text-gray-900 justify-center'
                    } group flex w-full items-center px-2 py-2 text-sm`}
                  >
                    Đăng Xuất
                  </Link>
                )}
              </Menu.Item>
            ) : (
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to={'/signin'}
                    className={`${
                      active
                        ? 'font-bold justify-center hover:bg-primary-color hover:text-white hover:scale-100 rounded-lg transition duration-150 ease-in-out'
                        : 'text-gray-900 justify-center'
                    } group flex w-full items-center px-2 py-2 text-sm`}
                  >
                    Đăng Nhập
                  </Link>
                )}
              </Menu.Item>
            )}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default DropDownUser;

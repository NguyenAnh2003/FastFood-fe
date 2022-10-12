import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";

const userTitle = [
  {
    page: "Profile",
    path: "/profile",
  },
  {
    page: "Oder History",
    path: "/orderhistory",
  },
  {
    page: "Sign up",
    path: "/signup",
  },
];

export default function DropDownUser() {
  return (
    <div className="text-right">
      <Menu as="div" className="relative inline-block text-left">
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
          <Menu.Items className="z-30 absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none overflow-hidden">
            {userTitle.map((item, index) => (
              <Menu.Item key={index}>
                {({ active }) => (
                  <Link
                    to={item.path}
                    className={`${
                      active ? "bg-primary-color text-white" : "text-gray-900"
                    } group flex w-full items-center px-2 py-2 text-sm`}
                  >
                    {item.page}
                  </Link>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
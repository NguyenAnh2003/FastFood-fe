import React from 'react'
import { AiTwotoneHome } from 'react-icons/ai';
import { MdFastfood, MdAccountCircle } from 'react-icons/md'
import { BsNewspaper, BsBookmarkHeartFill, BsFillCartCheckFill } from 'react-icons/bs'
import { Link } from 'react-router-dom';

export default function ProfileScreen() {
  return (
    <div>
<div class="min-h-screen bg-gray-100">
  <div class="sidebar min-h-screen w-[3.35rem] overflow-hidden border-r hover:w-56 hover:bg-white hover:shadow-lg transition-all ease-in-out">
    <div class="flex h-screen flex-col justify-between pt-2 pb-6 bg-[#c91e34]">
      <div>
        <ul class="mt-6 space-y-2 tracking-wide">
          <li class="min-w-max">
          <a href="#" class="bg group flex items-center space-x-4 px-4 py-3 text-white hover:bg-[#f5d3d6] hover:text-[#941516] hover:scale-95 rounded-full transition duration-150 ease-in-out">
            <AiTwotoneHome fill="#65a30d" size={20} />             
            <span class="-mr-1 font-medium">Trang chủ</span>
            </a>
          </li>
          <li class="min-w-max">
          <a href="#" class="bg group flex items-center space-x-4 px-4 py-3 text-white hover:bg-[#f5d3d6] hover:text-[#941516] hover:scale-95 rounded-full transition duration-150 ease-in-out">
            <MdFastfood fill="#65a30d" size={20} />             
            <span class="-mr-1 font-medium">Thực đơn</span>
            </a>
          </li>
          <li class="min-w-max">
          <Link to={'/news'}>
          <a href="#" class="bg group flex items-center space-x-4 px-4 py-3 text-white hover:bg-[#f5d3d6] hover:text-[#941516] hover:scale-95 rounded-full transition duration-150 ease-in-out">
            <BsNewspaper fill="#65a30d" size={20} />             
            <span class="-mr-1 font-medium">Tin tức</span>
            </a>
            </Link>
          </li>
          <li class="min-w-max">
          <Link to={'/saved'}>
          <a href="#" class="bg group flex items-center space-x-4 px-4 py-3 text-white hover:bg-[#f5d3d6] hover:text-[#941516] hover:scale-95 rounded-full transition duration-150 ease-in-out">
            <BsBookmarkHeartFill fill="#65a30d" size={20} />             
            <span class="-mr-1 font-medium">Yêu thích</span>
            </a>
            </Link>
          </li>
          <li class="min-w-max">
          <Link to={'/cart'}>
          <a href="#" class="bg group flex items-center space-x-4 px-4 py-3 text-white hover:bg-[#f5d3d6] hover:text-[#941516] hover:scale-95 rounded-full transition duration-150 ease-in-out">
            <BsFillCartCheckFill fill="#65a30d" size={20} />             
            <span class="-mr-1 font-medium">Giỏ hàng</span>
            </a>
            </Link>
          </li>
        </ul>
      </div>
      <div >
      <ul class="mt-6 space-y-2 tracking-wide">
          <li class="min-w-max">
          <Link to={'/ProfileScreen'}>
          <a href="#" class="bg group flex items-center space-x-4 px-4 py-3 text-white hover:bg-[#f5d3d6] hover:text-[#941516] hover:scale-95 rounded-full transition duration-150 ease-in-out">
            <MdAccountCircle fill="#65a30d" size={20} />             
            <span class="-mr-1 font-medium">Tài khoản</span>
            </a>
            </Link>
          </li>
          </ul>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

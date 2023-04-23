import React from 'react';
import { Link } from 'react-router-dom';

export default function NewsCard(props) {
  const { post } = props;
  
  return (
    <div className="flex bg-white min-w-full cursor-pointer flex-col gap-3 overflow-hidden lg:mb-14 shadow-md">
      <Link to={`/news/${post._id}`}>
        <img
          className="w-full h-60 object-cover rounded-t-md"
          src={post.image}
          alt={post.title}
        />
      </Link>
      <div className="w-full">
        <div className="mt-3 text-26 overflow-hidden">
          {/* Content */}
          <div className="min-h-[86px] px-2 mb-2 flex flex-col">
            <div className="mb-2 flex flex-col justify-between">
              <h1 className="h-[42px] text-14 font-bold text-gray-700">
                {post.title}
              </h1>
            </div>
          </div>
          {/* Price */}
          <div className="px-2 mb-2 flex flex-col border-t-2 border-[#eeeeee]">
            <Link
              to={`/news/${post._id}`}
              className=" text-center"
            >
              <button className="mt-2 py-2 text-primary-color text-16 font-bold">
                Xem thêm
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

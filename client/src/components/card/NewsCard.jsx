import React, { useState } from "react";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";

export default function NewsCard(props) {
  const { post } = props;

  const [fillHeart, setFillHeart] = useState(false);

  const likeHandler = () => {
    setFillHeart(!fillHeart);
  };

  return (
    <div className="flex min-w-full cursor-pointer flex-col gap-3 overflow-hidden lg:mb-14 shadow-md">
      <a href="">
        <img
          className="w-full h-60 object-cover rounded-t-md"
          src={post.image}
          alt={post.title}
        />
      </a>
      <div className="w-full">
        <div className="mt-3 text-26 overflow-hidden">
          {/* Content */}
          <div className="min-h-[86px] px-2 mb-2 flex flex-col">
            <div className="mb-2 flex flex-col justify-between">
              <h1 className="h-[42px] text-14 font-bold text-gray-700">
                {post.title}
              </h1>
              <div className="mt-3 gap-2 flex flex-row items-center">
                <button disabled={""} onClick={likeHandler}>
                  {fillHeart ? (
                    <AiFillLike
                      fill="#ff5b6a"
                      size={24}
                      className="hover:cursor-pointer"
                    />
                  ) : (
                    <AiOutlineLike fill="#000" size={24} />
                  )}
                </button>
                <p className="text-16">{post.likes}</p>
              </div>
            </div>
          </div>
          {/* Price */}
          <div className="px-2 mb-2 flex flex-col border-t-2 border-[#eeeeee]">
            <button className="mt-2 py-2 text-primary-color text-16 font-bold">
              Xem thêm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

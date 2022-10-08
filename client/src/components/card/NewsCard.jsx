import React, { useState } from "react";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";

export default function NewsCard(props) {
  const { post } = props;

  const [fillHeart, setFillHeart] = useState(false);

  const likeHandler = () => {
    setFillHeart(!fillHeart);
  };

  return (
    <div className="max-w-[302px] flex flex-col items-center rounded shadow-md overflow-hidden">
      <a href="">
        <img
          className="w-100 h-60 object-cover rounded-t-md"
          src={post.image}
          alt={post.title}
        />
      </a>
      <div className="">
        <div className="mt-1 text-26 overflow-hidden">
          {/* Content */}
          <div className="px-2 mb-2 flex flex-col">
            <div className="mb-2 flex flex-col justify-between">
              <h1 className="w-64 text-14 font-bold text-gray-700">
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

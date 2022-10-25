import axios from 'axios';
import React, { useContext, useState } from 'react';
import { AiFillLike, AiOutlineLike } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { Store } from '../../store/Store';

export default function NewsCard(props) {
  const { post } = props;
  const navigate = useNavigate();
  const [fillHeart, setFillHeart] = useState(false);
  const {state, dispatch} = useContext(Store)
  const {userInfo} = state

  const likeHandler = async (item, likes) => {
    if(userInfo)
    { 
      try {
        const { data } = await axios.get(`/api/posts/${post._id}`);
        console.log(data);
        
      } catch (error) {
        console.log(error);
      }
    }
    else {
      navigate('/signin?redirect')
    }
  };

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
              <div className="mt-3 gap-2 flex flex-row items-center">
                <button disabled={''}>
                  {fillHeart ? (
                    <AiFillLike
                      fill="#ff5b6a"
                      size={24}
                      className="hover:cursor-pointer"
                    />
                  ) : (
                    <AiOutlineLike
                      onClick={likeHandler}
                      fill="#000"
                      size={24}
                    />
                  )}
                </button>
                <p className="text-16">{post.likes}</p>
              </div>
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

import axios from 'axios';
import React, { useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import LoadingComponent from "../../components/loading/LoadingComponent";

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return {
        ...state,
        post: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default function SingleNews() {
  const params = useParams();
  const { id } = params;
  const [{ loading, post }, dispatch] = useReducer(
    reducer,
    {
      loading: true,
      post: [],
    }
  );

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`/api/posts/${id}`);
      dispatch({ type: 'FETCH_REQUEST', payload: data });
    };
    fetchData();
  }, [id]);
  return (
    loading ? (
      <LoadingComponent/>
    ) : (
      <div className="container mt-5 ">
        <div className="bg-white flex flex-col items-center shadow-sm md:py-5">
          <img
            src={post.image}
            className="md:max-w-[600px]"
            alt={post.title}
          />
          <h1 className="text-16 text-center md:text-26 font-semibold">
            {post.title}
          </h1>
          <div className="px-3 md:px-10 mt-2 md:max-w-[900px] py-4">
            <p className="">{post.content}</p>
          </div>
        </div>
      </div>
    )
  );
}

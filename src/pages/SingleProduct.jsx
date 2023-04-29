import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getSingleProduct from '../libs/apis/getSingleProduct';
import { useReducer } from 'react';
import LoadingComponent from '../components/loading/LoadingComponent';
import {
  AiOutlineHeart,
  AiFillHeart,
} from 'react-icons/ai';
import { Store, reducer } from '../store/Store';
import saveFoodAPI from '../libs/apis/saveFood';
import unsaveFoodAPI from '../libs/apis/unsaveFood';
import getWishList from '../libs/apis/getWishlist';
import { FETCH_SINGLE_PRODUCT } from '../store/Constanst';

const SingleProduct = () => {
  const [isSaved, setSave] = useState(false);
  const { id } = useParams();
  const { state } = useContext(Store);
  const { userInfo } = state;
  console.log('current user', userInfo);

  const [{ loading, product }, dispatch] = useReducer(
    reducer,
    { loading: true, product: {} }
  );

  useEffect(() => {
    const fetchAPI = async () => {
      const data = await getSingleProduct(id);
      console.log('single product', data);
      dispatch({
        type: FETCH_SINGLE_PRODUCT,
        payload: data,
      });
      console.log('where', typeof data.price);
    };
    // check save func
    const checkSaved = async () => {
      try {
        const userId = userInfo._id;
        const { rs } = await getWishList(userId);
        console.log('from check saved', rs.products);
        const check = rs.products.some((i) => i._id === id);
        if (check) {
          setSave(true);
        } else {
          setSave(false);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    checkSaved();
    fetchAPI();
  }, [isSaved]);

  const saveFood = async (e) => {
    e.preventDefault();
    const userId = userInfo._id;
    try {
      const data = await saveFoodAPI(product, userId);
      console.log('success?', data);
      setSave(true);
    } catch (error) {
      console.log(error.message);
    }
  };

  const unsaveFood = async (e) => {
    e.preventDefault();
    const userId = userInfo._id;
    try {
      const data = await unsaveFoodAPI(product, userId);
      console.log('success unsave?', data);
      setSave(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  const addToCart = (id) => {
    
  };

  return loading ? (
    <LoadingComponent />
  ) : (
    <div className="">
      <div className="lg:w-4/5 mx-auto flex flex-wrap m-3 bg-white">
        <img
          alt="product"
          className="lg:w-1/3 w-full object-cover object-center rounded"
          src={product.image}
        />
        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
            {product.name}
          </h1>
          <p className="leading-relaxed">
            {product.category}
          </p>
          <p className="leading-relaxed">
            {product.description}
          </p>
          <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5"></div>
          <div className="justify-center">
            <span className="title-font font-medium text-2xl text-gray-900">
              {product.price} đ
            </span>
            <button
              onClick={addToCart}
              className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
            >
              Thêm vào giỏ
            </button>
            {isSaved ? (
              <AiFillHeart
                size={24}
                color="red"
                onClick={unsaveFood}
              />
            ) : (
              <AiOutlineHeart
                size={24}
                onClick={saveFood}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;

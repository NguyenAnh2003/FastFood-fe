import React, {
  useEffect,
  useReducer,
  useState,
} from 'react';
import axios from 'axios';
import ProductCard from '../../components/ProductCard.jsx';
import NewsCard from '../../components/card/NewsCard.jsx';
import { Helmet } from 'react-helmet-async';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  HeaderSlider,
  SimpleSlider,
  subDriection,
} from './Constants.js';
import { Link } from 'react-router-dom';
import LoadingComponent from '../../components/loading/LoadingComponent';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        loading: false,
        products: action.payload.products,
        news: action.payload.news,
        pages: action.payload.totalPagesHome,
      };
    case 'FETCH_FAIL':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default function Home() {
  const [{ loading, error, products, news }, dispatch] =
    useReducer(reducer, {
      products: [],
      news: [],
      loading: true,
      error: '',
    });
  const [pageNumber, setPageNumber] = useState(0);
  const [numberOfPage, setNumberOfPage] = useState(0);
  const pages = new Array(numberOfPage)
    .fill(null)
    .map((v, i) => i);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `/api/combine/home?page=${pageNumber}`
        );
        dispatch({
          type: 'FETCH_SUCCESS',
          payload: data,
        });
        setNumberOfPage(data.totalPagesHome);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [pageNumber]);

  return loading ? (
    <LoadingComponent />
  ) : (
    <React.Fragment>
      <Helmet>
        <title>Home</title>
      </Helmet>
      {/* Slide header (direct to menu page) */}
      <div className="overflow-hidden">
        <Slider {...SimpleSlider}>
          {HeaderSlider.map((item, index) => (
            <span
              key={index}
              className="relative bg-blend-normal"
            >
              <img
                className="w-full min-h-[350px] object-cover "
                src={item.image}
                alt={item.alt}
              />
              <Link
                to={'/menu'}
                className="absolute top-[50%] left-[50%] translate-x-[-50%] w-[280px] h-[50px] items-center flex justify-center shadow-lg bg-[#ffeae3] font-semibold rounded"
              >
                Đặt Hàng
              </Link>
            </span>
          ))}
        </Slider>
      </div>
      <div className="container">
        {/* Directory */}
        <div className="flex flex-col md:flex-row md:gap-3 justify-center mb-5">
          {subDriection.map((item, index) => (
            <Link
              to={`${item.path}`}
              key={index}
              className="my-2 md:my-8 rounded flex gap-3 text-20 font-semibold p-5 items-center bg-[#ffeae3]"
            >
              <img src={item.thumbnail} alt={item.name} />
              <h1>{item.name}</h1>
            </Link>
          ))}
        </div>
        {/* Slide product */}
        <Link
          to={'/menu'}
          className="py-3 px-6 rounded bg-primary-color shadow-md font-semibold text-14 text-white"
        >
          Xem Tất Cả
        </Link>
        <div className="flex flex-col my-10 justify-center">
          <div className="grid-cols-1 sm:grid-cols-2 mt-6 grid gap-6 xl:grid-cols-4 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard
                key={product._id}
                product={product}
              />
            ))}
          </div>
        </div>

        <Link
          to={'/news'}
          className="py-3 px-6 rounded bg-primary-color shadow-md font-semibold text-14 text-white"
        >
          Xem Tất Cả
        </Link>
        <div className="grid-cols-1 sm:grid-cols-2 mt-6 grid gap-6 xl:grid-cols-4 lg:grid-cols-3">
          {news.map((post) => (
            <NewsCard key={post._id} post={post} />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

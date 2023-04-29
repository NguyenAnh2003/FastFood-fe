import React, {
  useEffect,
  useReducer,
  useState,
} from 'react';
import axios from 'axios';
import NewsCard from '../components/card/NewsCard.jsx';
import { Helmet } from 'react-helmet-async';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import LoadingComponent from '../components/loading/LoadingComponent';
import ProductCard from '../components/card/ProductCard.jsx';
import getFetch from '../libs/utils/getFetch.js';
import getPosts from '../libs/apis/getPosts.js';
import { getSpecialFood } from '../libs/apis/getProducts.js';
import { getHomeData } from '../libs/apis/getHomeData.js';

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
        // pages: action.payload.totalPagesHome,
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

const SimpleSlider = {
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

const HeaderSlider = [
  {
    image: '/assets/news/banner-1.jpg',
    alt: 'banner 1',
  },
  {
    image: '/assets/news/banner-2.jpg',
    alt: 'banner 2',
  },
  {
    image: '/assets/news/banner-3.jpg',
    alt: 'banner 3',
  },
];

const subDriection = [
  {
    name: 'Cửa Hàng',
    path: '/about',
    thumbnail: '/assets/logo/sub-1.svg',
  },
  {
    name: 'Đặt Hàng',
    path: '/menu',
    thumbnail: '/assets/logo/sub-2.svg',
  },
];

export default function Home() {
  // useScrollToTop();

  const [{ loading, error, products, news }, dispatch] =
    useReducer(reducer, {
      products: [],
      news: [],
      loading: true,
      error: '',
    });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getHomeData();
        dispatch({
          type: 'FETCH_SUCCESS',
          payload: data,
        });
        console.log('data?', data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

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
                className="btn-3D absolute top-[50%] left-[50%] translate-x-[-50%] w-[280px] h-[50px] items-center flex justify-center text-2xl"
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
            {products?.map((product) => (
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

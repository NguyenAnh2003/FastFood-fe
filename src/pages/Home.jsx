import React from 'react';
import { Helmet } from 'react-helmet-async';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link, useLoaderData } from 'react-router-dom';

const ProductCard = React.lazy(() =>
  import('../components/card/ProductCard.jsx')
);

const NewsCard = React.lazy(() =>
  import('../components/card/NewsCard.jsx')
);

export default function Home() {
  const data = useLoaderData();
  const { products, news } = data;
  console.log('from loader', { products, news });

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

  return (
    <React.Fragment>
      <Helmet>
        <title>Home</title>
      </Helmet>
      {/* Slide header (direct to menu page) */}
      <div className="overflow-hidden">
        <Slider>
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

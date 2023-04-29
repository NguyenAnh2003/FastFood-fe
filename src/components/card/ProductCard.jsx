import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = React.memo((props) => {
  const { product } = props;

  console.log('Re render');

  return (
    <div className="flex min-w-full cursor-pointer flex-col gap-3 overflow-hidden lg:mb-14 shadow-md">
      <div className="px-2 bg-white rounded">
        <Link to={`/food/${product._id}`}>
          <img
            className="w-full h-60 object-cover rounded-t-md"
            src={product.image}
            alt={product.name}
          />
        </Link>
        <div className="mt-4 text-26 overflow-hidden">
          {/* Content */}
          <div className="min-h-[98px] px-2 mb-2 flex flex-col">
            <div className="mb-2 flex justify-between">
              <h1 className="w-64 text-2xl font-light text-[#f97316] font-lob">
                {product.name}
              </h1>
            </div>
            <div>
              <p className="text-[10px] font-bold text-description-color max-w-[286px] overflow-hidden">
                {product.description}
              </p>
            </div>
          </div>
          {/* Price */}
          <div className="px-2 mb-2 flex flex-col border-t-2 border-[#eeeeee]">
            <h1 className="my-2 font-bold text-price-color font-lob">
              {product.price} đ
            </h1>
            <Link
              to={`/food/${product._id}`}
              className="text-center py-3 mb-2 bg-primary-btn font-lob text-white text-xl hover:scale-105 rounded-md transition duration-150 ease-in-out"
            >
              <button className="">Xem Thêm</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
});

export default ProductCard;

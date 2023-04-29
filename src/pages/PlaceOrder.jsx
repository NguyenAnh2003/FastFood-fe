/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { Store } from '../store/Store';
import { useMemo } from 'react';
const PlaceOrder = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(Store);
  const { cart, userInfo } = state;

  const shippingPrice = 15;
  cart.shippingPrice = shippingPrice.toFixed(3);

  // cart.itemsPrice = cart.cartItems
  //   .reduce((a, c) => a + c.quantity * c.price, 0)
  //   .toFixed(3);

  cart.itemsPrice = useMemo(() => {
    return cart.cartItems
      .reduce((a, c) => a + c.quantity * c.price, 0)
      .toFixed(3);
  }, [cart.cartItems]);

  // cart.totalPrice = (
  //   parseInt(cart.itemsPrice) + parseInt(cart.shippingPrice)
  // ).toFixed(3);

  cart.totalPrice = useMemo(() => {
    return (
      parseInt(cart.itemsPrice) +
      parseInt(cart.shippingPrice)
    ).toFixed(3);
  }, [cart.itemsPrice, cart.shippingPrice]);

  console.log(
    'cart',
    cart.cartItems,
    cart.shippingAddress,
    cart.paymentMethod,
    cart.itemsPrice,
    cart.shippingPrice,
    cart.totalPrice
  );

  const submitHandler = async () => {
    try {
      const { data } = await axios.post(
        '/api/orders',
        {
          orderItems: cart.cartItems,
          shippingAddress: cart.shippingAddress, //
          paymentMethod: cart.paymentMethod,
          itemsPrice: cart.itemsPrice,
          shippingPrice: cart.shippingPrice,
          totalPrice: cart.totalPrice,
        },
        {
          headers: {
            authorization: `Bearer ${userInfo.token}`,
          },
        }
      );
      dispatch({ type: 'CART_CLEAR' });
      localStorage.removeItem('cartItems');
      navigate(`/order/${data.order._id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Helmet>
        <title>Shopping cart</title>
      </Helmet>
      <div className="container xl:px-10 mx-auto mt-10">
        <div className="lg:flex shadow-md my-10">
          <div className="lg:w-3/4 bg-white px-10 py-10">
            <div className="flex justify-between border-b border-[#eeeeee] pb-8">
              <h1 className="font-semibold text-xl">
                Shopping Cart
              </h1>
              <h2 className="font-semibold text-xl">
                {cart.cartItems.reduce(
                  (a, c) => a + c.quantity,
                  0
                )}{' '}
                Items
              </h2>
            </div>
            <div className="flex mt-10 mb-5">
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/3">
                Product Details
              </h3>
              <h3 className="font-semibold text-center text-xs uppercase w-1/3 ">
                Quantity
              </h3>
            </div>
            {/* Product detail */}
            {cart.cartItems.map((item) => (
              <div
                className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5"
                key={item._id}
              >
                <div className="flex w-2/3">
                  <div className="w-20">
                    <img
                      className="h-24"
                      src={item.image}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col justify-between ml-4 flex-grow">
                    <span className="font-bold">
                      <p className="text-12">{item.name}</p>
                      <p className="text-11">
                        {item.price} đ
                      </p>
                    </span>
                  </div>
                </div>
                <div className="flex justify-center w-1/3">
                  <span className="mx-2  text-center w-8">
                    {item.quantity}
                  </span>
                </div>
              </div>
            ))}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h1 className="font-bold text-20">
                  Thông tin khách hàng
                </h1>
                <div className="flex flex-col gap-3 mt-3">
                  {Object.entries(cart.shippingAddress).map(
                    ([key, value], i) => (
                      <p
                        key={key}
                        className="font-semibold capitalize"
                      >
                        {key}: {value}
                      </p>
                    )
                  )}
                </div>
              </div>
              <div>
                <h1 className="font-bold text-20">
                  Hình thức thanh toán
                </h1>
                <p className="font-semibold">
                  {cart.paymentMethod}
                </p>
              </div>
            </div>
          </div>
          {/* Summary */}
          <div
            id="summary"
            className="lg:w-1/4 px-8 py-10 bg-white"
          >
            <h1 className="font-semibold text-2xl border-b border-[#eeeeee] pb-8">
              Tổng cộng
            </h1>
            <div className="flex justify-between mt-10 mb-5">
              <span className="font-semibold text-sm uppercase">
                Items:{' '}
                {cart.cartItems.reduce(
                  (a, c) => a + c.quantity,
                  0
                )}
              </span>
              {cart.cartItems.itemsPrice ? (
                <span className="font-semibold text-sm">
                  {cart.cartItems
                    .reduce(
                      (a, c) => a + c.price * c.quantity,
                      0
                    )
                    .toFixed(3)}{' '}
                  đ
                </span>
              ) : (
                <span></span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              {cart.cartItems.map((item) => (
                <span
                  className="font-semibold text-10 flex flex-row justify-between gap-2"
                  key={item._id}
                >
                  <p className="">
                    <span className="text-primary-color">
                      {item.quantity}{' '}
                    </span>
                    {item.name}
                  </p>
                  <p className="">
                    {(item.price * item.quantity).toFixed(
                      3
                    )}
                    đ
                  </p>
                </span>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-semibold text-10 flex flex-row justify-between gap-2">
                <p className="">Phí ship</p>
                <p className="">{cart.shippingPrice} đ</p>
              </span>
            </div>
            <div className="border-t border-[#eeeeee] mt-8">
              <div className="flex font-semibold justify-between py-6 text-sm">
                <span>Tổng phí</span>
                {cart.itemsPrice ? (
                  <span>{cart.totalPrice} đ</span>
                ) : (
                  <span></span>
                )}
              </div>
              <button
                onClick={submitHandler}
                disabled={cart.length === 0}
                className="bg-primary-btn py-3 text-sm text-white font-semibold uppercase w-full rounded"
              >
                Đặt Hàng
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;

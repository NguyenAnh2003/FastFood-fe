import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import UserPopup from '../../components/popup/UserPopup';
import { Store } from '../../store/Store';

export default function CartScreen() {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } =
    useContext(Store);
  console.log(state);
  const {
    cart: { cartItems },
    userInfo,
  } = state;

  const [openUserModal, setOpenUserModal] = useState(false);
  const [movingPayment, setMovingPayment] = useState(false);

  const shippingPricefunc = (e) => {
    return e ? 15 : 0;
  };

  console.log('Items', cartItems);
  cartItems.itemsPrice = cartItems.reduce(
    (a, c) => a + c.quantity * c.price,
    0
  );
  cartItems.totalPrice = cartItems.itemsPrice.toFixed(3);
  console.log(cartItems.totalPrice);

  const updateCartHandler = async (item, quantity) => {
    const { data } = await axios.get(
      `/api/products/${item._id}`
    ); //

    if (data.countInStock < quantity) {
      window.alert(`${data.name} Out of stock`);
      return;
    }

    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...item, quantity },
    });
  };

  const removeItemHandler = (item) => {
    ctxDispatch({
      type: 'CART_REMOVE_ITEM',
      payload: item,
    });
    console.log('removed');
  };

  const checkOutHandler = () => {
    if (!userInfo) {
      navigate('/signin?redirect');
    } else {
      setOpenUserModal(true);
      setMovingPayment(true);
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
                {cartItems.reduce(
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
            {cartItems.map((item) => (
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
                    <p
                      onClick={() =>
                        removeItemHandler(item)
                      }
                      className="font-semibold text-red-500 text-xs cursor-pointer"
                    >
                      Remove
                    </p>
                  </div>
                </div>
                <div className="flex justify-center w-1/3">
                  <button
                    disabled={item.quantity === 1}
                    onClick={() =>
                      updateCartHandler(
                        item,
                        item.quantity - 1
                      )
                    }
                  >
                    <svg
                      className="fill-current text-gray-600 w-3"
                      viewBox="0 0 448 512"
                    >
                      <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                    </svg>
                  </button>

                  <span className="mx-2  text-center w-8">
                    {item.quantity}
                  </span>

                  <button
                    disabled={item.quantity === item.status}
                    onClick={() =>
                      updateCartHandler(
                        item,
                        item.quantity + 1
                      )
                    }
                  >
                    <svg
                      className="fill-current text-gray-600 w-3"
                      viewBox="0 0 448 512"
                    >
                      <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}

            {/* Back to product screen (home screen) */}
            <button
              onClick={() => navigate(-1)}
              className="flex font-semibold text-primary-color text-sm mt-10"
            >
              <svg
                className="fill-current mr-2 text-primary-color w-4"
                viewBox="0 0 448 512"
              >
                <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
              </svg>
              Continue Shopping
            </button>
          </div>
          {/* Summary */}
          <div
            id="summary"
            className="lg:w-1/4 px-8 py-10 bg-white"
          >
            <h1 className="font-semibold text-2xl border-b border-[#eeeeee] pb-8">
              Order Summary
            </h1>
            <div className="flex justify-between mt-10 mb-5">
              <span className="font-semibold text-sm uppercase">
                Items:{' '}
                {cartItems.reduce(
                  (a, c) => a + c.quantity,
                  0
                )}
              </span>
              {cartItems.itemsPrice ? (
                <span className="font-semibold text-sm">
                  {cartItems
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
              {cartItems.map((item) => (
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
            <div className="border-t border-[#eeeeee] mt-8">
              <div className="flex font-semibold justify-between py-6 text-sm">
                <span>Total cost</span>
                {cartItems.itemsPrice ? (
                  <span>{cartItems.totalPrice} đ</span>
                ) : (
                  <span></span>
                )}
              </div>
              <button
                onClick={checkOutHandler}
                disabled={cartItems.length === 0}
                className="bg-primary-btn py-3 text-sm text-white uppercase w-full rounded"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
      <UserPopup
        openUserModal={openUserModal}
        setOpenUserModal={setOpenUserModal}
        movingPayment={movingPayment}
      />
    </div>
  );
}

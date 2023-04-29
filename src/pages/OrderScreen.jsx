import axios from 'axios';
import React, {
  useContext,
  useEffect,
  useReducer,
} from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import LoadingComponent from '../components/loading/LoadingComponent';
import { Store } from '../store/Store';
import {
  PayPalButtons,
  usePayPalScriptReducer,
} from '@paypal/react-paypal-js';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true, error: '' };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        loading: false,
        order: action.payload,
        error: '',
      };
    case 'FETCH_FAIL':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case 'PAY_REQUEST':
      return { ...state, loadingPay: true };
    case 'PAY_SUCCESS':
      return {
        ...state,
        loadingPay: false,
        successPay: true,
      };
    case 'PAY_FAIL':
      return {
        ...state,
        loadingPay: false,
        errorPay: action.payload,
      };
    case 'PAY_RESET':
      return {
        ...state,
        loadingPay: false,
        successPay: false,
      };
    default:
      return state;
  }
};

const OrderScreen = ({ isPayPal }) => {
  const { id: orderId } = useParams();
  const { state } = useContext(Store);
  const { userInfo } = state;
  const [{ isPending }, paypalDispatch] =
    usePayPalScriptReducer();

  const [
    { loading, order, error, successPay, loadingPay },
    dispatch,
  ] = useReducer(reducer, {
    loading: true,
    order: {},
  });

  const createOrder = (data, actions) => {
    return actions.order
      .create({
        purchase_units: [
          {
            amount: { value: order.totalPrice },
          },
        ],
      })
      .then((orderId) => {
        return orderId;
      });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture().then(async (details) => {
      try {
        dispatch({ type: 'PAY_REQUEST' });
        const { data } = await axios.put(
          `/api/orders/${order._id}/pay`,
          details,
          {
            headers: {
              authorization: `Bearer ${userInfo.token}`,
            },
          }
        );
        dispatch({ type: 'PAY_SUCCESS', payload: data });
        alert('Paid');
      } catch (error) {
        dispatch({ type: 'PAY_FAIL' });
      }
    });
  };

  const onError = (error) => {
    console.log(error);
  };

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        dispatch({ type: 'FETCH_REQUEST' });
        const { data } = await axios.get(
          `/api/orders/${orderId}`,
          {
            headers: {
              authorization: `Bearer ${userInfo.token}`,
            },
          }
        );
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (error) {
        console.log(error);
      }
    };
    if (
      !order._id ||
      successPay ||
      (order._id && order._id !== orderId)
    ) {
      fetchOrder();
      if (successPay) {
        dispatch({ type: 'PAY_RESET' });
      }
    } else {
      const loadPayPalScript = async () => {
        const { data: clientId } = await axios.get(
          '/api/keys/paypal',
          {
            headers: {
              authorization: `Bearer ${userInfo.token}`,
            },
          }
        );
        paypalDispatch({
          type: 'resetOptions',
          value: {
            'client-id': clientId,
            currency: 'USD',
          },
        });
        paypalDispatch({
          type: 'setLoadingStatus',
          value: 'pending',
        });
      };
      loadPayPalScript();
    }
  }, [
    order,
    userInfo,
    orderId,
    paypalDispatch,
    successPay,
  ]);

  return (
    <div>
      <Helmet>
        <title>Order</title>
      </Helmet>
      <div className="container xl:px-10 mx-auto mt-10">
        <div className="lg:flex shadow-md my-10">
          <div className="lg:w-3/4 bg-white px-10 py-10">
            <div className="flex justify-between border-b border-[#eeeeee] pb-8">
              <h1 className="font-semibold text-xl">
                Shopping order
              </h1>
              <h2 className="font-semibold text-xl">
                {order.orderItems.reduce(
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
            {order.orderItems.map((item) => (
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
                        {item.price.toFixed(3)} đ
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h1 className="font-bold text-20">
                  Thông tin khách hàng
                </h1>
                <div className="flex flex-col gap-3 mt-3">
                  {Object.entries(
                    order.shippingAddress
                  ).map(([key, value], i) => (
                    <p
                      key={key}
                      className="font-semibold capitalize"
                    >
                      {key}: {value}
                    </p>
                  ))}
                </div>
              </div>
              <div>
                <h1 className="font-bold text-20">
                  Hình thức thanh toán
                </h1>
                <p className="font-semibold">
                  {order.paymentMethod}
                </p>
              </div>
              <div>
                <h1 className="font-bold text-20">
                  Tình trạng đơn hàng
                </h1>
                <p className="font-semibold">
                  {order.isPaid ? (
                    <p className="text-green-500">
                      Đã thanh toán
                    </p>
                  ) : (
                    <p className="text-primary-color">
                      Chưa thanh toán
                    </p>
                  )}
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
                {order.orderItems.reduce(
                  (a, c) => a + c.quantity,
                  0
                )}
              </span>
              {order.orderItems.itemsPrice ? (
                <span className="font-semibold text-sm">
                  {order.orderItems
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
              {order.orderItems.map((item) => (
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
                <p className="">
                  {order.shippingPrice.toFixed(3)} đ
                </p>
              </span>
            </div>
            <div className="border-t border-[#eeeeee] mt-8">
              <div className="flex font-semibold justify-between py-6 text-sm">
                <span>Tổng phí</span>
                {order.itemsPrice ? (
                  <span>
                    {order.totalPrice.toFixed(3)} đ
                  </span>
                ) : (
                  <span></span>
                )}
              </div>
              {order.paymentMethod === 'PayPal' ? (
                <React.Fragment>
                  {!order.isPaid && (
                    <React.Fragment>
                      {isPending ? (
                        <LoadingComponent />
                      ) : (
                        <React.Fragment>
                          <PayPalButtons
                            createOrder={createOrder}
                            onApprove={onApprove}
                            onError={onError}
                          ></PayPalButtons>
                        </React.Fragment>
                      )}
                    </React.Fragment>
                  )}
                </React.Fragment>
              ) : (
                <React.Fragment></React.Fragment>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderScreen;

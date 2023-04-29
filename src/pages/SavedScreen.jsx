import React, {
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from 'react';
import { Helmet } from 'react-helmet-async';
import { Store } from '../store/Store';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../components/card/ProductCard';
import getWishList from '../libs/apis/getWishlist';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default function SavedScreen() {
  const {
    state,
    dispatch: { ctxDispatch },
  } = useContext(Store);
  const { userInfo } = state;

  const navigate = useNavigate();

  const [{ loading, products }, dispatch] = useReducer(
    reducer,
    { loading: true, products: [] }
  );

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const userId = userInfo._id;
        const data = await getWishList(userId);
        console.log('get wishlist', data.rs.products);
        dispatch({
          type: 'FETCH_REQUEST',
          payload: data.rs.products,
        });
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchAPI();

    if (!userInfo) {
      navigate('/signin');
    }
  }, [userInfo, navigate]);

  const total = useMemo(() => {
    console.log('Re render');
    return products.length;
  }, [products]);

  return (
    <div>
      <Helmet>
        <title>Your wishlist</title>
      </Helmet>
      <h1 className="text-center text-3xl font-lob font-bold uppercase text-[#f97316] mt-10">
        yêu thích ({total})
      </h1>
      {products.length === 0 ? (
        <div className="min-h-[600px] flex items-center justify-center">
          <h1 className="text-center text-7xl font-bold uppercase text-[#f97316] mt-10">
            None
          </h1>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-1 mt-5 justify-center min-h-[600px]">
          <div className="px-3 grid-cols-1 sm:grid-cols-2 col-span-5 lg:w-3/4">
            <div className=" grid-cols-1 sm:grid-cols-2  grid gap-6 lg:grid-cols-3">
              {products.map((item) => (
                <ProductCard
                  product={item}
                  key={item.productId}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

import axios from 'axios';
import React, {
  useEffect,
  useReducer,
  useState,
} from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from '../components/card/ProductCard';
import CategoryDropDown from '../components/CategoryDropDown';
import CategorySiderBar from '../components/CategorySiderBar';
import LoadingComponent from '../components/loading/LoadingComponent';
import Pagination from '../components/Pagination';
import useResize from '../hook/useResize';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return {
        ...state,
        products: action.payload.products,
        pages: action.payload.totalPages,
        loading: false,
      };
    default:
      return state;
  }
};

export default function MenuProducts() {
  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const category = sp.get('category') || 'all';

  const [{ loading, products }, dispatch] = useReducer(
    reducer,
    {
      loading: true,
      products: [],
    }
  );

  const windowSize = useResize();

  const [pageNumber, setPageNumber] = useState(0);
  const [numberOfPage, setNumberOfPage] = useState(0);
  const pages = new Array(numberOfPage)
    .fill(null)
    .map((v, i) => i);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `/api/products?category=${category}&page=${pageNumber}`
      );
      console.log(data);
      dispatch({ type: 'FETCH_REQUEST', payload: data });
      setNumberOfPage(data.totalPages);
    };
    fetchData();
  }, [category, pageNumber]);

  const props = {
    pages: pages,
    setPageNumber: setPageNumber,
  };

  return loading ? (
    <LoadingComponent />
  ) : (
    <div className="container overflow-hidden mt-5">
      <h1 className="text-center text-7xl font-lob font-bold uppercase text-[#f97316] mt-10">
        Thực đơn
      </h1>

      <div className="flex flex-col lg:flex-row gap-3 mt-5">
        <div className="grid-cols-1 col-span-1 w-1/4">
          {/* Filter food */}
          {windowSize.width > 1024 ? (
            <CategorySiderBar />
          ) : (
            <CategoryDropDown />
          )}
        </div>
        <div className="flex flex-col gap-6 lg:w-3/4">
          <div className="grid-cols-1 sm:grid-cols-2 grid gap-6 lg:grid-cols-3">
            {products.map((item) => (
              <ProductCard product={item} key={item._id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

import axios from 'axios';
import React, {
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from '../../components/card/ProductCard';
import CategoryDropDown from '../../components/CategoryDropDown';
import CategorySiderBar from '../../components/CategorySiderBar';
import LoadingComponent from '../../components/loading/LoadingComponent';

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

  const [{ loading, products }, dispatch] = useReducer(
    reducer,
    {
      loading: true,
      products: [],
    }
  );

  const [pageNumber, setPageNumber] = useState(0);
  const [numberOfPage, setNumberOfPage] = useState(0);
  const pages = new Array(numberOfPage)
    .fill(null)
    .map((v, i) => i);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `/api/products?page=${pageNumber}`
      );
      console.log(data);
      dispatch({ type: 'FETCH_REQUEST', payload: data });
      setNumberOfPage(data.totalPages);
    };
    fetchData();
  }, [pageNumber]);

  return loading ? (
    <LoadingComponent />
  ) : (
    <div className="container overflow-hidden mt-5">
      <div className="inline-flex -space-x-px rounded-md shadow-sm">
        {pages.map((i, index) => (
          <button
            key={index}
            className="z-10 inline-flex items-center border border-white bg-primary-btn px-4 py-2 text-sm font-medium text-white focus:z-20"
            onClick={() => setPageNumber(i)}
          >
            {i + 1}
          </button>
        ))}
      </div>
      <div className="flex flex-col lg:flex-row gap-1 mt-5">
        <div className=" grid-cols-1 col-span-1 w-1/3">
          {/* Filter food */}
          <CategorySiderBar />
          <CategoryDropDown />
        </div>
        <div className="pl-3 grid-cols-1 sm:grid-cols-2 col-span-5">
          <div className=" grid-cols-1 sm:grid-cols-2 grid gap-6 lg:grid-cols-3">
            {products.map((item) => (
              <ProductCard product={item} key={item._id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

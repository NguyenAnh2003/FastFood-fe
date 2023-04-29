import React, {
  useEffect,
  useReducer,

} from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from '../components/card/ProductCard';
import CategoryDropDown from '../components/CategoryDropDown';
import CategorySiderBar from '../components/CategorySiderBar';
import useResize from '../hook/useResize';
import { getProductsByCategory } from '../libs/apis/getProducts';
import { reducer } from '../store/Store';
import { FETCH_PRODUCTS } from '../store/Constanst';

export default function MenuProducts() {
  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const category = sp.get('category') || 'all';

  const [{  products }, dispatch] = useReducer(
    reducer,
    {
      products: [],
    }
  );

  const windowSize = useResize();


  useEffect(() => {
    const fetchData = async () => {
      const data = await getProductsByCategory(category);
      console.log(data);
      dispatch({ type: FETCH_PRODUCTS, payload: data });
      // setNumberOfPage(data.totalPages, );
    };
    fetchData();
  }, [category,  windowSize]);


  return (
    <div className="container overflow-hidden mt-5">
      <h1 className="text-center text-7xl font-lob font-bold uppercase text-[#f97316] mt-10">
        Thực đơn
      </h1>

      <div className="flex flex-col lg:flex-row gap-3 mt-5">
        <div className="grid-cols-1 col-span-1 w-1/4">
          {/* Filter food */}
          {windowSize.width > 1023.5 ? (
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

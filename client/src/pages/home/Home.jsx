import React, { useEffect, useReducer } from 'react'
// import ProductCard from '../../components/products/ProductCard.jsx';
import axios from 'axios';
import ProductCard from '../../components/products/ProductCard';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return {...state, loading: true};
    case 'FETCH_SUCCESS':
      return {...state, loading: false, products: action.payload};
    case 'FETCH_FAIL':
      return {...state, loading: false, error: action.payload};
    default:
      return state;
  }
}

export default function Home() {
  const [{loading, error, products}, dispatch] = useReducer(reducer,{
    products: [],
    loading: true,
    error: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('/api/products');
        dispatch({type: 'FETCH_SUCCESS', payload: data});
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className='flex flex-row'>
    {products.map(product => (
      <ProductCard key={product._id} product={product} />
    ))}
    </div>
  )
}

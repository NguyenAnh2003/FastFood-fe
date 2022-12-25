import React from 'react';
import { useParams } from 'react-router-dom';

const SingleProduct = () => {
  const { id: foodId } = useParams();
  
  return (
    <div>
      <div></div>
    </div>
  );
};

export default SingleProduct;

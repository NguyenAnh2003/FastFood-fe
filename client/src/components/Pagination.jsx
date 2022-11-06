import React from 'react';
import { useLocation } from 'react-router-dom';

const Pagination = (props) => {
  const { pages, setPageNumber } = props;
  const location = useLocation();
  const path = location.pathname + location.search;
  console.log(path);

  

  return (
    <div>
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
    </div>
  );
};

export default Pagination;

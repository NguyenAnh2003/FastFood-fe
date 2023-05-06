import React from 'react';
// import NewsCard from '../components/card/NewsCard';
import { useLoaderData } from 'react-router-dom';

const NewsCard = React.lazy(() => import('../components/card/NewsCard'))

export default function News() {
  const data = useLoaderData();

  return (
    <React.Fragment>
      <div className="container grid-cols-1 sm:grid-cols-2 mt-6 grid gap-6 xl:grid-cols-4 lg:grid-cols-3">
        {data?.map((post) => (
          <NewsCard key={post._id} post={post} />
        ))}
      </div>
    </React.Fragment>
  );
}

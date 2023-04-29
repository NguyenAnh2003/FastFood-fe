import React, { useEffect, useReducer } from 'react';
import NewsCard from '../components/card/NewsCard';
import LoadingComponent from '../components/loading/LoadingComponent';
import getPosts from '../libs/apis/getPosts';
import { reducer } from '../store/Store';
import { FETCH_NEWS } from '../store/Constanst';


export default function News() {
  const [{ loading, news }, dispatch] = useReducer(
    reducer,
    {
      loading: true,
      error: '',
      news: [],
    }
  );
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data  = await getPosts()
        dispatch({ type: FETCH_NEWS, payload: data });
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return loading ? (
    <LoadingComponent />
  ) : (
    <React.Fragment>
      <div className="container grid-cols-1 sm:grid-cols-2 mt-6 grid gap-6 xl:grid-cols-4 lg:grid-cols-3">
        {news.map((post) => (
          <NewsCard key={post._id} post={post} />
        ))}
      </div>
    </React.Fragment>
  );
}

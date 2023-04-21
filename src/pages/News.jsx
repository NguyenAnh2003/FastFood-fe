import axios from 'axios';
import React, { useEffect, useReducer } from 'react';
import { useState } from 'react';
import NewsCard from '../components/card/NewsCard';
import LoadingComponent from '../components/loading/LoadingComponent';
import getPosts from '../libs/apis/getPosts';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return {
        ...state,
        news: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default function News() {
  const [{ loading, error, news }, dispatch] = useReducer(
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
        dispatch({ type: 'FETCH_REQUEST', payload: data });
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

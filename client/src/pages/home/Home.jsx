import React, { useEffect, useReducer } from "react";
import axios from "axios";
import ProductCard from "../../components/card/ProductCard.jsx";
import NewsCard from "../../components/card/NewsCard.jsx";
import { Helmet } from "react-helmet-async";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        products: action.payload,
        news: action.payloadnews,
      };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default function Home() {
  const [{ loading, error, products, news }, dispatch] = useReducer(reducer, {
    products: [],
    news: [],
    loading: true,
    error: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("/api/combine/home");
        dispatch({
          type: "FETCH_SUCCESS",
          payload: data.products,
          payloadnews: data.news,
        });
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <React.Fragment>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className="flex flex-row gap-10 flex-wrap">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
      <div className="">
        {news.map((post) => (
          <NewsCard key={post._id} post={post} />
        ))}
      </div>
    </React.Fragment>
  );
}

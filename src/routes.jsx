import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
import Layout from './components/Layout';
import LoadingComponent from './components/loading/LoadingComponent';

const lazyLoadRoutes = (pageName) => {
  const LazyComponent = lazy(() =>
    import(`./pages/${pageName}`)
  );

  return (
    <Suspense fallback={<LoadingComponent />}>
      <LazyComponent />
    </Suspense>
  );
};

const BASE_URL = 'https://localhost:8888/api/';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: lazyLoadRoutes('Home'),
        loader: async () => {
          const res = await fetch(`${BASE_URL}welcome`)
            .then((res) => res.json())
            .catch((err) => console.log(err));
          return res;
        },
      },
      {
        path: 'about',
        element: lazyLoadRoutes('About'),
      },
      {
        path: 'menu',
        element: lazyLoadRoutes('MenuProducts'),
      },
      {
        path: 'news',
        element: lazyLoadRoutes('News'),
        loader: async () => {
          const res = await fetch(`${BASE_URL}posts`)
            .then((rs) => rs.json())
            .catch((err) => console.log(err));
          return res;
        },
      },
      {
        path: 'news/:id',
        element: lazyLoadRoutes('SingleNews'),
      },
      {
        path: 'contact',
        element: lazyLoadRoutes('Contact'),
      },
      {
        path: 'cart',
        element: lazyLoadRoutes('CartScreen'),
      },
      {
        path: 'placeorder',
        element: lazyLoadRoutes('PlaceOrder'),
      },
      {
        path: 'order/:id',
        element: lazyLoadRoutes('OrderScreen'),
      },
      {
        path: ':userId/saved',
        element: lazyLoadRoutes('SavedScreen'),
      },
      {
        path: 'food/:id',
        element: lazyLoadRoutes('SingleProduct'),
      },
      {
        path: 'signin',
        element: lazyLoadRoutes('SignInScreen'),
      },
      {
        path: 'signup',
        element: lazyLoadRoutes('SignUpScreen'),
      },
      {
        path: 'profile',
        element: lazyLoadRoutes('ProfileScreen'),
      },
      // Test
      {
        path: 'test',
        element: lazyLoadRoutes('FormTest'),
      },
    ],
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;

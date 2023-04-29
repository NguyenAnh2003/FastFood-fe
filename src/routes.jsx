import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import React, { lazy } from 'react';
import Layout from './components/Layout';
import { Suspense } from 'react';
import LoadingComponent from './components/loading/LoadingComponent';

const lazyLoadRoutes = (pageName) => {
  const LazyElement = lazy(() =>
    import(`./pages/${pageName}`)
  );

  return (
    <Suspense fallback={<LoadingComponent />}>
      <LazyElement />
    </Suspense>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: lazyLoadRoutes('Home'),
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
        path: 'saved',
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

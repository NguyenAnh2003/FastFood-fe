import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import React from 'react';
import About from './pages/About';
import MenuProducts from './pages/MenuProducts';
import News from './pages/News';
import SingleNews from './pages/SingleNews';
import Contact from './pages/Contact';
import CartScreen from './pages/CartScreen';
import PlaceOrder from './pages/PlaceOrder';
import OrderScreen from './pages/OrderScreen';
import SavedScreen from './pages/SavedScreen';
import SingleProduct from './pages/SingleProduct';
import SignInScreen from './pages/SignInScreen';
import SignUpScreen from './pages/SignUpScreen';
import ProfileScreen from './pages/ProfileScreen';
import Home from './pages/Home';
import Layout from './components/Layout';
import FormTest from './pages/FormTest';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'menu',
        element: <MenuProducts />,
      },
      {
        path: 'news',
        element: <News />,
      },
      {
        path: 'news/:id',
        element: <SingleNews />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'cart',
        element: <CartScreen />,
      },
      {
        path: 'placeorder',
        element: <PlaceOrder />,
      },
      {
        path: 'order/:id',
        element: <OrderScreen />,
      },
      {
        path: 'saved',
        element: <SavedScreen />,
      },
      {
        path: 'food/:id',
        element: <SingleProduct />,
      },
      {
        path: 'signin',
        element: <SignInScreen />,
      },
      {
        path: 'signup',
        element: <SignUpScreen />,
      },
      {
        path: 'profile',
        element: <ProfileScreen />,
      },
      // Test
      {
        path: 'test',
        element: <FormTest />,
      },
    ],
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;

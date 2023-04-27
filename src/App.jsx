import Footer from './components/footer/Footer';
import NavBar from './components/navbar/NavBar';
import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import Home from './pages/Home';
import MenuProducts from './pages/MenuProducts';
import News from './pages/News';
import Contact from './pages/Contact';
import CartScreen from './pages/CartScreen';
import SavedScreen from './pages/SavedScreen';
import SignInScreen from './pages/SignInScreen';
import SignUpScreen from './pages/SignUpScreen';
import ProfileScreen from './pages/ProfileScreen';
import SingleNews from './pages/SingleNews';
import About from './pages/About';
import PlaceOrder from './pages/PlaceOrder';
import OrderScreen from './pages/OrderScreen';
import SingleProduct from './pages/SingleProduct';
import { useContext } from 'react';
import { Store } from './store/Store';
import AppRoutes from './routes';

function App() {
  const { state } = useContext(Store);
  const { userInfo } = state;
  console.log('current user', userInfo);
  return <AppRoutes/>
}


export default App;

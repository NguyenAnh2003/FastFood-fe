import Footer from './components/footer/Footer';
import NavBar from './components/navbar/NavBar';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import Home from './pages/home/Home';
import MenuProducts from './pages/MenuProducts';
import News from './pages/News';
import Contact from './pages/contact/Contact';
import CartScreen from './pages/cart/CartScreen';
import SavedScreen from './pages/SavedScreen';
import SignInScreen from './pages/SignInScreen';
import SignUpScreen from './pages/SignUpScreen';
import ProfileScreen from './pages/profile/ProfileScreen';
import OrderHistoryScreen from './pages/OrderHistoryScreen';
import SingleNews from './pages/SingleNews';
import About from './pages/about/About';
import PlaceOrder from './pages/order/PlaceOrder';
import OrderScreen from './pages/order/OrderScreen';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <NavBar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/menu"
              element={<MenuProducts />}
            />
            <Route path="/news" element={<News />} />
            <Route
              path="/news/:id"
              element={<SingleNews />}
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<CartScreen />} />
            <Route
              path="/placeorder"
              element={<PlaceOrder />}
            />
            <Route path="/order/:id" element={<OrderScreen />} />
            <Route
              path="/saved"
              element={<SavedScreen />}
            />
            {/* User*/}
            <Route
              path="/signin"
              element={<SignInScreen />}
            />
            <Route
              path="/signup"
              element={<SignUpScreen />}
            />
            <Route
              path="/profile?id=/:id"
              element={<ProfileScreen />}
            />
            <Route
              path="/orderhistory"
              element={<OrderHistoryScreen />}
            />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

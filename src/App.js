import Footer from './components/footer/Footer';
import NavBar from './components/navbar/NavBar';
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
import SiderBar from './components/navbar/Sidebar';
import SingleProduct from './pages/SingleProduct';

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
            <Route
              path="/order/:id"
              element={<OrderScreen />}
            />
            <Route
              path="/saved"
              element={<SavedScreen />}
            />
            <Route
              path="/food/:id"
              element={<SingleProduct />}
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
              path="/profile"
              element={<ProfileScreen />}
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

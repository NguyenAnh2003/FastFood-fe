import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/About";
import MenuProducts from "./pages/menu/MenuProducts";
import News from "./pages/news/News";
import Contact from "./pages/Contact";
import CartScreen from "./pages/cart/CartScreen";
import SavedScreen from "./pages/favorite/SavedScreen";
import SignInScreen from "./pages/form/SignInScreen";
import SignUpScreen from "./pages/form/SignUpScreen";
import ProfileScreen from "./pages/profile/ProfileScreen";
import OrderHistoryScreen from "./pages/OrderHistoryScreen";
import CategoryDropDown from "./pages/favorite/module/CategoryDropDown";
import LoadingComponent from "./components/loading/LoadingComponent";

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
            <Route path="/menu" element={<MenuProducts />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<CartScreen />} />
            <Route path="/saved" element={<SavedScreen />} />
            <Route path="/temp" element={<LoadingComponent />} />
            {/* User*/}
            <Route path="/signin" element={<SignInScreen />} />
            <Route path="/signup" element={<SignUpScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="/orderhistory" element={<OrderHistoryScreen />} />
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

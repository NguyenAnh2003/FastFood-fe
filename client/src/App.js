import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import MenuProducts from "./pages/menu/MenuProducts";
import News from "./pages/news/News";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <NavBar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/menu" element={<MenuProducts/>}/>
            <Route path="/news" element={<News/>}/>
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

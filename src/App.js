import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Shop from "./pages/Shop";
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={< Shop />}></Route>
        <Route path="/product/:id" element={<ProductPage />}></Route>
      </Routes>
      <Cart />
      <Footer/>
    </BrowserRouter>
  );
}
export default App;

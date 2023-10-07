import './App.css';
import { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Shop from "./pages/Shop";
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import ProductPage from './pages/ProductPage';
import SearchRes from './pages/SearchRes';
import CategoryItems from './pages/CategoryItems';
import SignIn from './components/SignIn';
import ScrollToTop from './utils/ScrollToTop';
import { FadeIn } from './components/FadeIn';
import { useInView } from 'react-intersection-observer';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/categoryItems/:categoryId" element={<CategoryItems />} />
        <Route path="/searchRes/" element={<SearchRes />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
      <Cart />
      <Footer />
    </>
  );
}
export default App;

import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Shop from "./pages/Shop";
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={< Shop />}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ProductProvider from './contexts/ProductContext';
import ToggleProvider from './contexts/ToggleContext';
import CartProvider from './contexts/CartContext';
import SearchContextProvider from './contexts/SearchContext';
import AuthProvider from './contexts/AuthContext';
import WishListProvider from './contexts/WishListContext';
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from './utils/ScrollToTop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ToggleProvider>
          <WishListProvider>
            <CartProvider>
              <ProductProvider>
                <SearchContextProvider>
                  <ScrollToTop />
                    <App />
                  </SearchContextProvider>
              </ProductProvider>
            </CartProvider>
          </WishListProvider>
        </ToggleProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

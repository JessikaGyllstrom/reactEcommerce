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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToggleProvider>
      <WishListProvider>
        <CartProvider>
          <ProductProvider>
            <AuthProvider>
              <SearchContextProvider>
                <App />
              </SearchContextProvider>
            </AuthProvider>
          </ProductProvider>
        </CartProvider>
      </WishListProvider>
    </ToggleProvider>
  </React.StrictMode>
);

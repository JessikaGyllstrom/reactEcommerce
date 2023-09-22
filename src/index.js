import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ProductProvider from './contexts/ProductContext';
import ToggleProvider from './contexts/ToggleContext';
import CartProvider from './contexts/CartContext';
import SearchContextProvider from './contexts/SearchContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToggleProvider>
      <CartProvider>
        <ProductProvider>
          <SearchContextProvider>

            <App />

                  </SearchContextProvider>
                  </ProductProvider>

      </CartProvider>
      
  </ToggleProvider>
           </React.StrictMode>

);

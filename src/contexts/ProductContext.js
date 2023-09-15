import React, { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  // store products in state
  const [products, setProducts] = useState([]);
  // fetch api 
    useEffect(() => {
        const fetchProducts = async () => {
        console.log("fetching products")
        const response = await fetch("https://fakestoreapi.com/products/");
        const data = await response.json();
        console.log(data)
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
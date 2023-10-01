import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import ProductItem from "../components/ProductItem";
import Categories from "../components/Categories";
import Hero from "../components/Hero";

export default function Shop() {

  const { products } = useContext(ProductContext);

  return (
    <div>
      <Hero/>
      <div className="container mx-auto mt-80" id="shopSection">
        <div className="wrapper w-[90%] mx-auto mb-20 pt-20">
        <Categories />
            <div className="grid grid-cols-1 mt-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:mx-8 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
              {products.map((product) => {
                return (
                  <ProductItem product={product} key={product.id} />
                );
              })}    
          </div>
        </div>
      </div>
    </div>
  )
}

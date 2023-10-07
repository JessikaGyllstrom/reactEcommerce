import React, { useContext, useRef } from "react";
import { ProductContext } from "../contexts/ProductContext";
import ProductItem from "../components/ProductItem";
import Categories from "../components/Categories";
import Hero from "../components/Hero";
import { FadeIn } from "../components/FadeIn";

export default function Shop() {
  
  const { products } = useContext(ProductContext);
  const domRef = useRef();

  return (
    <div>
      <Hero/>
        <FadeIn>
        <div ref={domRef} id="shopSection" className="container mx-auto mt-24">
            <div id="shop" className="wrapper w-[80%] mx-auto mb-20 lg:w-[90%]">
              <Categories />
              <div className="grid grid-cols-1 mt-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:mx-8 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
              {products.map((product) => {
                return (
                  <ProductItem product={product} key={product.id} />
                )
              })}
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  )
}

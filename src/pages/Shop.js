import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import ProductItem from "../components/ProductItem";
import Categories from "../components/Categories";
import WishList from "../components/WishList";

export default function Shop() {

  const { products } = useContext(ProductContext);
  console.log(products);

  return (
    <div className="container mx-auto">
      <Categories />
        <div className="wrapper w-[90%] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:mx-8 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {products.map((product) => {
              return (
                <ProductItem product={product} key={product.id} />
              );
          })}    
        </div>
      </div>
      <WishList />
    </div>
  )
}

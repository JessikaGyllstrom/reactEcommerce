import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import ProductItem from "../components/ProductItem";
import { useParams } from "react-router-dom";
import Categories from "../components/Categories";

export default function CategoryItems() {

  const { products } = useContext(ProductContext);
  const { categoryId } = useParams()
  const filteredArr = products.filter((product) => (product.category === categoryId))

  return (
    <div className="container mx-auto mb-18 h-full mt-10">
      <Categories />
      <div className="w-[80%] flex min-h-screen mb-17 mx-auto items-center justify-center content-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:mx-8 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
          {filteredArr.map((product) => {
            return (
              <ProductItem product={product} key={product.id}/>
            );
          })}   
        </div>
      </div>
    </div>
  )
}

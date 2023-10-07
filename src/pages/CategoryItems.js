import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import ProductItem from "../components/ProductItem";
import { useParams } from "react-router-dom";
import Categories from "../components/Categories";
import ScrollToTop from "../utils/ScrollToTop";
import { FadeIn } from "../components/FadeIn";

export default function CategoryItems(props) {

  const { products } = useContext(ProductContext);
  const { categoryId } = useParams()
  const filteredArr = products.filter((product) => (product.category === categoryId))

  ScrollToTop();

  return (
    <FadeIn>
      <div className="container mx-auto mt-32">
        <Categories />
        <div className="w-[80%] flex min-h-[90vh] mb-17 mx-auto items-center justify-center content-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:mx-8 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {filteredArr.map((product) => {
              return (
                <ProductItem product={product} key={product.id}/>
              );
            })}   
          </div>
        </div>
      </div>
    </FadeIn>
  )
}

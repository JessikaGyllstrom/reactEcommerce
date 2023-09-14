import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Product from "../components/Product";

export default function Shop() {
  // get products from product context
  const { products } = useContext(ProductContext);

  console.log(products);

  return (
      <div>
        <section>
          <div>
            <div>
              {products.map((product) => {
                return (
                  <Product product={product} key={product.id}/>
                );
              })}
            </div>
          </div>
        </section>
    </div>
  )
}

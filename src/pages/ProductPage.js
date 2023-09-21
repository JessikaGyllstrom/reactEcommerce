import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../contexts/ProductContext";
import Button from "../components/Button";

const ProductPage = () => {
  //get current product id from url 
  const { id } = useParams();
  const { products } = useContext(ProductContext);

  const product = products.find((item) => {
      return item.id === parseInt(id);
  });
  // destructure product
  const { title, price, description, image } = product;

  return (
    <div className="container mx-auto">
      <div className="flex justify-center mx-auto w-[70%] lg:w-[60%] xl:w[50%] bg-white shadow-md rounded-xl p-8 duration-500 hover:scale-103 hover:shadow-xl">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
            <img className="max-w-[200px]" src={image} alt={title} />
          </div>
          <div className="text-center lg:text-left">
            <h1 className="text-xl font-medium">{title}</h1>
            <p className="mt-3">{description}</p>
            <div className="w-full">$ {price}
            </div>
              <Button product={product} id={id} />
          </div>          
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

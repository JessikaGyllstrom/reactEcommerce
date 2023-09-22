import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../contexts/ProductContext";
import Button from "../components/Button";

const ProductPage = () => {
  // get current product id from url 
  const { id } = useParams();
  const { products } = useContext(ProductContext);

  const product = products.find((item) => {
      return item.id === parseInt(id);
  });
  // destructure product
  const { title, price, description, image } = product;

  return (
    <div className="container mx-auto h-screen flex justify-center items-center">
      <div className="flex justify-center items-center h-[70%] shadow-md rounded-xl mx-auto w-[70%] lg:w-[55%] xl:w[40%] bg-white p-8">
        <div className="flex flex-col p-2 lg:flex-row items-center">
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
            <img className="max-w-[200px] pr-8" src={image} alt={title} />
          </div>
          <div className="text-center lg:text-left">
            <h1 className="text-xl font-medium">{title}</h1>
            <p className="mt-3">{description}</p>
            <div className="flex items-center justify-between mt-3">
              <div className="font-xl font-semibold">$ {price}</div>
              <div className="w-[50%] items-end">
                <Button className="" product={product} id={id} />
              </div>
            </div>
          </div>          
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

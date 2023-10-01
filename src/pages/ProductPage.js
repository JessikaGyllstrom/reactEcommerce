import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../contexts/ProductContext";
import Button from "../components/Button";
import AddWish from "../components/AddWish";

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
    <div className="container h-[100vh] w-full mt-28 mx-auto flex justify-center items-center">
      <div className="flex justify-center items-center shadow-md rounded-xl w-[85%] lg:w-[40%] mx-auto bg-white p-8">
        <div className="flex flex-col p-2 items-center">
          <div className="flex w-full">
            <AddWish id={product.id} product={product}/>
          </div>
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
            <img className="max-w-[200px] pr-8" src={image} alt={title} />
          </div>
          <div className="text-center lg:text-left">
            <h1 className="text-xl font-medium lg:mt-6">{title}</h1>
            <p className="mt-3">{description}</p>
            <div className="flex items-center justify-end mt-3">
              <div className="text-xl font-semibold mr-8">${price}</div>
              <div className="w-[50%] lg:w-[30%] items-end">
                <Button product={product} id={product.id} />
              </div>
            </div>
          </div>          
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

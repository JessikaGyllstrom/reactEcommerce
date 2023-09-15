import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../contexts/ProductContext";

//TODO
//add breadcrumbs?
//go back btn?
//handle error if no product

const ProductPage = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);

  console.log(id);
  console.log(products);

  const product = products.find((item) => {
      return item.id === parseInt(id);
  });
  console.log(product);
  const { title, price, description, image } = product;

  return (
    <div className="h-screen flex items-center">
      <div className="container flex justify-center mx-auto h-[70%] w-[70%] lg:w-[60%] xl:w[50%] bg-white shadow-md rounded-xl p-8 duration-500 hover:scale-103 hover:shadow-xl">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
            <img className="max-w-[200px]" src={image} alt={title} />
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-xl font-medium">{title}</h1>
            <p className="mt-3">{description}</p>
            <div className="flex justify-between mt-3">
              <div className="flex text-lg font-medium items-center rounded-sm">$ {price}</div>
              <div className="flex w-1/3 justify-center items-center rounded-sm bg-neutral-800 hover:bg-sky-900 transition duration-150 ease-out hover:ease-in">
                <button className="flex m-2 text-slate-50">Add to cart</button>
              </div>
            </div>        
          </div>          
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
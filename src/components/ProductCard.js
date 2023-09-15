import React from "react";
import { Link } from "react-router-dom";

//TODO 
//add ratings?
//cart - functionallity
const ProductCard = ({ product }) => {

  const { id, image, title, price, category } = product;
  
  return (
    <div className="flex flex-col bg-white shadow-md rounded-xl p-2  duration-500 hover:scale-103 hover:shadow-xl">
      <div className="flex w-full justify-center">
        <Link to={`/product/${id}`}><img src={image} alt={title} className="h-48 object-contain group-hover:scale-110 transition duration-300"/></Link>
      </div>
      <div className="flex h-full flex-col p-2">
        <div className="text-sm text-slate-400 uppercase">{category}</div>
          <div className="h-full">
            <Link to={`/product/${id}`}>{title}</Link>
          </div>
          <div className="flex flex-row justify-between">
            <p className="text-lg font-semibold my-3"><span className="font-normal text-slate-900">$</span>{price}</p>  
            <div className="flex flex-row justify-center items-center m-1 rounded-sm bg-neutral-800 hover:bg-sky-900 transition duration-150 ease-out hover:ease-in">
            <button className="flex m-2 text-slate-50">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;

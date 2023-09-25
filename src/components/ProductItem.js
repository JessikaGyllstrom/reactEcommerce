import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import StarRating from "./StarRating";
import AddWish from "../components/AddWish"

const ProductItem = ({ product }) => {
  // destructure product
  const { id, image, title, price, category, rating } = product;

  return (
    <div className="flex flex-col bg-white shadow-md rounded-xl p-3  duration-500 hover:scale-103 hover:shadow-xl">
      <AddWish id={id} product={product}/>
      {/* link to product */}
      <div className="flex w-full justify-center">
        <Link to={`/product/${id}`}><img src={image} alt={title} className="h-48 pr-5 object-contain group-hover:scale-110 transition duration-300"/></Link>
      </div>
      <div className="flex h-full flex-col p-2">
        {/* link to category */}
        <div className="text-sm text-slate-400 mt-3 uppercase">
          <Link to={`/categoryItems/${category}`}>{category}</Link>
        </div>
        {/* rating  */}
        <div className="my-2">
          <StarRating rating={rating.rate} />
        </div>
        {/* link to product */}
        <div className="h-full  mb-2">
          <Link to={`/product/${id}`}>{title}</Link>
        </div>
        <div className="flex justify-between text-md font-medium items-center rounded-sm">
          {/* price */}
          <div className="flex items-center">
            <span className="text-lg">$</span><p className="text-lg">{price}</p>
          </div>
          {/* buy now button */}
          <div className="w-[60%]"> 
            <Button product={product} id={id} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductItem;



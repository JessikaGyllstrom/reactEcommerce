import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  // destructure product
  const { id, image, title, price } = product;

  console.log(image)

  return (
    <div>
      <div>
        <div>
            <Link to={`/product/${id}`} className="">
                <img src={image} alt="" width="150"/>
            </Link> 
        </div>
        <Link to={`/product/${id}`}>
          <h4>{title}</h4>
          <img src={image} width="200px" alt=""></img>
        </Link>
        <h2>$ {price}</h2>
        <button>Add to cart</button>
        </div>
    </div>
  );
};

export default Product;

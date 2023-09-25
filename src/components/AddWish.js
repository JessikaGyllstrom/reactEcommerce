import React from 'react';
import { useContext } from "react";
import { WishListContext } from "../contexts/WishListContext";
import { BsSuitHeartFill } from "react-icons/bs";

const AddWish = ({id, product}) => {
  const { addToCart } = useContext(WishListContext);

  console.log(useContext(WishListContext))
  return (
    <div>
      <BsSuitHeartFill onClick={() => addToCart(product, id)} />

    
    </div>
  );
}
export default AddWish;
import React, { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { HiOutlineShoppingBag } from "react-icons/hi";

// add to cart button
const Button = ({ product, id }) => {

  const { addToCart } = useContext(CartContext);
  // state to toggle button text
  const [btnText, setBtnText] = useState("Buy Now");
  // state to toggle animation
  const [effect, setEffect] = useState(false);

  return (
    <button
      className={`${effect && "animate-bgAnimate"} 
      inline-flex items-center min-w-[100%] overflow-hidden text-white bg-gray-800 group border border-white rounded-md hover:bg-gray-700 transition duration-300 ease-in-out`}
      onClick={() => {
        addToCart(product, id)
        //start animation
        setEffect(true);
        //set button text to unicode character checkmark
        setBtnText("Added! \u2713")
      }}
      // when animation ends reset states 
      onAnimationEnd={() => { setEffect(false); setBtnText("Buy Now") }}
    >
      {/* cart icon and button text */}
      <span className={"px-3.5 py-3 text-white flex  bg-purple-600 "}>
        <HiOutlineShoppingBag className="text-xl hover:text-teal-600" />
      </span>
      <span className="w-full text-sm items-center align-middle tracking-wide mx-2 font-normal lg:text-md">{btnText}</span>
    </button>
  );
};

export default Button;

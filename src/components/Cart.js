import { CartContext } from "../contexts/CartContext";
import { ToggleContext } from "../contexts/ToggleContext";
import React, { useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import CartItem from "./CartItem";

function Cart() {

  const { isOpen, toggleClose } = useContext(ToggleContext);
  const { cart, subTotal } = useContext(CartContext);

  return (
    <div className={`${isOpen ? "animate-smoothInX bg-gray-900 w-full": "hidden"} "bg-gray-900 fixed top-0 right-0 h-full shadow-xl z-20 px-4 md:max-w-[35%]`}>  
      <div className="flex items-center justify-between text-teal-50 py-6 px-5 border-b border-slate-900 mb-2">
        <div className="w-full align-center flex justify-center text-1xl lg:text-2xl tracking-wide font-semibold">Shopping Cart</div>
          <AiOutlineClose className="text-xl cursor-pointer hover:text-purple-600  transition duration-300 ease-in-out" onClick={toggleClose}/>      
        </div>
        <div className="flex flex-col h-screen gap-y-2 px-5 overflow-y-auto overflow-x-hidden border-b">
        {cart.map((item, idx) => {
          return <CartItem item={item} key={idx} />;
        })}
        {/* subtotal */}
        <div className="font-semibold self-end text-light-50">
        {/* limit the number of decimals to two */}
        <span className="mr-2">Subtotal:</span> ${subTotal.toFixed(2)}
      </div>
    </div>
  </div>
  )
};

export default Cart;
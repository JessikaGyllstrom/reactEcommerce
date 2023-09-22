import { CartContext } from "../contexts/CartContext";
import { ToggleContext } from "../contexts/ToggleContext";
import React, { useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import CartItem from "./CartItem";

function Cart() {
  const { isOpen, toggleClose } = useContext(ToggleContext);
  const { cart, subTotal } = useContext(CartContext);

  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } "w-full bg-white fixed top-0 h-full shadow-xl z-20 px-4"`}
    >
    <div className="flex items-center justify-between py-6 px-5 border-b border-slate-900 mb-2">
      <div className="uppercase w-full align-center flex justify-center text-xl font-semibold">Shopping Cart</div>
        <AiOutlineClose className="text-2xl" onClick={toggleClose}/>
      </div>
      <div className="flex flex-col h-screen gap-y-2 px-5 overflow-y-auto overflow-x-hidden border-b">
        {cart.map((item, idx) => {
          return <CartItem item={item} key={idx} />;
        })}
        {/* subtotal */}
        <div className="font-semibold self-end">
          {/* limit the number of decimals to two */}
          <span className="mr-2 text-slate-950">Subtotal:</span> ${subTotal.toFixed(2)}
        </div>
      </div>
    </div>
  );
};

export default Cart;
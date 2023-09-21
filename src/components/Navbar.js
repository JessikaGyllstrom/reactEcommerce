import React, { useContext } from "react";
import { ToggleContext } from "../contexts/ToggleContext";
import { CartContext } from "../contexts/CartContext";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FaShopify } from "react-icons/fa";

export default function Navbar() {
  const { isOpen, setIsOpen } = useContext(ToggleContext);
  const { quantity } = useContext(CartContext);

  return (
    <nav className="flex items-center justify-between py-4 px-8 mb-12 shadow-lg bg-neutral-950">
      <div className="flex">
        <div className="text-slate-50 text-xl font-semibold tracking-wide">
          <FaShopify className="text-3xl text-slate-50" />
        </div> 
        <div className="text-slate-50 text-xl font-semibold tracking-wide ml-3">ShopFusion</div>
      </div>
      {/* cart button */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer flex relative"
      >
        <HiOutlineShoppingBag className="text-2xl text-slate-50" />
        {/* if items in cart display quantity */}
        {quantity > 0 &&
          <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none transform translate-x-1/2 -translate-y-1/2  bg-purple-500 rounded-full">
            {quantity}
          </span>
        }  
      </div>
    </nav>
  );
};

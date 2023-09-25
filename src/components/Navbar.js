import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";
import { ToggleContext } from "../contexts/ToggleContext";
import { CartContext } from "../contexts/CartContext";
// eslint-disable-next-line 
import { AuthContext } from "../contexts/AuthContext";
import { HiOutlineShoppingBag } from "react-icons/hi";
// eslint-disable-next-line 
import { FaShopify, FaUserCircle } from "react-icons/fa";
import { BsSuitHeartFill } from "react-icons/bs";
// eslint-disable-next-line 
import User from "./User";

export default function Navbar() {
  const { isOpen, setIsOpen } = useContext(ToggleContext);
  const { quantity } = useContext(CartContext);
  const { auth } = useContext(AuthContext);

  return (
    <nav className="flex items-center justify-between py-4 px-10 mb-8 shadow-lg bg-gray-800">
      <div className="flex">
        <div className="text-teal-50 text-xl font-semibold tracking-wide">
          {/* shop logo  */}
          <Link to={`/`}>
            <FaShopify className="text-3xl text-light-50 hover:text-purple-600 transition duration-300 ease-in-out" />
          </Link>
        </div> 
        {/* shop name */}
        <div className="text-teal-50 text-2xl tracking-wide ml-1 font-semibold
         hover:text-purple-600 transition duration-300 ease-in-out drop-shadow-2xl">
          <Link to={`/`}>
            <span className="font-bold">S</span>hop<span className="font-bold">T</span>opia
          </Link>
        </div>
      </div>
      <div className="flex items-center">
        {/* searchbar  */}
        <Searchbar />
        {/* cart button */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex relative"
        >
          <HiOutlineShoppingBag className="text-2xl text-teal-50 font-semibold mr-3 hover:text-purple-600" />
          {/* if items in cart display quantity */}
          {quantity > 0 &&
            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none transform translate-x-1/2 -translate-y-1/2  bg-purple-500 rounded-full">
              {quantity}
            </span>
          }  
        </div>
        {/* wishlist */}
        <BsSuitHeartFill className="text-teal-50 text-xl mr-3 hover:text-purple-600 transition duration-300 ease-in-out"/>
        {/* if user is logged in */} 
        {auth.data 
          ? <User />
          // if no user is logged in
          :<Link to={`/sign-in`}>
            <FaUserCircle className="text-xl text-teal-50 mx-1 hover:text-purple-600 transition duration-300 ease-in-out" />
          </Link>
        }
      </div>
    </nav>
  );
};

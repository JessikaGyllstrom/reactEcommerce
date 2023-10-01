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
import { WishListContext } from "../contexts/WishListContext";
import Modal from "./Modal";

export default function Navbar() {
  const { isOpen, setIsOpen, showModal, setShowModal } = useContext(ToggleContext);
  const { quantity } = useContext(CartContext);
  const { count } = useContext(WishListContext);
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <nav className="flex w-full items-center py-4 px-3 justify-center shadow-lg bg-gray-800 fixed z-10 top-0">
      <div className="flex w-[95%]">
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
      <div className="flex w-full justify-end mr-4 lg:mr-14">
        {/* searchbar  */}
        <Searchbar />
      </div>
      <div className="flex min-w-[25%] lg:min-w-[13%] items-center justify-between">
        {/* cart button */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex relative lg:mr-5"
        >
          <HiOutlineShoppingBag className="text-2xl text-teal-50 mr-1 font-semibold hover:text-purple-600" />
          {/* if items in cart display quantity */}
          {quantity > 0 &&
            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none transform translate-x-1/2 -translate-y-1/2  bg-purple-500 rounded-full">
              {quantity}
            </span>
          }  
        </div>
        <div onClick={() => setShowModal(!showModal)}>
        {/* wishlist */}
        <BsSuitHeartFill className="text-teal-50 text-2xl mr-2 lg:mr-5 cursor-pointer hover:text-purple-600 transition duration-300 ease-in-out"/>
        {/* if wishlist items display count */}
        {count > 0 &&
          <span className="absolute top-6 right-15 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none transform translate-x-1/2 -translate-y-1/2  bg-purple-500 rounded-full">
            {count}
          </span>
        }  
        {/* if wishlist is clicked */}
        {showModal ? (
          <Modal />
        ) : null}
        </div>
        {/* if user is logged in  */}
        {isLoggedIn
        ? <User/>
        // if no user is logged in
        : <Link to={`/sign-in`}>
            <FaUserCircle className="text-2xl mr-2 lg:mr-5 text-teal-50  hover:text-purple-600 transition duration-300 ease-in-out" />
          </Link>
        }
        </div>
        </div>
    </nav>
  );
};
 
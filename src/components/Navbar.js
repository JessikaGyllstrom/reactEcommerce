import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";
import { ToggleContext } from "../contexts/ToggleContext";
import { CartContext } from "../contexts/CartContext";
import { AuthContext } from "../contexts/AuthContext";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FaShopify, FaUserCircle } from "react-icons/fa";
import { BsSuitHeartFill } from "react-icons/bs";
import User from "./User";
import { WishListContext } from "../contexts/WishListContext";
import Modal from "./Modal";

export default function Navbar() {
  const { isOpen, setIsOpen, showModal, setShowModal } = useContext(ToggleContext);
  const { quantity } = useContext(CartContext);
  const { count } = useContext(WishListContext);
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <nav className="flex w-full items-center px-3 py-4 mb justify-center shadow-lg bg-gray-800 fixed z-10 top-0 lg:py-5">
      <div className="flex w-full lg:w-[95%]">
        <div className="flex h-full">
          <div className="text-teal-50 text-xl font-semibold tracking-wide">
            {/* shop logo  */}
            <Link to={`/`}>
              <FaShopify className="text-2xl lg:text-4xl lg:mr-1 text-light-50 hover:text-purple-600 transition duration-300 ease-in-out" />
            </Link>
          </div> 
          {/* shop name */}
          <div className="text-teal-50 text-xl lg:text-3xl tracking-wide ml-1 font-semibold
            hover:text-purple-600 transition duration-300 ease-in-out drop-shadow-2xl">
            <Link to={`/`}>
              <span className="font-bold">S</span>hop<span className="font-bold">T</span>opia
            </Link>
          </div>
        </div>
      <div className="flex flex-col w-full static md:flex-row justify-end">
        <div className="flex flex-2 absolute top-10 right-3 w-full mt-2 lg:static justify-end items-end order-last md:order-first md:mr-[6.6rem]">
          {/* searchbar  */}
          <Searchbar />
        </div>
        <div className="flex h-full w-full justify-end md:w-[30%]">
          <div className="flex w-[55%] items-center justify-between md:w-full">
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
            <BsSuitHeartFill  className="text-xl text-teal-50 mr-1 font-semibold cursor-pointer hover:text-purple-600" />
              {/* if wishlist items display count */}
              {count > 0 &&
                <span className="absolute top-7 right-15 ml-1 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none transform translate-x-1/2 -translate-y-1/2  bg-purple-500 rounded-full">
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
              ? <User className="md:ml-4"/>
              // if no user is logged in
              : <Link to={`/sign-in`}>
                  <FaUserCircle className="text-xl text-teal-50 ml-3 hover:text-purple-600 transition duration-300 ease-in-out" />
                </Link>
            }
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
 
import React, { useState } from 'react'
import { FaUserCircle } from "react-icons/fa";
import { useContext } from 'react';
import  { AuthContext } from '../contexts/AuthContext';

function DropDown(data) {
  const [isOpen, setIsOpen] = useState(false); 
  const { auth, setAuth, setIsLoggedIn } = useContext(AuthContext);
  
  const logOut = () => {
    //clearing the context
    setAuth(null);
    setIsLoggedIn(false)
  }

  return (
    <div className="relative inline-block ">
      <button onClick={() => (setIsOpen(!isOpen))}
        className="relative z-10 flex items-center p-2 text-sm text-gray-600 border border-transparent rounded-md focus:border-purple-600 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-cyan-600 dark:focus:ring-blue-400 focus:ring dark:text-white focus:outline-none">
        <span className="mx-0.2 text-lg"><FaUserCircle className='text-teal-50 mr-1 text-xl' /></span><p>{auth}</p>
        <svg className="w-5 h-5 mx-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 15.713L18.01 9.70299L16.597 8.28799L12 12.888L7.40399 8.28799L5.98999 9.70199L12 15.713Z" fill="currentColor"></path>
        </svg>
      </button>
      {isOpen ?
      <div
        onClick={() => (setIsOpen(false))}
        x-transitionEnter="transition ease-out duration-100"
        x-transitionEnter-start="opacity-0 scale-90"
        x-transitionEnter-end="opacity-100 scale-100"
        x-transitionLeave="transition ease-in duration-100"
        x-transitionLeave-start="opacity-100 scale-100"
        x-transitionLeave-end="opacity-0 scale-90"
        class="absolute right-0 z-20 w-48 py-2 mt-2 origin-top-right bg-white rounded-md shadow-xl dark:bg-gray-800"
      >
      <div>
        <div className="flex items-center p-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
          onClick={logOut}            >
          <svg class="w-5 h-5 mx-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 21H10C8.89543 21 8 20.1046 8 19V15H10V19H19V5H10V9H8V5C8 3.89543 8.89543 3 10 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21ZM12 16V13H3V11H12V8L17 12L12 16Z" fill="currentColor"></path>
          </svg>
            <span className="mx-1 onClick=(logOut)">Sign Out</span>
          </div>
        </div>
      </div>
      : null}
    </div>
  )
}
export default DropDown
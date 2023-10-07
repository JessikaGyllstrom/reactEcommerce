import React, { useState, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { FaUserCircle } from "react-icons/fa";
import Welcome from "../components/Welcome";
import { ToggleContext } from '../contexts/ToggleContext';
import ScrollToTop from '../utils/ScrollToTop';
import { FadeIn } from './FadeIn';

const SignIn = () => {
  const [userName, setuserName] = useState();
  const { setAuth, setIsLoggedIn } = useContext(AuthContext);
  const { showWelcome, setshowWelcome } = useContext(ToggleContext);

  ScrollToTop();

  const onFormSubmit = e => {
    e.preventDefault();
    setAuth(userName);
    setIsLoggedIn(true);
    setshowWelcome(true)
  };
  return (
    <FadeIn>
      <div className='h-[100vh] w-full justify-center items-center flex'>
        <div className="flex flex-col justify-center w-[90%] lg:w-[27%] xl-w-[20%]">
          <form
            className='w-full mx-auto rounded-lg bg-gray-900 p-8 px-8'
            onSubmit={onFormSubmit}
          >
            <div className='flex justify-center rounded-full'>
              <FaUserCircle className='text-teal-50 text-5xl mb-3 rounded-full shadow-lg shadow-teal-50/40'/>
            </div>
            <h2 className='text-3xl dark:text-white font-bold text-center'>Sign In</h2>
            <div className='flex flex-col text-gray-400 py-2'>
              <label>Username</label>
              <input
                className="rounded-lg bg-gray-700 mt-2 py-1 px-2 focus:bg-gray-800 focus:outline-none"
                type="text"
                placeholder="Enter Username" 
                onChange={e => {
                  setuserName(e.target.value);
                }}
              />
            </div>
            <div className='flex flex-col text-gray-400 py-2'>
              <label>Password</label>
              <input className='py-1 px-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
                type="password"
                placeholder="Password"
              />
            </div>
              <button className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:bg-purple-600/40 hover:shadow-purple-500/50 text-white font-semibold rounded-lg  transition duration-300 ease-in-out'>SignIn</button>
          </form>
          {showWelcome ? (
            <Welcome/>
          ) : null}
        </div>
      </div>
    </FadeIn>
  );
};

export default SignIn;
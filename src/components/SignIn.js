import React, { useState, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import {useNavigate} from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";

const SignIn = () => {
  const [userName, setuserName] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const { setAuthData } = useContext(AuthContext);

  // const onLogOut = () => {
  //   setAuthData(null);
  // } //clearing the context
  // console.log(auth)

  
  const onFormSubmit = e => {
      setAuthData(null)

    e.preventDefault();
    console.log(userName);
    setAuthData(userName);
    setAuthData(password);

    navigate("/");
  };
  return (
     <div className='h-screen w-full'>
      <div className="flex flex-col justify-center">
        <form
          className='max-w-[450px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8'
          onSubmit={onFormSubmit}
        >
          <div className='flex justify-center rounded-full'>
            <FaUserCircle className='text-teal-50 text-5xl mb-3 rounded-full shadow-lg shadow-teal-50/40'/>
          </div>
          <h2 className='text-3xl dark:text-white font-bold text-center'>Sign In</h2>
          <div className='flex flex-col text-gray-400 py-2'>
            <label>Username</label>
            <input
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type="text"
              placeholder="Enter Username" 
              onChange={e => {
                setuserName(e.target.value);
              }}
            />
            </div>
              <div className='flex flex-col text-gray-400 py-2'>
                <label>Password</label>
                <input className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
                  type="password"
                  placeholder="Password"
                  onChange={e => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
                <button className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:bg-purple-600/40 hover:shadow-purple-500/50 text-white font-semibold rounded-lg  transition duration-300 ease-in-out'>SignIn</button>
            </form>
        </div>
    </div>
  );
};

export default SignIn;
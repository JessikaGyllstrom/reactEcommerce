import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { ToggleContext } from "../contexts/ToggleContext";
import { useNavigate } from "react-router-dom";
import { GiDiamondTrophy } from "react-icons/gi";

const Welcome = () => {
  const { auth } = useContext(AuthContext);
  const { setshowWelcome } = useContext(ToggleContext);
  const navigate = useNavigate();

  function handleClose() {
    setshowWelcome(false)
    navigate("/")
  }
  return (
    <>
      <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-slate-800/[0.9]">
        <div className="relative w-auto my-6 max-w-12xl p">
          <div className="border-0 p-8 rounded-lg shadow-lg relative flex flex-col w-full bg-petrol-200 outline-none focus:outline-none">
            <button
              className="bg-transparent self-end border-0 text-black"
              onClick={handleClose}
            >
              <span className="text-gray-600 opacity-7 h-6 w-6 text-2xl block py-0 rounded-full">x</span>
            </button>
            <div className="flex items-start justify-between p-5 text-light-50 rounded-t">
              <div className="w-full flex flex-col justify-center">
                <div className="w-full flex animate-wiggle justify-center text-purple-600 text-6xl mb-5"><GiDiamondTrophy/></div>
                <h5 className="text-2xl  animate-wiggle tracking-wide font-bold">Welcome Back { auth }!</h5>
              </div>
            </div>
            <div className="relative p-6 flex-auto">
              <div className="flex flex-col gap-y-2 px-5 overflow-y-auto overflow-x-hidden">
              <button onClick={handleClose} className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:bg-purple-600/40 hover:shadow-purple-500/50 text-white font-semibold rounded-lg  transition duration-300 ease-in-out'>Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
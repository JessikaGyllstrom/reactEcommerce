import React, { useContext } from "react";
import { WishListContext } from "../contexts/WishListContext";
import { ToggleContext } from "../contexts/ToggleContext";
import { BsSuitHeartFill } from "react-icons/bs";
import { IoTrashOutline } from "react-icons/io5";

const Modal = () => {
  const { wishList, removeItem } = useContext(WishListContext);
  const { setShowModal } = useContext(ToggleContext);

  return (
    <>
      <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-slate-800/[0.9]">
        <div className="relative w-auto my-6 max-w-4xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-petrol-200 outline-none focus:outline-none">
            <div className="flex items-start justify-between p-5 border-b border-solid  text-light-50 border-gray-700 rounded-t">
              <div className="w-full flex  justify-center">
                <h5 className="text-2xl tracking-wide font-bold">WishList</h5>
              </div>
                <button
                  className="bg-transparent border-0 text-black float-right"
                  onClick={() => setShowModal(false)}
                >
                  <span className="text-gray-600 opacity-7 h-6 w-6 text-2xl block py-0 rounded-full">x</span>
                </button>
            </div>
            <div className="relative p-6 flex-auto mb-5">
              <div className="flex flex-col gap-y-2 px-2 overflow-y-auto overflow-x-hidden">
              {wishList.map((item, idx) => {
                return (
                  <div item={item} key={idx} className="text-light-50  bg-petrol-100 p-2 rounded-md">
                    <div className="flex justify-between text-lg">
                      <div className="flex items-center mr-3">
                        <BsSuitHeartFill className="text-teal-50 mr-3"/>{item.title}
                      </div>
                      <div>
                        <IoTrashOutline onClick={() => removeItem(item.id)} className="text-xl mx-1 hover:text-purple-600  cursor-pointer" />
                      </div>
                    </div>
                  </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
import React, { useContext } from "react";
import { IoAddSharp, IoTrashOutline} from "react-icons/io5";
import { AiOutlineMinus } from "react-icons/ai"
import { CartContext } from "../contexts/CartContext";

const CartItem = ({ item }) => {
  const { reduceQuantity, increaseQuantity, removeItem } = useContext(CartContext);
  // destructure item
  const { id, title, image, price, quantity } = item;

  return (
    <div className="w-full flex items-center gap-x-5">
      {/* product image and title */}
      <div>
        <img className="max-w-[80px]" src={image} alt={title} />
      </div>
      <div className="w-full flex flex-col items-center gap-y-5">
        <div className="flex w-full items-center justify-between">
          <div>{title}</div>
          {/* remove product */}
          <div onClick={()=>removeItem(id)}>
            <IoTrashOutline className="text-xl mx-1 hover:text-purple-600  cursor-pointer" />
          </div>
        </div>
        <div className="flex w-full justify-center">
          <div className="flex w-full flex-row justify-between items-center">
            <div className="flex flex-row items-center bg-purple-600 border rounded">
              {/* reduce quantity */}
              <div onClick={()=>reduceQuantity(id)} className="h-full flex items-center cursor-pointer">
                <AiOutlineMinus className="text-md text-slate-50 mx-1 hover:text-slate-950" />
              </div>
              {/* quantity */}
              <div className="bg-white px-2">{quantity}</div>
              {/* reduce quantity */}
              <div onClick={() => increaseQuantity(id)} className="h-full flex-1 flex justify-center items-center cursor-pointer">
                <IoAddSharp className="text-md text-slate-50 mx-1 hover:text-slate-950" />
              </div>
            </div>
            {/* price  */}
            <div>${price}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

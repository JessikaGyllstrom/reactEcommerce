import React, { useState } from 'react';
import { useContext } from "react";
import { WishListContext } from "../contexts/WishListContext";
import { BsSuitHeartFill } from "react-icons/bs";

const AddWish = ({id, product}) => {
  const { addWish, removeItem } = useContext(WishListContext);
  const [check, setCheck] = useState(false)

  return (
    <div className='flex w-full justify-end pr-1 pt-1'>
      <BsSuitHeartFill
        className={`text-lg ${check ? 'text-teal-50' : 'text-purple-600'}`}
        onClick={() => {
          setCheck(prevCheck => !prevCheck);
          addWish(product, id);
          if (check) {
            removeItem(id)
          }
        }
      }
      />
    </div>
  );
}
export default AddWish;
    
        
        
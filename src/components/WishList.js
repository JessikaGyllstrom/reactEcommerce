import React, { useContext } from "react";
import { WishListContext } from "../contexts/WishListContext";

function WishList() {
  const { wishList } = useContext(WishListContext);

  return (
    <><div className="flex items-center justify-between py-6 px-5 border-b border-slate-900 mb-2">
    </div><div className="flex flex-col h-screen gap-y-2 px-5 overflow-y-auto overflow-x-hidden border-b">
        {wishList.map((item, idx) => {
          return (
            <div item={item} key={idx} className="text-purple-600">{ item.count }{item.title}
            </div>
          );
        })}
      </div></>
  );
};


export default WishList;
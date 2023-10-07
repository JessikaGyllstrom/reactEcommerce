import React, { createContext, useEffect, useState } from "react";

export const WishListContext = createContext();

const WishListProvider = ({ children }) => {
  // wishlist state
  const [wishList, setwishList] = useState([]);
  // wishlist count state
  const [count, setcount] = useState(0);

  // update count
  useEffect(() => {
    // if items in list
    if (wishList) {
      // use reduce-method to iterate through list and get the sum of all items 
      const count = wishList.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.count;
      }, 0); // set initial value to 0
      setcount(count);
    }
  }, [wishList]);

  // add to wishhlist
  const addWish = (product, id) => {
    console.log(wishList)
    const newItem = { ...product, count: 1 };
    // check if the item is already in the wishlist
    const wishItem = wishList.find((item) => {
      return item.id === id;
    });
      // if 
    if (wishItem) {
      // create new wishlist with data from current list 
      const newWish = [...wishList].map((item) => {
        // if product is already in cart
        if (item.id === id) {
          // return item and raise its quantity by 1
          return { ...item, quantity: wishItem.count + 1 };
          // if item isnt already in cart return product
        } else return item;
      });
      // set wishlist state with the new wish
      setwishList(newWish);
      // if wish isnt already in wishlist
    } else {
      // update wishlist state with the new wish
      setwishList([...wishList, newItem]);
    }
  };

  // remove item
  const removeItem = (id) => {
    const newWish = wishList.filter((item) => {
      return item.id !== id;
    });
    setwishList(newWish);
  };

  return (
    <WishListContext.Provider
      value={{
        wishList,
        addWish,
        count, 
        removeItem, 
      }}
    >
      {children}
    </WishListContext.Provider>
  );
};

export default WishListProvider;
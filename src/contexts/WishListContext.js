import React, { createContext, useEffect, useState } from "react";

export const WishListContext = createContext();

const WishListProvider = ({ children }) => {
  // cart state
  const [wishList, setwishList] = useState([]);
  // item quantity state
  const [count, setcount] = useState(0);
  // subtotal state

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
    // check if the item is already in the cart
    const wishItem = wishList.find((item) => {
      return item.id === id;
    });
      // if cartitem returns true
    if (wishItem) {
      // create new cart with data from current cart 
      const newWish = [...wishList].map((item) => {
        // if product is already in cart
        if (item.id === id) {
          // return product and raise its quantity by 1
          return { ...item, quantity: wishItem.count + 1 };
          // if product isnt already in cart return product
        } else return item;
      });
      // set cart state with the new cart
      setwishList(newWish);
      // if product isnt already in cart
    } else {
      // update cart state with the new item
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
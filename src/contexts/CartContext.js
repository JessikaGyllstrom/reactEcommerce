import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  // cart state
  const [cart, setCart] = useState([]);
  // item quantity state
  const [quantity, setQuantity] = useState(0);
  // subtotal state
  const [subTotal, setSubTotal] = useState(0);

  // update subtotal 
  useEffect(() => {
    // use reduce-method to iterate through cart and get the sum of all products prices multiplied by their quantity
    const sum = cart.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.price * currentValue.quantity;
      // set initial value to 0
    }, 0);
    setSubTotal(sum);
  // pass in cart as a variable, everytime cart state changes this effect will run again 
  }, [cart]);

  // update quantity
  useEffect(() => {
    // if items in cart
    if (cart) {
      // use reduce-method to iterate through cart and get the sum of all product quantity in cart 
      const quantity = cart.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.quantity;
      }, 0); // set initial value to 0
      setQuantity(quantity);
    }
  }, [cart]);

  // add to cart
  const addToCart = (product, id) => {
    const newItem = { ...product, quantity: 1 };
    // check if the item is already in the cart
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    // if cartitem returns true
    if (cartItem) {
      // create new cart with data from current cart 
      const newCart = [...cart].map((item) => {
        // if product is already in cart
        if (item.id === id) {
          // return product and raise its quantity by 1
          return { ...item, quantity: cartItem.quantity + 1 };
          // if product isnt already in cart return product
        } else return item;
      });
      // set cart state with the new cart
      setCart(newCart);
      // if product isnt already in cart
    } else {
      // update cart state with the new item
      setCart([...cart, newItem]);
    }
  };

  // reduce quantity
  const reduceQuantity = (id) => {
    // check if product is already in cart
    const cartItem = cart.find((item) => item.id === id);
    // if item is already in cart
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          // return item and reduce its quantity by 1
          return { ...item, quantity: cartItem.quantity - 1 };
        } else {
          return item;
        }
      });
      // update cart state
      setCart(newCart);
    }
    // if product quantity is 1
    if (cartItem.quantity < 2) {
      // remove the product
      removeItem(id);
    }
  };

  // increase quantity
  const increaseQuantity = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    addToCart(cartItem, id);
  };

  // remove item
  const removeItem = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        quantity, 
        reduceQuantity, 
        increaseQuantity, 
        removeItem, 
        subTotal
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
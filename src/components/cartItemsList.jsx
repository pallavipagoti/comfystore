import React from "react";
import { useSelector } from "react-redux";
import { CartItem } from ".";

const cartItemsList = () => {
  const { cartItems } = useSelector((state) => state.cartState);
  return (
    <>
      {cartItems.map((item) => {
        return <CartItem key={item.cartID} {...item} />;
      })}
    </>
  );
};

export default cartItemsList;

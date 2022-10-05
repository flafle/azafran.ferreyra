import React from "react";
import CartItems from "../../components/CartItems";
import CartTotals from "../../components/CartTotals";


const CartContainer = () => {
  return (
    <>
    <div >
      <CartItems/>
      <CartTotals/>
    </div>
    </>

  );
};

export default CartContainer;
import React from "react";
import CartItems from "../../components/CartItems";
import CartTotals from "../../components/CartTotals";


const CartContainer = () => {
  return (
    <>
    <div className="prductos__carrito" >
      <CartItems/>
      <CartTotals/>
    </div>
    </>

  );
};

export default CartContainer;
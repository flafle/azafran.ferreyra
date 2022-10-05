import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Shop } from "../../context/CartContext";


const ButtonsCartItems = () => {

  const {clearCart} = useContext(Shop); 

  return (
    <div>
      <button onClick={() => clearCart()}>Vaciar carrito</button>
      <Link to="/"><button>Seguir comprando</button></Link>
   </div>
  );
};

export default ButtonsCartItems;
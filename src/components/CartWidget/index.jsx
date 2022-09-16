import React from "react";
import {HiShoppingCart} from "react-icons/hi";
import "./styles.css";


const CartWidget = () => {

    return (
        <div className="cart">
           <HiShoppingCart color= "black" size={30}/>
        </div>
     
    );

};
export default CartWidget;
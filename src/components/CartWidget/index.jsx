import React from "react";
import {HiShoppingCart} from "react-icons/hi";


const CartWidget = () => {

    return (
        <div style={{
            position : "absolute",
            right: "16px",
            top: "5px",
          
        }}>
           <HiShoppingCart color= "red" size={30}/>

        </div>
     
    );

};
export default CartWidget;
import React from "react";
import { useState } from "react";
import { createContext } from "react";

//declaro el context:
export const Shop = createContext ([]);


//Creo el proveedor:
const CartContext = ({children}) => {
    const [cart, setCart] = useState ([]);

//array del carrito:
const addItem = (item) => {
    const repeatProducts = isInCart(item.id);

    if(repeatProducts) {

        const modifiedCart = cart.map(product => {
            if (product.id === item.id) {
                product.quantity += item.quantity;
                return product;
            }
            return product;
        });
        setCart(modifiedCart)

    } else {
        const cartModified = [...cart, item];
        setCart (cartModified);
    };
};

const isInCart = (id) => {
    return cart.some(product => product.id === id)
};

const removeItem = (id) => {
    const removeCart = cart.filter(product => product.id !== id);
    setCart(removeCart);
};

const clearCart = () => {
    setCart([]);
};
return (
    <Shop.Provider value={{cart, addItem}}>
       {children}
    </Shop.Provider>
);
};

export default CartContext;
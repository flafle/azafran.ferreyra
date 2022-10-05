import React from "react";
import { useState } from "react";
import { createContext } from "react";

//Declaro el context:
export const Shop = createContext ([]);


//Creo el proveedor: este es el "provider".
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


//Para eliminar del carrito
const removeItem = (id) => {
    const removeCart = cart.filter(product => product.id !== id);
    setCart(removeCart);
};

//Para limpiar el carrito:
const clearCart = () => {
    setCart([]);
};

//cantidad:
const totalPrice = () => {
    return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
};
// total:
const totalProducts = () => {
    return cart.reduce ((prev, act) => prev + act.quantity, 0);
};

return (
    <Shop.Provider value={{cart, addItem, removeItem, clearCart, totalPrice, totalProducts}}>
      {children}
    </Shop.Provider>
  );
};

export default CartContext;
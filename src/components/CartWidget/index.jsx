import React from 'react';
import { useContext } from 'react';
import {FaShoppingCart} from 'react-icons/fa'
import { Shop } from '../../context/CartContext';


const CartWidget = () => {

  const {totalProducts} = useContext(Shop);

  return (
    <div >
      <FaShoppingCart/>
      {totalProducts() !== 0 && 
        <div >
          {totalProducts()}
        </div>}
    </div>
  )
}

export default CartWidget;
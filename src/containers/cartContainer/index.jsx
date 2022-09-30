import React from 'react';
import CartItems from '../../components/CartItems';
import CartTotals from '../../components/CartTotals';
import styles from './styles.css';

const CartContainer = () => {

  return (
    <>
    <div className={styles.cartContainer}>
      <CartItems/>
      <CartTotals/>
    </div>
    </>

  )
}

export default CartContainer;
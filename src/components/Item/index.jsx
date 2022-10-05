import React from 'react';
import ItemCount from '../ItemCount';
import styles from './styles.css';
import { useNavigate } from 'react-router-dom';

const Item = ({product}) => {

  const agregarCarrito = (cantidad) => {
    alert(`Se agrego la cantidad ${cantidad} al carrito`);
  };

 
  const navigate = useNavigate();

 
  const handleNavigate = () => {
    navigate(`/detail/${product.id}`)
  }

  return (
    <div className={styles.cardContainer}>
      <img className={styles.cardImage} src={product.image} onClick={handleNavigate} width="100%" alt="" />
      <div className={styles.cardBody}>
        <h6 className={styles.titleProduct}>{product.title}</h6>
        <p className={styles.price}>{(product.price).toFixed(2)}€</p>
        <ItemCount initial={1} stock={product.stock} onAdd={agregarCarrito}/>
      </div>
  </div>
  )
}

export default Item;
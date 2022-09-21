import React from"react";
import ItemCount from "../ItemCount";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.css";

const ItemDetail = ({product}) => {

  const [qty, setQty]= useState(0);
  const navigate = useNavigate();
  const toCart = (quantity) => {
    setQty(quantity)
  }

  const handleFinish = () => {
    navigate ("/cart")
  }

  // const agregarCarrito = (cantidad) => {
  //   console.log(cantidad);
  //   alert(`Se agrego la cantidad ${cantidad} al carrito`);
  // };

  return (
    <div className="products-container">
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={product.image} width={400} alt="imagenProducto" />
      </div>
      <div className={styles.detailsContainer}>
        <h3>{product.title}</h3>
        <p>{product.description}.</p>
        <p>Precio: {product.price}€</p>
        <div className={styles.countContainer}>
       {!qty ?  <ItemCount initial={1} stock={5} onAdd={toCart}/> : <button onClick={handleFinish}>Finalizar compra</button>}  
        </div>
      </div>
    </div>
    </div>
  );
};

export default ItemDetail;
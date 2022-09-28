import React from "react";
import ItemCount from "../ItemCount";
import styles from "./styles.css";
import { useNavigate } from "react-router-dom";


//corresponde a la card del prodcucto agregar css


const Item = ({product}) => {

  const agregarCarrito = (cantidad) => {
    console.log(cantidad);
    alert(`Se agrego la cantidad ${cantidad} al carrito`);
  };

  //Hsook useNavigate
  const navigate = useNavigate();

  
  //para ir al detalle del producto seleccionado
  const handleNavigate = () => {
    navigate(`/detail/${product.id}`)
  };


  return (
    <div className={styles.cardContainer}>
    <img className={styles.cardImage} src={product.image} onClick={handleNavigate} width="100%" alt="" />
    <div className={styles.cardBody}>
      <h6 className={styles.titleProduct}>{product.title}</h6>
      <p className={styles.price}>{product.price}€</p>
      <ItemCount initial={1} stock={product.stock} onAdd={agregarCarrito}/>
    </div>
</div>
 

  );
};

export default Item;

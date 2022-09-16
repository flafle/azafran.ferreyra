import React from "react";
// import { productos } from "../../data/productos";
import Item from "../Item";
import styles from "./styles.css"

const ItemList = ({products}) => {
  return (
    <div className={styles.container}>
      {products.map(product => {
        return <Item key={product.id} product={product}/>
      })}
    </div>
  );
};

export default ItemList;

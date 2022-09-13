import React from 'react';
import { useState, useEffect } from 'react'; 
import "./styles.css"


const ItemCount = ({stock, initial, onAdd}) => {

  const [add, setAdd] = useState(initial);

  const sumProduct = () => {
    if(add < stock) {
      setAdd(add + 1);
    } else {
      alert("No tenemos stock suficiente");
    }
  }

  const restProduct = () => {
    if(add > 1) {
      setAdd(add - 1);
    } else {
      alert("No puedes seleccionar menos de 1")
    }
  }

  const addCart = () => {
    onAdd(count);
    setAdd(initial)
  }

  return (
    <>
      <div>
        <button  onClick={sumProduct}>+</button>
        <p>{add}</p>
        <button  onClick={restProduct}>-</button>
      </div>
      <button onClick={addCart}>Agregar al carrito</button>
    </>
  )
}

export default ItemCount;
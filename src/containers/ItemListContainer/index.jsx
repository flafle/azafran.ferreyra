import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ItemCount from "../../components/ItemCount";
import ItemList from "../../components/ItemList";
import "../ItemListContainer/styles.css";

const ItemListContainer = ({greeting}) => {
  const [productos, setProductos] = useState([])

  useEffect(() => {
(async()=> {
  const obtenerProductos = new Promise ((aceptar, cancelar)=> {
    setTimeout(()=> {
      aceptar(productos)
    }, 3000);
  })
  try {
    const productos = await obtenerProductos;
    setProductos(productos);
  } catch (error) {
    console.log(error);
  }

})()
}, [])
  console.log(productos)

    return (
      <div className="item-list-container">
        <ItemList productos = {productos}/>
      </div>
    )
  };
  <ItemCount/>
 

export default ItemListContainer;
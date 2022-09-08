import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ItemList from "../../components/ItemList";
import "../ItemListContainer/styles.css";

const ItemListContainer = ({greeting}) => { 
  
  const [products, setProductos] = useState([])

  useEffect(() => {
( async ()=> {

  const obtenerProductos = new Promise ((resolve, reject)=> {
    setTimeout(()=> {
      resolve(products)
    }, 3000);
  });

  try {
    const productos = await obtenerProductos;
    setProductos(productos);
  } catch (error) {
    console.log(error);
  }

})()
}, [products])

  console.log(products)

    return (
      <div className="item-list-container">
        <ItemList productos = {products}/>
      </div>
    )
  };

 

export default ItemListContainer;
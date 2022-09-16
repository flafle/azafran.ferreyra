// import styles from "./styles.css"
import React from "react";
import { useState, useEffect } from "react";
import ItemList from "../../components/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({greeting}) => {

  // guardamos en el useState
  const [productos, setProductos] = useState([]);

  const {categoryId} = useParams();

  console.log(categoryId);


  useEffect(() => {
  
    (async () => {
      try {
        if (categoryId) {
          const response = await fetch
          ("https://fakestoreapi.com/products/category/" + categoryId
          );

          const productos = await response.json();
          setProductos(productos);
        } else {
          const response = await fetch(
          "https://fakestoreapi.com/products"
          );

          const productos = await response.json();
          setProductos(productos);
        }
  
      } catch (error) {
        console.log(error);
      }
    })();

  }, [categoryId]);
  
  console.log(productos)

  //retornamos los productos en itemList
  return (
   <div className="galeria"> 
     <h2>{greeting}</h2>
      <ItemList products={productos}/>
    </div>
    
  )
};

export default ItemListContainer; 
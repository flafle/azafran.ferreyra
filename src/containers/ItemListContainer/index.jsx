import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ItemList from "../../components/ItemList";


const ItemListContainer = ({greeting}) => { 
  
  const [productos, setProductos] = useState([]);

  const {categoryId} = useParams();

  useEffect(() => {

( async ()=> {

  // const obtenerProductos = new Promise ((resolve, reject)=> {
  //   setTimeout(()=> {
  //     resolve(products)
  //   }, 3000);
  // });

  try {

    if (categoryId) {
      const response = await fetch(
                    "https://fakestoreapi.com/products/category/" + categoryId
                );
      const productos = await response.json();
  
      setProductos(productos);

    } else {
      const response = await fetch("https://fakestoreapi.com/products");
      const productos = await response.json();

      setProductos(setProductos);
    }
 

  } catch (error) {
    console.log(error);
  }

})();

}, [categoryId])

  console.log(productos)

    return (
      <div className="item-list-container">
        <h1>{greeting} </h1>
        <ItemList productos = {productos}/>
      </div>
    )
  };

 

export default ItemListContainer;
// import styles from "./styles.css"
import React from "react";
import { useState, useEffect } from "react";
import ItemList from "../../components/ItemList";
import { useParams } from "react-router-dom";

import { db } from "../../firebase/config";
// import { collection } from "firebase/firestore";
console.log (db);

const ItemListContainer = ({greeting}) => {

  // guardamos en el useState
  const [productos, setProductos] = useState([]);

  const {categoryId} = useParams();

  console.log(categoryId);


  useEffect(() => {
  
    (async () => {
      try {
          // //1:const
          //  const q = query(collection(db, "products"));
          // //2: llamado firebase
          // const querySnapshot = await getDocs(q);
          
          // //3:
          // querySnapshot.forEach((doc) => {
          // // doc.data() is never undefined for query doc snapshots

          // console.log(doc.id, " => ", doc.data());
         
// });
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
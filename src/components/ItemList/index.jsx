import React from "react";
import Item from "../Item";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import styles from "./styles.css";


const ItemList = ({products}) => {
  return (
    <div className={styles.container}>
      {products.length 
      ? products.map(product => {
        return <Item key={product.id} product={product}/>
      })
      : <Box sx={{ width: "100%" }}>
          <LinearProgress />
        </Box>}
    </div>
  )
}

export default ItemList;

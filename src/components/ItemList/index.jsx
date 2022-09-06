import React from "react";
import Item from "../Item";


const ItemList = ({productos}) => {
    return (
        <div>
            {productos.map(productos => {
                return <Item key={productos.id} productos={productos}/>
            })}
        </div>
    );
};

export default ItemList;
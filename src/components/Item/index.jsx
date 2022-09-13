import React from "react";


//corresponde a la card del prodcucto agregar css

const Item = ({productos}) => {
    return (
       <div>
        <img src={productos.image} width={250} alt="productos" />

        <h1>{productos.title} </h1>

      </div>
    )
};

export default Item;
import React from "react";
import Item from "../Item";
import Modal from "../Modal"


const ItemList = ({productos}) => {
    return (
        <div>
            {productos.map(productos => {
                return <Item key={productos.id} productos={productos}/>
            })}
        </div>
    );
};
{ModalShow ? <Modal handleClose={SetModalShow} />: null }


export default ItemList;
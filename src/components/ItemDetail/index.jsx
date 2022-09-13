import React ,  { useState } from "react";
import ItemCount from "../ItemCount";
import { useNavigate } from "react-router-dom";
import "./styles.css"

const itemDetail = ({products}) => {

    const [qty, setQty] = useState(0);
    const navigate = useNavigate();
    

    const addCart = (quantity) => {
            setQty(quantity);
        }
        console.log(qty);
    };
    const handleFinish = () => {
        navigate("/cart");
    };
    console.log(qty);


    return (
  <div className="detail">
      <div>
        <img className="imgDetail" 
        src={products.image} 
        width={300} 
        alt="imagen del producto" 
        />
        
      <div>
      <h2>{products.title}</h2>
      <p>{products.detail}</p>
      <p> {products.precio}$</p>

            { ! qty ? ( 
             <button onClick={handleFinish}>Finalizar compra</button>
            ) : ( 
                <ItemCount stock={10} initial={1} onAdd={addCart} />

            )}
        </div>
     </div>
    </div>
    );


export default itemDetail;
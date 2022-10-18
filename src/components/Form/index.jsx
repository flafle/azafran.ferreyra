import { CircularProgress } from "@mui/material";
import { addDoc, collection, doc, getDoc, updateDoc } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert";
import { Shop } from "../../context/CartContext";
import { db } from "../../firebase/config";
import generateOrder from "../../services/generateOrder";
import  "./styles.css";

const Form = () => {

  const {register, formState: {errors}, handleSubmit, watch} = useForm();

  const {totalPrice, clearCart, cart} = useContext(Shop);

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


  //uso watch del hook react-forms para ver los valores de ese input
  const email1 = watch("email");
  const email2 = watch("email2");


  //funcion creada para la validacion de emails iguales o no
  const validateEmail = () => {
    return email1 === email2
  };


  const onSubmit = async (data) => {
    setLoading(true);

    const total = totalPrice();
    const order = generateOrder(
      data.name,
      data.surname,
      data.email,
      data.phone,
      data.country,
      data.address,
      data.information,
      data.postcode,
      data.city,
      data.terms,
      cart,
      total
    );

    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "orders"), order);

    //con esta parte actualizamos el documento, en este caso el stock
    cart.forEach(async (productInCart) => {
      //primero se accede a la referencia del producto
      const productModified = doc(db, "products", productInCart.id);
      //A continuacion llamamos al Snapshot desde firebase
      const productSnap = await getDoc(productModified);
      
      // actualizamos el stock del producto con productSnap.data().stock
      await updateDoc(productModified, {
        stock: productSnap.data().stock - productInCart.quantity
      });
    });
    setLoading(false);
    clearCart();
    Swal.fire(
      'Gracias! Pedido realizado correctamente.',
      `Su numero de pedido es: ${docRef.id}`,
      'success',
    );
    navigate("/cart");
  }

  return (
    
    <form className="datos" onSubmit={handleSubmit(onSubmit)}>
      <h2>Para finalizar la compra,completar:</h2>

      <div className="controles">
        <label htmlFor="">Nombre/s *</label>
        <input type="text" {...register("name", {required: true})} />
        {errors.name?.type === "required" && <p>Necesitas completar este campo.</p>}
     </div>

      <div className="controles">
        <label htmlFor="">Apellido/s *</label>
        <input type="text" {...register("surname", {required: true})}/>
        {errors.surname?.type === "required" && <p>Necesitas completar este campo.</p>}
      </div>
      <div  className="controles">
        <label htmlFor="">Correo *</label>
        <input type="text" {...register("email", { pattern: /\S+@\S+\.\S+/ })} />
        {errors.email?.type === "pattern" && <p>El formato de email es incorrecto</p>}
      </div>

      <div className="controles">
        <label htmlFor="">Repita el correo *</label>
        <input onChange={validateEmail(email1, email2)} type="text" {...register("email2", { pattern: /\S+@\S+\.\S+/ , validate: validateEmail})} />
        {errors.email2?.type === "pattern" && <p>El formato de email es incorrecto</p>}
        {errors.email2?.type === "validate" && <p>Los datos no coinciden</p>}
      </div>

      <div className="controles">
        <label htmlFor="">Numero de telefono *</label>
        <input type="text" {...register("phone", {required: true})}/>
        {errors.phone?.type === "required" && <p>Necesitas completar este campo.</p>}
      </div>

      <div className="controles">
        <label htmlFor="">Pais *</label>
        <select name="country" id="" {...register("country")}>
          <option value="mx">México</option>
          <option value="arg">Argentina</option>
          <option value="col">Colombia</option>
        </select>
      </div>
      <div className="controles">
        <label htmlFor="">Direccion *</label>
        <input type="text" {...register("address", {required: true})}/>
        {errors.address?.type === "required" && <p>Necesitas completar este campo.</p>}
      </div>


      <div className="controles">
        <label htmlFor="">Código postal *</label>
        <input type="text" {...register("postcode", {required: true})}/>
        {errors.postcode?.type === "required" && <p>Necesitas completar este campo.</p>}
      </div>

      <div className="controles">
        <label htmlFor="">Ciudad *</label>
        <input type="text" {...register("city", {required: true})}/>
        {errors.city?.type === "required" && <p>Necesitas completar este campo.</p>}
      </div>
      <div>

        <div >
        <p>Aceptar términos y condiciones. *</p>
          <input className="boton__check" type="checkbox" {...register("terms", {required: true})} id="" />
         
          {errors.terms?.type === "required" && <p>Necesitas completar este campo.</p>}
        </div>
        
      </div>
      <div className="confirmar__compra">
        {cart.length > 0 
        ? <input  type="submit" value="Confirmar compra"/>
        : <p>Tu compra ya esta hecha!</p>}
        {loading && <CircularProgress/> }
      </div>
      
    </form> 

  );
};

export default Form;
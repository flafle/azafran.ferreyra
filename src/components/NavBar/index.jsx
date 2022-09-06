import React from "react";
import "./styles.css";
import CartWidget from "../CartWidget";
import Select from "../Select";
import { useState } from "react";


const NavBar = () =>  {

  const [navColor, setNavColor] = useState("#f9ada0")

 const onChangeColor = (event) => {
  const color = event.target.value;
  setNavColor(color)

 }
  console.log(navColor) ;

  return (
    <ul style={{
      backgroundColor : navColor
    }}>
      <li>
        <a href="/#">Inicio</a>
      </li>
      <li>
        <a href="/#">Menú</a>
      </li>
      <li>
        <a href="/#">Contacto</a>
      </li>
      <li>
        <a href="/#">Acerca de Azafrán</a>
      </li>

      <CartWidget/>
      <Select handleColor={onChangeColor}/>
  </ul>
  );
  };
  
export default NavBar;

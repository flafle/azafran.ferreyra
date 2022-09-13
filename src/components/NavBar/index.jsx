import React from "react";
import "./styles.css";
import CartWidget from "../CartWidget";
import Select from "../Select";
import { useState } from "react";
import {Link} from "react-router-dom";

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
        <Link to="">Inicio</Link>
      </li>
      <li>
        <Link to="/category/tapas">Men's clothing</Link>
      </li>
      <li>
        <Link to="">Hojas</Link>
      </li>
      <li>
        <Link to="">Encuadernacion</Link>
      </li>
      <li>
        <Link to="">Acerca de Azafrán</Link>
      </li>

      <CartWidget/>
      <Select handleColor={onChangeColor}/>
  </ul>
  );
  };
  
export default NavBar;

import React from "react";
import { useState } from "react";
import {Link} from "react-router-dom";
import CartWidget from "../CartWidget";
import Select from "../Select";
import  "./styles.css" ;

const NavBar = () => {

    //Nombre del estado, setNombreDelEstado
    const [navColor, setNavColor] = useState("#f3f3f3")

    const onChangeColor = (event) => {
        const color = event.target.value;
        setNavColor(color)
    }

    console.log(navColor);

    return (
        <>
        <header >
        <Link to="/"><h3>LogodeAzafran</h3></Link>
        <div className="navbar">
        <ul style={{
            backgroundColor: navColor
        }}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/category/men's clothing">Men's clothing</Link>
            </li>
            <li>
                <Link to="/category/women's clothing">Women's clothing</Link>
            </li>
            <li>
                <Link to="/category/electronics">Electronics</Link>
            </li>
            <li>
                <Link to="/category/jewelery">Jewelery</Link>
            </li>
            <CartWidget/>
            <Select handleColor={onChangeColor}/>
        </ul>
      </div>
    <div >
          <Link to="/cart"><CartWidget/></Link>
   </div>
  </header>
     </>
    );
};

export default NavBar;
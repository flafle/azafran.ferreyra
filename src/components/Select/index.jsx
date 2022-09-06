import React from "react";

const Select = ({handleColor}) => {
    return (
        <select name="navColor" id="navColor" onChange={handleColor}>
            <option value="#E74C3C">Atardecer</option>
            <option value="#F8C471">Pastel</option>
            <option value="Black">Black</option>
            <option value="#f3f3f3"> Default </option>
        </select>
    );
};

export default Select;
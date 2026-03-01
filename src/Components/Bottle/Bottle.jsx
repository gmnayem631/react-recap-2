import React from "react";
import "./Bottle.css";

const Bottle = ({ bottle, handleAddToCart }) => {
  console.log(bottle);
  const { img, name, price, stock } = bottle;
  return (
    <div className="bottle card">
      <img className="" src={img} alt="" />
      <h3>{name}</h3>
      <p>${price}</p>
      <p>{stock} remaining</p>
      <button onClick={handleAddToCart}>Buy Now</button>
    </div>
  );
};

export default Bottle;

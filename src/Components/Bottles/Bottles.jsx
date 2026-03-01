import React, { use, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";

const Bottles = ({ bottlesPromise }) => {
  const bottles = use(bottlesPromise);
  console.log(bottles);

  const [cart, setCart] = useState();

  const handleAddToCart = () => {
    console.log("bottle bought");
  };

  return (
    <div>
      <h2>Total Bottles {bottles.length}</h2>
      <div className="bottles-container">
        {bottles.map((bottle) => {
          return (
            <Bottle
              key={bottle.id}
              bottle={bottle}
              handleAddToCart={handleAddToCart}
            ></Bottle>
          );
        })}
      </div>
    </div>
  );
};

export default Bottles;

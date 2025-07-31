import React from "react";
import { useState } from "react";

function MikePizza() {
  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    topping: ["Mushroom"],
  });
  const handleClick = () => {
    {
      setPizza({ ...pizza, topping: [...pizza.topping, "Cheese"] });
    }
  };
  return (
    <div>
      <p>Pizza Name: {pizza.name}</p>
      <p>Pizza Toping: {pizza.topping.join(", ")}</p>
      <button onClick={handleClick}>Adding New Topping</button>
    </div>
  );
}

export default MikePizza;

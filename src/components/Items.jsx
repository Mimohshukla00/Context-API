import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Items(props) {
  const cart = useContext(CartContext);
  console.log("cart", cart);
  return (
    <div>
      <h4>{props.name}</h4>
      <p>price:${props.price}</p>
      <button
        onClick={() => {
          cart.setItems([
            ...cart.items,
            { name: props.name, price: props.price },
          ]);
        }}>
        Add to cart
      </button>
    </div>
  );
}

export default Items;

import React from "react";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

function Cart() {
  const cart = useContext(CartContext);
  const total = cart.items.reduce((acc, currValue) => {
    return acc + currValue.price;
  }, 0);

  return (
    <div>
      <h1>This is Cart</h1>
      {cart &&
        cart.items.map((item, index) => (
          <li key={index}>
            {item.name} - {item.price}
          </li>
        ))}
      <h5>Total bills :${total}</h5>
    </div>
  );
}

export default Cart;

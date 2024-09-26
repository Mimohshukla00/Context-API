import { useState } from "react";
import Items from "./components/Items";
import Cart from "./components/Cart";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Items name="Macbook-pro" price={100000}></Items>
      <Items name="pendrive" price={4000}></Items>
      <Items name="Redmi-mobile" price={60000}></Items>
      <Cart></Cart>
    </>
  );
}

export default App;

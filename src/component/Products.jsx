import React from "react";
import { useContext } from "react";
import "./Products.css";
import { cartContext } from "../App";

const Products = ({ item }) => {
  const { cart, setCart } = useContext(cartContext);
  const removeCart = () => {
    setCart(cart.filter((i) => i.id !== item.id));
  };
  let inr = 85.68;
  const desc =
    item.description.length > 50
      ? item.description.substring(0, 50) + "..."
      : item.description;
  item.description = desc;
  return (
    <div className="product">
      <img src={item.images[0]} alt={item.title} />
      <div className="product-info">
        <h3>{item.title}</h3>
        <h4>Desc: {item.description}</h4>
        <p>Rating:- {item.rating}</p>
        <p>Price: ₹{(item.price * inr).toFixed(2)}</p>
      </div>
      {cart.includes(item) ? (
        <button onClick={removeCart}>Remove from Cart</button>
      ) : (
        <button className="addtocart-btn" onClick={() => setCart([...cart, item])}>Add to Cart</button>
      )}
    </div>
  );
};

export default Products;

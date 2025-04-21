import "./cart.css";
import { useContext, useState, useEffect } from "react";
import { cartContext } from "../App";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ViewCart = () => {
  const { cart, setCart } = useContext(cartContext);
  const navigate = useNavigate();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let inr = 85.68;
    setTotal(
      cart.reduce(
        (acc, item) => acc + parseInt((item.price * inr).toFixed(2)),
        0
      )
    );
  }, [cart]);

  const handlePlaceOrder = () => {
    if (cart.length === 0) {
      Swal.fire({
        icon: "info",
        title: "🛒 Your cart is empty",
        text: "Please add items before placing an order.",
      }).then(() => {
        navigate("/");
      });
    } else {
      navigate("/order");
    }
  };

  const handleRemoveFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Your cart is empty 🛒</h2>
      </div>
    );
  }

  return (
    <>
      <h1 className="cart-heading">Cart Products</h1>
      <div className="cart-container">
        {cart.map((item) => (
          <div className="cart-product" key={item.id}>
            <div className="image">
              <img src={item.images} alt={item.title} />
            </div>
            <div className="cart-product-details">
              <h3>{item.title}</h3>
              <p>Price: ₹{(item.price * 85.99).toFixed(2)}</p>
            </div>
            <button onClick={() => handleRemoveFromCart(item.id)}>
              Remove from Cart
            </button>
          </div>
        ))}
      </div>
      <h3 className="cart-amt">Total Amount: ₹{total}</h3>
      <div className="cart-orderbtn">
        <button onClick={handlePlaceOrder}>Place Order</button>
        <button onClick={() => navigate("/")}>Cancel</button>
      </div>
    </>
  );
};

export default ViewCart;

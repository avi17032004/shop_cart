import { useContext, useState } from "react";
import { cartContext } from "../App";
import "./orderDetails.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const OrderDetails = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
  });

  const navigate = useNavigate();
  const { cart, setCart } = useContext(cartContext);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email && form.address) {
      Swal.fire({
        icon: "success",
        title: "✅ Thank you for your order!",
        text: "Your order will be delivered soon.",
        confirmButtonText: "OK",
      }).then(() => {
        navigate("/");
        setForm({ name: "", email: "", address: "" });
        setCart([]);
      });
    } else {
      Swal.fire({
        icon: "warning",
        title: "❗Missing Fields",
        text: "Please fill in all fields.",
      });
    }
  };

  return (
    <div className="order-form">
      <div className="order-form-container">
        <h2>Enter Delivery Details</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
          />
          <textarea
            name="address"
            placeholder="Your Address"
            value={form.address}
            onChange={handleChange}
          ></textarea>
          <button type="submit">Confirm Order</button>
        </form>
      </div>
    </div>
  );
};

export default OrderDetails;

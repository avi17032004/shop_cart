import React, { useState } from "react";
import Swal from "sweetalert2";
import "./Products.css";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.name && form.email && form.message) {
      Swal.fire({
        icon: "success",
        title: "📩 Thank you!",
        text: "We'll get back to you soon.",
      });
      setForm({ name: "", email: "", message: "" });
    } else {
      Swal.fire({
        icon: "warning",
        title: "⚠️ Oops...",
        text: "Please fill in all fields.",
      });
    }
  };

  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
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
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;

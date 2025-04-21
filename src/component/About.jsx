import React from "react";
import "./Products.css";

const About = () => {
  return (
    <div className="about">
      <div className="about-wrapper">
        <h2>About Us</h2>
        <p>
          <strong>Shop Cart</strong> is a dynamic e-commerce web application
          built using <strong>React</strong>, showcasing products from a locally
          stored dummy JSON file.
        </p>
        <p>The platform enables users to:</p>
        <ul>
          <li>🛍️ Browse a variety of products</li>
          <li>🛒 Add items to the shopping cart</li>
          <li>📦 View and manage their cart</li>
          <li>🏷️ Enter delivery details and place orders</li>
          <li>✅ Receive a confirmation popup after placing an order</li>
        </ul>
        <p>
          The app demonstrates effective use of{" "}
          <strong>React Context API</strong> for state management,{" "}
          <strong>React Router</strong> for navigation, and a responsive UI
          using <strong>HTML, CSS,</strong> and <strong>JavaScript</strong>.
        </p>
      </div>
    </div>
  );
};

export default About;

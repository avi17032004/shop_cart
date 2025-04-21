import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../App";
import "./Header.css";

const Header = () => {
  const { cart } = useContext(cartContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <div className="navbar">
        <h3>Shop Cart</h3>
        <div className="menu-icon" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          <li>
            <Link to="/cart" onClick={() => setMenuOpen(false)}>
              View Cart<sup className="cart-count">{cart.length}</sup>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;

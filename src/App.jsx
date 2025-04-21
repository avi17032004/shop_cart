/* eslint-disable react-refresh/only-export-components */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createContext, useState } from "react";
import "./App.css";
import Header from "./component/Header";
import Home from "./component/Home";
import ViewCart from "./component/ViewCart";
import OrderDetails from "./component/OrderDetails";
import Contact from "./component/Contact";
import About from "./component/About";

export const cartContext = createContext();

function App() {
  const [cart, setCart] = useState([]);
  // console.log(cart);
  
  return (
    <>
      <BrowserRouter>
        <cartContext.Provider value={{cart, setCart}}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<ViewCart />} />
            <Route path="/order" element={<OrderDetails />} />
          </Routes>
        </cartContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;

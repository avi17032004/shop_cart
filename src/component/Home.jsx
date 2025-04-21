import React, { useState, useEffect } from "react";
import axios from "axios";
import Products from "./Products";
import "./Home.css";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);



  // Fetch data from the API using axios
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        setProducts(response.data.products);
        setLoading(false);
      } catch (err) {
        console.error("Fetch error:", err);
        setError("⚠️ Failed to fetch products. Please try again later.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Render loading state or error message
  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="product-container">
      {products.map((item) => (
        <div key={item.id}>
          <Products item={item} />
        </div>
      ))}
    </div>
  );
};

export default Home;

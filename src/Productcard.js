// ProductCard.jsx
import React from "react";
import "./ProductCard.css"; // Assuming you have some basic styles

function ProductCard({ image, title, price }) {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <h3 className="product-title">{title}</h3>
      <p className="product-price">{price}</p>
    </div>
  );
}

export default ProductCard;

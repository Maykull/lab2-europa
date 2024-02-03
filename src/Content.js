import "./Content.css";
import React from "react";
import ProductCard from "./Productcard";
import "./Content.css"; // Your content styles

function Content() {
  // Example products data
  const products = [
    {
      id: 1,
      image: "/pictures/1.png",
      title: "Keychron Q1 QMK Custom Mechanical Keyboard",
      price: "From ₱8,200",
    },
    {
      id: 2,
      image: "/pictures/2.png",
      title: "Keychron Q2 QMK Custom Mechanical Keyboard",
      price: "From ₱8,200",
    },
    {
      id: 3,
      image: "/pictures/3.png",
      title: "Keychron Q3 QMK Custom Mechanical Keyboard",
      price: "From ₱8,470",
    },
    {
      id: 4,
      image: "/pictures/4.png",
      title: "Keychron Q4 QMK Custom Mechanical Keyboard",
      price: "From ₱7,100",
    },
    {
      id: 5,
      image: "/pictures/5.png",
      title: "Keychron Q5 QMK Custom Mechanical Keyboard",
      price: "From ₱9,080",
    },
    // Add more products as needed
  ];

  return (
    <div>
      <title> Custom Keyboard</title>
      <div className="content">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}

export default Content;

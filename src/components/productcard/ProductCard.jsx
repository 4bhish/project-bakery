import React from "react";
import "./ProductCard.css";


function ProductCard({ product,id,handleBtnClick }) {
  return (
    <div className="productcard">
      <div className="productcard-img-container">
        <img src={product.imgSrc} alt={product.imgSrc} />
      </div>
      <div className="productcard-details">
        <h4>{product.name}</h4>
        <p>{product.description}</p>
      </div>
      <button onClick={() => handleBtnClick (product)} className="whats-app-btn">What's App</button>
    </div>
  );
}

export default ProductCard;

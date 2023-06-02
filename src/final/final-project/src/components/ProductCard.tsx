import React from "react";
import "./../style/ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="product-image"
      />
      <h3 className="product-title">{product.title}</h3>
      <p className="product-description">{product.description}</p>
      <p className="product-price">${product.price}</p>
      <p className="product-discount">
        Discount: {product.discountPercentage}%
      </p>
      <p className="product-rating">Rating: {product.rating}</p>
      <p className="product-stock">Stock: {product.stock}</p>
    </div>
  );
};

export default ProductCard;

import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css"; // Ensure CSS file is imported

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <Link to={`/product/${product._id}`}>
                <img src={product.imageUrl} alt={product.name} className="product-image" />
            </Link>
            <div className="product-info">
                <h3>{product.name}</h3>
                <p className="price">${product.price}</p>
                <button className="add-to-cart">Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductCard;

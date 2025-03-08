// src/components/CheckoutCard.js
import React from "react";
// import "../styles/Checkout.css"; // Import the CSS file

const CheckoutCard = ({ item, onRemove }) => {
    return ( <div className = "checkout-card">
        <img src = { item.image }
        alt = { item.name }
        className = "checkout-card-img"/>
        <div className = "checkout-card-details">
        <h3 > { item.name } </h3> <p> Price: ₹{ item.price } </p> <p > Quantity: { item.quantity } </p> <button onClick = {
            () => onRemove(item.id) } > Remove </button> </div> </div>
    );
};

export default CheckoutCard;
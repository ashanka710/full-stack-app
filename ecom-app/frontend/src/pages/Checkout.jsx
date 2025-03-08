// src/pages/Checkout.js
import React, { useState } from "react";
import CheckoutCard from "../components/CheckoutCard";
import "../Checkout.css"; // Import CSS

const Checkout = () => {
    // Dummy cart data (Replace with actual cart data from context or Redux)
    const [cartItems, setCartItems] = useState([{
            id: 1,
            name: "Leather Jacket",
            price: 4999,
            quantity: 1,
            image: "https://via.placeholder.com/100",
        },
        {
            id: 2,
            name: "Sneakers",
            price: 2999,
            quantity: 2,
            image: "https://via.placeholder.com/100",
        },
    ]);

    // Function to remove item from cart
    const removeItem = (id) => {
        setCartItems(cartItems.filter((item) => item.id !== id));
    };

    return ( <div className = "checkout-container" >
            <h2> Checkout </h2> {
            cartItems.length > 0 ? (
                cartItems.map((item) => ( <CheckoutCard key = { item.id }
                    item = { item }
                    onRemove = { removeItem }/>
                ))
            ) : ( <p> Your cart is empty. </p>
            )
        } <div className = "checkout-summary">
        <h3> Total: ₹{ cartItems.reduce((total, item) => total + item.price * item.quantity, 0) } </h3> <button className = "checkout-btn"> Proceed to Payment </button> </div> </div>
);
};

export default Checkout;
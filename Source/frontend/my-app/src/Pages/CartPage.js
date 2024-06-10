// CartPage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/CartPage.css';

const CartPage = ({ cart, removeFromCart }) => {
    const [showPaymentSuccess, setShowPaymentSuccess] = useState(false);

    useEffect(() => {
        if (showPaymentSuccess) {
            const timer = setTimeout(() => {
                setShowPaymentSuccess(false);
            }, 1000);

            return () => clearTimeout(timer);
        }
    }, [showPaymentSuccess]);

    const handlePayment = () => {
        setShowPaymentSuccess(true);
        // Perform payment logic here
    };

    return (
        <div className="cart-page">
            <h2>Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <div>
                    <ul>
                        {cart.map(item => (
                            <li key={item.id}>
                                <div>
                                    <img src={item.image} alt={item.name} />
                                    <span>{item.name}</span>
                                    <span>Quantity: {item.quantity}</span>
                                    <span>Price: ${item.price * item.quantity}</span>
                                </div>
                                <button onClick={() => removeFromCart(item)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                    <div className="payment-section">
                        <button onClick={handlePayment}>Proceed to Payment</button>
                        {showPaymentSuccess && <p>Payment Successful!</p>}
                    </div>
                </div>
            )}
            <Link to="/">
                <button>Continue Shopping</button>
            </Link>
        </div>
    );
};

export default CartPage;
// // CartPage.js
// import React from 'react';
// import { Button } from '@mui/material';
// import '../Styles/CartPage.css';

// const CartPage = ({ cart, handleCheckout, removeFromCart, decrementQuantity, addToCart }) => {
//     const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

//     return (
//         <div className="cart-page">
//             <h2>Cart</h2>
//             {cart.length === 0 ? (
//                 <p>Your cart is empty.</p>
//             ) : (
//                 <div>
//                     {cart.map((item) => (
//                         <div key={item.id} className="cart-item">
//                             <img src={item.image} alt={item.name} className="cart-item-image" />
//                             <div className="cart-item-details">
//                                 <h3>{item.name}</h3>
//                                 <p>${item.price}</p>
//                                 <div className="quantity-controls">
//                                     <button onClick={() => decrementQuantity(item.id)}>-</button>
//                                     <span>{item.quantity}</span>
//                                     <button onClick={() => addToCart(item)}>+</button>
//                                 </div>
//                                 <button className="remove-button" onClick={() => removeFromCart(item.id)}>
//                                     Remove
//                                 </button>
//                             </div>
//                         </div>
//                     ))}
//                     <div className="cart-total">
//                         <p>Total: ${totalPrice.toFixed(2)} USD</p>
//                         <Button variant="contained" color="primary" onClick={handleCheckout}>
//                             Checkout
//                         </Button>
//                     </div>
//                 </div>  
//             )}
//         </div>
//     );
// };

// export default CartPage;

// CartPage.js
import React from 'react';
import { Button } from '@mui/material';
import '../Styles/CartPage.css';

const CartPage = ({ cart, handleCheckout, removeFromCart, decrementQuantity, addToCart, onBackToShop }) => {
    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="cart-page">
            <h2>Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    {cart.map((item) => (
                        <div key={item.id} className="cart-item">
                            <img src={item.image} alt={item.name} className="cart-item-image" />
                            <div className="cart-item-details">
                                <h3>{item.name}</h3>
                                <p>${item.price}</p>
                                <div className="quantity-controls">
                                    <button onClick={() => decrementQuantity(item.id)}>-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => addToCart(item)}>+</button>
                                </div>
                                <button className="remove-button" onClick={() => removeFromCart(item.id)}>
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                    <div className="cart-total">
                        <p>Total: ${totalPrice.toFixed(2)} USD</p>
                        <Button variant="contained" color="primary" onClick={handleCheckout}>
                            Checkout
                        </Button>
                        <Button variant="contained" color="secondary" onClick={onBackToShop}>Back to Home</Button>
                    </div>
                </div>  
            )}
        </div>
    );
};

export default CartPage;

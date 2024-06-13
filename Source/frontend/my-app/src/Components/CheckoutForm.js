import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const CheckoutForm = ({ cart }) => {
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    name: '',
    address: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform payment processing here
    console.log('Payment successful!');
    // Reset form data
    setFormData({
      cardNumber: '',
      expiryDate: '',
      cvv: '',
      name: '',
      address: '',
    });
    // Show thank you message or redirect to a success page
    alert('Thank you for your payment!');
  };

  return (
    <div>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Card Number"
          name="cardNumber"
          value={formData.cardNumber}
          onChange={handleChange}
          required
        />
        <TextField
          label="Expiry Date"
          name="expiryDate"
          value={formData.expiryDate}
          onChange={handleChange}
          required
        />
        <TextField
          label="CVV"
          name="cvv"
          value={formData.cvv}
          onChange={handleChange}
          required
        />
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <TextField
          label="Address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Submit Payment
        </Button>
      </form>
    </div>
  );
};

export default CheckoutForm;
import React, { useState } from 'react';
import '../Styles/QuoteForm.css';

const QuoteForm = ({ onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        budget: '',
        description: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Submit your form data here, for example using Axios
            // After successful submission, set submitted to true
            setSubmitted(true);
            // Reset form fields
            setFormData({
                name: '',
                email: '',
                phone: '',
                service: '',
                budget: '',
                description: ''
            });
            // Close modal after 1 second
            setTimeout(() => {
                setSubmitted(false);
                onClose();
            }, 1000);
        } catch (error) {
            console.error('There was an error submitting the form:', error);
        }
    };

    const handleClose = () => {
        // Close modal
        onClose();
    };

    return (
        <div className="modal">
            <div className="modal-content">
                {submitted ? (
                    <div>
                        <h2>Thank You!</h2>
                        <p>Your form has been submitted successfully.</p>
                    </div>
                ) : (
                    <div>
                        <button className="close-button" onClick={handleClose}>X</button>
                        <h2>Quote</h2>
                        <p>Please allow up to 48 hours for a response.</p>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name*</label>
                                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email*</label>
                                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone Number</label>
                                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="service">Service</label>
                                <input type="text" id="service" name="service" value={formData.service} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="budget">Total Budget (INR)</label>
                                <input type="number" id="budget" name="budget" value={formData.budget} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Project Description</label>
                                <textarea id="description" name="description" rows="4" value={formData.description} onChange={handleChange} required></textarea>
                            </div>
                            <button type="submit" className="submit-button">Send</button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default QuoteForm;

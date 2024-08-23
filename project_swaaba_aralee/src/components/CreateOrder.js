import React, { useState } from 'react';
import axios from 'axios';

const CreateOrder = ({ carId, onClose }) => {
    const [paymentMethod, setPaymentMethod] = useState('Cash');
    const [cardNumber, setCardNumber] = useState('');
    const [paymentDate, setPaymentDate] = useState(new Date().toISOString().substring(0, 10));
    const [successMessage, setSuccessMessage] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    const token = localStorage.getItem('token');

    const handleCreateOrder = async () => {
        const orderData = {
            car_id: carId,
            payment_method: paymentMethod,
            card_number: paymentMethod === 'Credit Card' ? cardNumber : null,
            payment_date: paymentDate,  
        };

        console.log('Order Data:', orderData);

        try {
            const response = await axios.post(
                'http://127.0.0.1:5000/api/v1/orders/create',
                orderData,  
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    },
                }
            );

            console.log('Backend Response:', response.data);

            setSuccessMessage(`Order created successfully! Order ID: ${response.data.order_id}`);
            setErrorMessage(null);
            setTimeout(() => {
                setSuccessMessage(null);
                onClose();
            }, 3000);
        } catch (error) {
            console.error('Error creating order:', error);

            if (error.response) {
                const errorMsg = error.response.data.error || error.response.data.message || 'Unknown error occurred on the server.';
                setErrorMessage(`Failed to create order: ${errorMsg}`);
            } else {
                setErrorMessage('Failed to create order: No response from the server.');
            }
        }
    };

    return (
        <div className="create-order-form">
            <h2>Create Order</h2>
            <p>Car ID: {carId}</p>
            <div className="form-group">
                <label htmlFor="paymentMethod">Payment Method:</label>
                <select
                    id="paymentMethod"
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                >
                    <option value="Cash">Cash</option>
                    <option value="Credit Card">Credit Card</option>
                </select>
            </div>
            {paymentMethod === 'Credit Card' && (
                <div className="form-group">
                    <label htmlFor="cardNumber">Card Number:</label>
                    <input
                        type="text"
                        id="cardNumber"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                    />
                </div>
            )}
            <div className="form-group">
                <label htmlFor="paymentDate">Payment Date:</label>
                <input
                    type="date"
                    id="paymentDate"
                    value={paymentDate}
                    onChange={(e) => setPaymentDate(e.target.value)}
                />
            </div>
            <button onClick={handleCreateOrder}>Create Order</button>
            <button onClick={onClose}>Cancel</button>
            {successMessage && <p className="success-message">{successMessage}</p>}
            {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
    );
};

export default CreateOrder;

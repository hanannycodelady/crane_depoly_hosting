import React, { Component } from 'react';
import '../styles/TransactionForm.css';
// import carImage from '../assets/trans5.png';

class TransactionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buyerName: '',
      contactInfo: '',
      carModel: '',
      carMake: '',
      carYear: '',
      price: '',
      paymentMethod: '',
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission, e.g., send data to server or display a confirmation message
    console.log('Form submitted:', this.state);
  }

  render() {
    return (
      <div className="transaction-form-container">
        <div className="transaction-form-card">
          <h2>Car Transaction Form</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="buyerName">Buyer Name:</label>
              <input
                type="text"
                id="buyerName"
                name="buyerName"
                value={this.state.buyerName}
                onChange={this.handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="contactInfo">Contact Information:</label>
              <input
                type="text"
                id="contactInfo"
                name="contactInfo"
                value={this.state.contactInfo}
                onChange={this.handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="carModel">Car Model:</label>
              <input
                type="text"
                id="carModel"
                name="carModel"
                value={this.state.carModel}
                onChange={this.handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="carMake">Car Make:</label>
              <input
                type="text"
                id="carMake"
                name="carMake"
                value={this.state.carMake}
                onChange={this.handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="carYear">Car Year:</label>
              <input
                type="number"
                id="carYear"
                name="carYear"
                value={this.state.carYear}
                onChange={this.handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="price">Price:</label>
              <input
                type="number"
                id="price"
                name="price"
                value={this.state.price}
                onChange={this.handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="paymentMethod">Payment Method:</label>
              <select
                id="paymentMethod"
                name="paymentMethod"
                value={this.state.paymentMethod}
                onChange={this.handleInputChange}
                required
              >
                <option value="">Select Payment Method</option>
                <option value="cash">Cash</option>
                <option value="credit">Credit</option>
                <option value="bank_transfer">Bank Transfer</option>
              </select>
            </div>
            <button type="submit" className="btn-submit">Submit</button>
            <br />
            <a className='Terms'>Terms and Conditions applied</a>
          </form>
        </div>
        <div className="welcome-section">
          <h1 className="form-heading">Welcome!</h1>
          <p className="sliding-text">Affordable Luxury Awaits</p>
          <p className='sliding-text'>Thank you for choosing Swaaba Aralee. At Swaaba Aralee's Car Selling Hub, we strive to provide a seamless and secure experience for all your car buying and selling needs. Whether you’re looking to find your next vehicle or sell your current one, we're here to assist you every step of the way. Please fill out the transaction form below with accurate and complete information to ensure a smooth process. We look forward to helping you drive away in your perfect car!</p>
        </div>
      </div>
    );
  }
}

export default TransactionForm;




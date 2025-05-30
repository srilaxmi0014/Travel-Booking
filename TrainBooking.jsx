import React, { useState } from 'react';
import '../styles/TrainBooking.css';

function TrainBooking() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    travelDate: '',
    travelTime: '',
    trainName: '',
    travelClass: 'economy',
    paymentMethod: 'card',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    upiId: ''
  });

  // Define available trains and times
  const trains = [
    { name: 'Express 101', time: '08:00 AM' },
    { name: 'Superfast 202', time: '12:00 PM' },
    { name: 'Luxury 303', time: '04:00 PM' },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Train booking submitted:', formData);
    alert('Train Booking Successful!');
  };

  return (
    <div className="booking-container">
      <h2>Train Booking</h2>
      <form className="booking-form" onSubmit={handleSubmit}>
        {/* Passenger Details */}
        <div className="section">
          <h3>Passenger Details</h3>
          <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
          <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} required />
          <select name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <input type="date" name="travelDate" value={formData.travelDate} onChange={handleChange} required />
          <input type="time" name="travelTime" value={formData.travelTime} onChange={handleChange} required />
        </div>

        {/* Train Selection */}
        <div className="section">
          <h3>Train Selection</h3>
          <select name="trainName" value={formData.trainName} onChange={handleChange} required>
            <option value="">Select Train</option>
            {trains.map((train, index) => (
              <option key={index} value={train.name}>
                {train.name} - {train.time}
              </option>
            ))}
          </select>
          <select name="travelClass" value={formData.travelClass} onChange={handleChange} required>
            <option value="economy">Economy</option>
            <option value="business">Business</option>
          </select>
        </div>

        {/* Payment Details */}
        <div className="section">
          <h3>Payment Details</h3>
          <select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange} required>
            <option value="card">Card</option>
            <option value="upi">UPI</option>
          </select>

          {formData.paymentMethod === 'card' && (
            <>
              <input type="text" name="cardNumber" placeholder="Card Number" value={formData.cardNumber} onChange={handleChange} required />
              <input type="text" name="expiryDate" placeholder="Expiry Date (MM/YY)" value={formData.expiryDate} onChange={handleChange} required />
              <input type="password" name="cvv" placeholder="CVV" value={formData.cvv} onChange={handleChange} required />
            </>
          )}

          {formData.paymentMethod === 'upi' && (
            <input type="text" name="upiId" placeholder="UPI ID" value={formData.upiId} onChange={handleChange} required />
          )}
        </div>

        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  );
}

export default TrainBooking;
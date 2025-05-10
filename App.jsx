import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Booking from './pages/Booking';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import BusBooking from'./pages/BusBooking';
import TrainBooking from'./pages/TrainBooking';
import FlightBooking from'./pages/FlightBooking';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/bus-booking" element={<BusBooking />} />
      <Route path="/flight-booking" element={<FlightBooking />} />
      <Route path="/train-booking" element={<TrainBooking />} />
      
      {/* Add more routes as needed */}
    </Routes>
  );
};

export default App;
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <nav className="home-navbar" aria-label="Main navigation">
        <h2 className="logo">Travel Companion</h2>
        <div className="nav-buttons">
          <Link to="/login" className="nav-btn">Login</Link>
          <Link to="/signup" className="nav-btn">Sign Up</Link>
        </div>
      </nav>

      <header className="home-header">
        <h1>Explore. Book Ticket. Travel.</h1>
        <p>Your personal travel agent and booking platform</p>
        <Link to="/booking-choice" className="btn-book-choice">BookChoice</Link>
      </header>

      <main>
        <section className="bookchoice-section">
          <h2>Choose Your Travel Mode</h2>
          <div className="bookchoice-cards">
            <div className="bookchoice-card">
              <h3>Bus Booking</h3>
              <p>Find and book bus routes across the country.</p>
              <Link to="/bus-booking" className="btn-book-now">Book Now</Link>
            </div>
            <div className="bookchoice-card">
              <h3>Train Booking</h3>
              <p>Explore train schedules and secure your seats in seconds.</p>
              <Link to="/train-booking" className="btn-book-now">Book Now</Link>
            </div>
            <div className="bookchoice-card">
              <h3>Flight Booking</h3>
              <p>Compare fares and book your flights seamlessly.</p>
              <Link to="/flight-booking" className="btn-book-now">Book Now</Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="home-footer">
        <p>&copy; 2025 Travel Companion. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
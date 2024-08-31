import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-container">
      <header>
        <h1>Property Management System</h1>
        <p>Your all-in-one solution for managing properties, tenants, and payments.</p>
      </header>

      <section className="introduction">
        <h2>Welcome!</h2>
        <p>
          This app helps you manage your properties with ease. Add properties, track tenants,
          and manage payments all in one place. Follow the steps below to get started.
        </p>
      </section>

      <section className="how-to-use">
        <h2>How to Use the App</h2>
        <ol>
          <li>
            <h3>Add Properties</h3>
            <p>Navigate to the Properties page to add new properties that you want to manage.</p>
            <Link to="/properties" className="button">Go to Properties</Link>
          </li>
          <li>
            <h3>Add Tenants</h3>
            <p>After adding properties, you can add tenants who will occupy them.</p>
            <Link to="/tenants" className="button">Go to Tenants</Link>
          </li>
          <li>
            <h3>Manage Payments</h3>
            <p>Keep track of rental payments and manage them efficiently.</p>
            <Link to="/payments" className="button">Go to Payments</Link>
          </li>
        </ol>
      </section>

      <footer>
        <p>&copy; 2024 Property Management System. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;

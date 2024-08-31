import React, { useState } from 'react';
import { addProperty } from '../api';
import './Form.css';

const PropertyForm = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [type, setType] = useState('');
  const [units, setUnits] = useState('');
  const [rentalCost, setRentalCost] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { 
      name, 
      address, 
      type, 
      units, 
      rental_cost: rentalCost  // Ensure the key matches the backend
    };
    console.log('Data being sent:', data);
    try {
      await addProperty(data);
      setName('');
      setAddress('');
      setType('');
      setUnits('');
      setRentalCost('');
      alert('Property added successfully!');
    } catch (error) {
      console.error('Failed to add property:', error);
      alert('Failed to add property');
    }
  };

  return (
    <div className="form-container">
      <h2>Add Property</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Property Name"
          required
        />
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Address"
          required
        />
        <input
          type="text"
          value={type}
          onChange={(e) => setType(e.target.value)}
          placeholder="Type"
          required
        />
        <input
          type="number"
          value={units}
          onChange={(e) => setUnits(e.target.value)}
          placeholder="Units"
          required
        />
        <input
          type="number"
          value={rentalCost}
          onChange={(e) => setRentalCost(e.target.value)}
          placeholder="Rental Cost"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PropertyForm;

import React, { useState, useEffect } from 'react';
import { addTenant, getProperties } from '../api';
import './Form.css'; // Import the CSS for styling

const TenantForm = () => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [property, setProperty] = useState('');
  const [properties, setProperties] = useState([]);

  // Fetch properties from the backend on component mount
  useEffect(() => {
    async function fetchProperties() {
      try {
        const data = await getProperties();
        setProperties(data);
      } catch (error) {
        console.error('Failed to fetch properties:', error);
      }
    }

    fetchProperties();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Submit tenant details, including the selected property ID
      await addTenant({ name, contact_details: contact, property });
      setName('');
      setContact('');
      setProperty('');
      alert('Tenant added successfully!');
    } catch (error) {
      console.error('Failed to add tenant:', error);
      alert('Failed to add tenant');
    }
  };

  return (
    <div className="form-container">
      <h2>Add Tenant</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Tenant Name"
          required
        />
        <input
          type="text"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          placeholder="Contact Details"
          required
        />
        <select
          value={property}
          onChange={(e) => setProperty(e.target.value)}
          required
        >
          <option value="" disabled>Select Property</option>
          {properties.map((prop) => (
            <option key={prop.id} value={prop.id}>{prop.name}</option>
          ))}
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TenantForm;

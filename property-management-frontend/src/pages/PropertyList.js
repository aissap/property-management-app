import React, { useEffect, useState } from 'react';
import { getProperties, addProperty } from '../api';

const PropertyList = () => {
  const [properties, setProperties] = useState([]);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [type, setType] = useState('');
  const [units, setUnits] = useState('');
  const [rentalCost, setRentalCost] = useState('');

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const data = await getProperties();
        setProperties(data);
      } catch (error) {
        console.error('Failed to fetch properties:', error);
      }
    };

    fetchProperties();
  }, []);

  const handleAddProperty = async (e) => {
    e.preventDefault();
    const data = { name, address, type, units, rental_cost: rentalCost };
    try {
      await addProperty(data);
      setName('');
      setAddress('');
      setType('');
      setUnits('');
      setRentalCost('');
      alert('Property added successfully!');
      // Refresh the list after adding a property
      const updatedProperties = await getProperties();
      setProperties(updatedProperties);
    } catch (error) {
      console.error('Failed to add property:', error);
      alert('Failed to add property');
    }
  };

  return (
    <div>
      <h2>Property List</h2>
      <form onSubmit={handleAddProperty}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
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
        <button type="submit">Add Property</button>
      </form>
      <ul>
        {properties.map((property) => (
          <li key={property.id}>
            <p>Name: {property.name}</p>
            <p>Address: {property.address}</p>
            <p>Type: {property.type}</p>
            <p>Units: {property.units}</p>
            <p>Rental Cost: ${property.rental_cost}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PropertyList;

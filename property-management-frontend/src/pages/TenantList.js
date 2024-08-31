import React, { useEffect, useState } from 'react';
import { getTenants, addTenant } from '../api';

const TenantList = () => {
  const [tenants, setTenants] = useState([]);
  const [formVisible, setFormVisible] = useState(false);
  const [name, setName] = useState('');
  const [contactDetails, setContactDetails] = useState('');
  const [property, setProperty] = useState('');

  useEffect(() => {
    const fetchTenants = async () => {
      try {
        const data = await getTenants();
        setTenants(data);
      } catch (error) {
        console.error('Failed to fetch tenants:', error);
      }
    };

    fetchTenants();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { name, contact_details: contactDetails, property };
    try {
      await addTenant(data);
      setName('');
      setContactDetails('');
      setProperty('');
      setFormVisible(false);
      // Refresh the list
      const updatedTenants = await getTenants();
      setTenants(updatedTenants);
      alert('Tenant added successfully!');
    } catch (error) {
      console.error('Failed to add tenant:', error);
      alert('Failed to add tenant');
    }
  };

  return (
    <div>
      <h2>Tenant List</h2>
      <button onClick={() => setFormVisible(!formVisible)}>
        {formVisible ? 'Hide Form' : 'Add New Tenant'}
      </button>
      {formVisible && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            required
          />
          <input
            type="text"
            value={contactDetails}
            onChange={(e) => setContactDetails(e.target.value)}
            placeholder="Contact Details"
            required
          />
          <input
            type="number"
            value={property}
            onChange={(e) => setProperty(e.target.value)}
            placeholder="Property ID"
            required
          />
          <button type="submit">Submit</button>
        </form>
      )}
      <ul>
        {tenants.map((tenant) => (
          <li key={tenant.id}>
            <h3>{tenant.name}</h3>
            <p>Contact Details: {tenant.contact_details}</p>
            <p>Property ID: {tenant.property}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TenantList;

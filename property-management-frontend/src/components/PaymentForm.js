import React, { useState, useEffect } from 'react';
import { addPayment, getTenants } from '../api';
import './Form.css';

const PaymentForm = () => {
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [settled, setSettled] = useState(false);
  const [tenant, setTenant] = useState('');
  const [tenants, setTenants] = useState([]);

  useEffect(() => {
    const fetchTenants = async () => {
      try {
        const tenantsData = await getTenants();
        setTenants(tenantsData);
      } catch (error) {
        console.error('Failed to fetch tenants:', error);
      }
    };

    fetchTenants();
  }, []);

  const handleAddPayment = async (e) => {
    e.preventDefault();
  
    if (!amount || !paymentDate || !tenant) {
      alert('Please fill out all required fields.');
      return;
    }
  
    const data = {
      tenant: parseInt(tenant, 10),
      amount: parseFloat(amount),
      payment_date: paymentDate,
      settled
    };
  
    console.log('Sending data:', data);
  
    try {
      await addPayment(data);
      setTenant('');
      setAmount('');
      setPaymentDate('');
      setSettled(false);
      alert('Payment added successfully!');
      const updatedPayments = await getPayments();
      setPayments(updatedPayments);
    } catch (error) {
      console.error('Failed to add payment:', error);
      alert('Failed to add payment');
    }
  };
  
  
  return (
    <div className="form-container">
      <h2>Add Payment</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="number" 
          value={amount} 
          onChange={(e) => setAmount(e.target.value)} 
          placeholder="Amount" 
          required 
        />
        <input 
          type="date" 
          value={date} 
          onChange={(e) => setDate(e.target.value)} 
          required 
        />
        <label>
          <input 
            type="checkbox" 
            checked={settled} 
            onChange={(e) => setSettled(e.target.checked)} 
          />
          Settled
        </label>
        <select 
          value={tenant} 
          onChange={(e) => setTenant(e.target.value)} 
          required
        >
          <option value="">Select Tenant</option>
          {tenants.map((tenant) => (
            <option key={tenant.id} value={tenant.id}>
              {tenant.name}
            </option>
          ))}
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PaymentForm;

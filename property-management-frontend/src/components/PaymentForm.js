import React, { useState, useEffect } from 'react';
import { getTenants, addPayment } from '../services/api';

const PaymentForm = () => {
  const [tenants, setTenants] = useState([]);
  const [selectedTenantId, setSelectedTenantId] = useState(null);
  const [amount, setAmount] = useState('');
  const [paymentDate, setPaymentDate] = useState('');
  const [settled, setSettled] = useState(false);

  useEffect(() => {
    async function fetchTenants() {
      try {
        const tenantData = await getTenants();
        setTenants(tenantData);
      } catch (error) {
        console.error('Error fetching tenants:', error);
      }
    }
    fetchTenants();
  }, []);

  function handleTenantChange(event) {
    setSelectedTenantId(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const paymentData = {
      tenant: selectedTenantId,
      amount: parseFloat(amount),
      payment_date: paymentDate,
      settled: settled
    };

    try {
      const response = await addPayment(paymentData);
      console.log('Payment added successfully:', response);
    } catch (error) {
      console.error('Error adding payment:', error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <select onChange={handleTenantChange} value={selectedTenantId}>
        <option value="">Select a tenant</option>
        {tenants.map(tenant => (
          <option key={tenant.id} value={tenant.id}>
            {tenant.name}
          </option>
        ))}
      </select>
      <input
        type="number"
        value={amount}
        onChange={e => setAmount(e.target.value)}
        placeholder="Amount"
        required
      />
      <input
        type="date"
        value={paymentDate}
        onChange={e => setPaymentDate(e.target.value)}
        required
      />
      <label>
        <input
          type="checkbox"
          checked={settled}
          onChange={e => setSettled(e.target.checked)}
        />
        Settled
      </label>
      <button type="submit">Submit Payment</button>
    </form>
  );
};

export default PaymentForm;

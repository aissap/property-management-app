import React, { useEffect, useState } from 'react';
import { getPayments, addPayment, getTenants } from '../api';
import './List.css';

const PaymentList = () => {
  const [payments, setPayments] = useState([]);
  const [tenant, setTenant] = useState('');
  const [amount, setAmount] = useState('');
  const [paymentDate, setPaymentDate] = useState('');
  const [settled, setSettled] = useState(false);
  const [tenants, setTenants] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPayments = async () => {
      setLoading(true);
      try {
        const data = await getPayments();
        console.log('Payments data:', data);
        setPayments(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Failed to fetch payments:', error);
        alert('Failed to fetch payments');
        setPayments([]);
      } finally {
        setLoading(false);
      }
    };

    const fetchTenants = async () => {
      setLoading(true);
      try {
        const data = await getTenants();
        setTenants(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Failed to fetch tenants:', error);
        alert('Failed to fetch tenants');
      } finally {
        setLoading(false);
      }
    };

    fetchPayments();
    fetchTenants();
  }, []);

const handleAddPayment = async (e) => {
  e.preventDefault();
  if (!amount || !paymentDate || !tenant) {
    alert('Please fill out all required fields.');
    return;
  }

  const data = {
    tenant: tenant,  // Send tenant name as string
    amount: parseFloat(amount),
    payment_date: paymentDate,
    settled
  };

  try {
    await addPayment(data);
    setTenant('');
    setAmount('');
    setPaymentDate('');
    setSettled(false);
    alert('Payment added successfully!');
    const updatedPayments = await getPayments();
    setPayments(Array.isArray(updatedPayments) ? updatedPayments : []);
  } catch (error) {
    console.error('Failed to add payment:', error);
    alert('Failed to add payment');
  }
};



  return (
    <div>
      <h2>Payment List</h2>
      <form onSubmit={handleAddPayment}>
        <select
          value={tenant}
          onChange={(e) => setTenant(e.target.value)}
          required
        >
          <option value="">Select Tenant</option>
          {tenants.map((ten) => (
            <option key={ten.id} value={ten.id}>
              {ten.name}
            </option>
          ))}
        </select>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
          required
        />
        <input
          type="date"
          value={paymentDate}
          onChange={(e) => setPaymentDate(e.target.value)}
          placeholder="Payment Date"
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
        <button type="submit" disabled={loading}>
          {loading ? 'Adding...' : 'Add Payment'}
        </button>
      </form>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {payments.length > 0 ? (
            payments.map((payment) => (
              <li key={payment.id}>
                {/* Ensure unique key for each list item */}
                {payment.tenant}: {payment.amount} on {payment.payment_date} - {payment.settled ? 'Settled' : 'Unsettled'}
              </li>
            ))
          ) : (
            <li>No payments found</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default PaymentList;

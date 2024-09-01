import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api';

export async function getProperties() {
  try {
    const response = await axios.get(`${API_URL}/properties/`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch properties:', error.response?.data || error.message);
    throw error;
  }
}

export async function getTenants() {
  try {
    const response = await axios.get(`${API_URL}/tenants/`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch tenants:', error.response?.data || error.message);
    throw error;
  }
}

export async function getPayments() {
  try {
    const response = await axios.get(`${API_URL}/payments/`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch payments:', error.response?.data || error.message);
    throw error;
  }
}

export async function addProperty(data) {
  try {
    const response = await axios.post(`${API_URL}/properties/`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Failed to add property:', error.response?.data || error.message);
    throw error;
  }
}

export async function addTenant(data) {
  try {
    const response = await axios.post(`${API_URL}/tenants/`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Failed to add tenant:', error.response?.data || error.message);
    throw error;
  }
}

export async function addPayment(data) {
  try {
    const response = await axios.post(`${API_URL}/payments/`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Failed to add payment:', error.response?.data || error.message);
    throw error;
  }
}

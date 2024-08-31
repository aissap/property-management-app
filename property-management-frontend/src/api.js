const API_URL = 'http://127.0.0.1:8000/api';

export async function getProperties() {
  const response = await fetch(`${API_URL}/properties/`);
  if (!response.ok) {
    throw new Error('Failed to fetch properties');
  }
  return response.json();
}

export async function getTenants() {
  const response = await fetch(`${API_URL}/tenants/`);
  if (!response.ok) {
    throw new Error('Failed to fetch tenants');
  }
  return response.json();
}

export async function getPayments() {
  const response = await fetch(`${API_URL}/payments/`);
  if (!response.ok) {
    throw new Error('Failed to fetch payments');
  }
  return response.json();
}

export async function addProperty(data) {
  const response = await fetch(`${API_URL}/properties/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Failed to add property: ${errorText}`);
  }
  return response.json();
}

export async function addTenant(data) {
  const response = await fetch(`${API_URL}/tenants/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Failed to add tenant: ${errorText}`);
  }
  return response.json();
}

export async function addPayment(data) {
  const response = await fetch(`${API_URL}/payments/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Failed to add payment: ${errorText}`);
  }
  return response.json();
}

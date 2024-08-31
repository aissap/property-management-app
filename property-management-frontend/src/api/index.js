export const getProperties = async () => {
    const response = await fetch('/api/properties/');
    if (!response.ok) {
      throw new Error('Failed to fetch properties');
    }
    return response.json();
  };
  
  export const addProperty = async (data) => {
    const response = await fetch('/api/properties/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Failed to add property: ${JSON.stringify(errorData)}`);
    }
    return response.json();
  };
  
const API_BASE_URL = 'http://localhost:8000/api/v1'; // Assuming your backend runs on port 8000

export const login = async (credentials: any) => {
  const response = await fetch(`${API_BASE_URL}/users/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Login failed');
  }

  return response.json();
};

export const register = async (userData: { username: string; fullName: string; email: string; password: string; role: string; contactNumber?: string; address?: string; dateOfBirth?: string; gender?: string }) => {
  const response = await fetch(`${API_BASE_URL}/users/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Registration failed');
  }

  return response.json();
};

export const getAllUsers = async () => {
  const response = await fetch(`${API_BASE_URL}/users`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('accessToken')}` // Assuming token is stored in localStorage
    },
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to fetch users');
  }

  return response.json();
};

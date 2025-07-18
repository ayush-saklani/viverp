import React, { useState } from 'react';
import { login } from '../api/auth';
import { useNavigate, Link } from 'react-router-dom'; // Import Link
import logo from '/public/vite.svg'; // Assuming your logo is here

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setMessage('');
    try {
      const response = await login({ email, password });
      setMessage('Login successful!');
      localStorage.setItem('accessToken', response.data.accessToken); // Store token
      localStorage.setItem('user', JSON.stringify(response.data.user)); // Store user data
      navigate('/dashboard'); // Redirect to dashboard
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary-light">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="flex justify-center mb-6">
          <img src={logo} alt="Logo" className="h-20 w-20" /> {/* Logo placement */}
        </div>
        <h2 className="text-2xl font-bold mb-6 text-center text-primary-dark">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-primary-dark text-sm font-bold mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-primary-dark leading-tight focus:outline-none focus:shadow-outline"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-primary-dark text-sm font-bold mb-2">
              Password:
            </label>
            <input
              type="password"
              id="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-primary-dark mb-3 leading-tight focus:outline-none focus:shadow-outline"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
          {message && <p className="text-green-500 text-xs italic mb-4">{message}</p>}
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-primary-accent hover:bg-primary-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign In
            </button>
          </div>
        </form>
        <p className="text-center text-primary-dark text-xs mt-4">
          Don't have an account? {' '}
          <Link to="/register" className="text-primary-accent hover:text-primary-dark">Register here</Link>
        </p>
      </div>
    </div>
  );
}

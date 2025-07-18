import React, { useState } from 'react';
import { register } from '../api/auth';
import { useNavigate, Link } from 'react-router-dom'; // Import Link
import logo from '/public/vite.svg'; // Assuming your logo is here

export default function RegisterPage() {
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student'); // Default role
  const [contactNumber, setContactNumber] = useState('');
  const [address, setAddress] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [gender, setGender] = useState('Male'); // Default gender
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setMessage('');
    try {
      await register({
        username,
        fullName,
        email,
        password,
        role,
        contactNumber,
        address,
        dateOfBirth: dateOfBirth ? new Date(dateOfBirth).toISOString() : undefined,
        gender,
      });
      setMessage('Registration successful! You can now log in.');
      navigate('/login');
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
        <h2 className="text-2xl font-bold mb-6 text-center text-primary-dark">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-primary-dark text-sm font-bold mb-2">
              Username:
            </label>
            <input
              type="text"
              id="username"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-primary-dark leading-tight focus:outline-none focus:shadow-outline"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-primary-dark text-sm font-bold mb-2">
              Full Name:
            </label>
            <input
              type="text"
              id="fullName"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-primary-dark leading-tight focus:outline-none focus:shadow-outline"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
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

          <div className="mb-4">
            <label htmlFor="role" className="block text-primary-dark text-sm font-bold mb-2">
              Role:
            </label>
            <select
              id="role"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-primary-dark leading-tight focus:outline-none focus:shadow-outline"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="contactNumber" className="block text-primary-dark text-sm font-bold mb-2">
              Contact Number:
            </label>
            <input
              type="text"
              id="contactNumber"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-primary-dark leading-tight focus:outline-none focus:shadow-outline"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="address" className="block text-primary-dark text-sm font-bold mb-2">
              Address:
            </label>
            <input
              type="text"
              id="address"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-primary-dark leading-tight focus:outline-none focus:shadow-outline"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="dateOfBirth" className="block text-primary-dark text-sm font-bold mb-2">
              Date of Birth:
            </label>
            <input
              type="date"
              id="dateOfBirth"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-primary-dark leading-tight focus:outline-none focus:shadow-outline"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="gender" className="block text-primary-dark text-sm font-bold mb-2">
              Gender:
            </label>
            <select
              id="gender"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-primary-dark leading-tight focus:outline-none focus:shadow-outline"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
          {message && <p className="text-green-500 text-xs italic mb-4">{message}</p>}
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-primary-accent hover:bg-primary-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Register
            </button>
          </div>
        </form>
        <p className="text-center text-primary-dark text-xs mt-4">
          Already have an account? {' '}
          <Link to="/login" className="text-primary-accent hover:text-primary-dark">Login here</Link>
        </p>
      </div>
    </div>
  );
}

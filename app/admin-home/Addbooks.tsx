'use client';

import { useState } from 'react';

export default function LoginPage() {
  const [userId, setUserId] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('User ID:', userId, 'Password:', password);
    // Add authentication logic here
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">User ID</label>
            <input
              type="text"
              className="w-full p-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full p-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export function AddBookForm() {
  const [codeNoFrom, setCodeNoFrom] = useState<string>('');
  const [codeNoTo, setCodeNoTo] = useState<string>('');
  const [category, setCategory] = useState<string>('');

  const handleAddDetails = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Details Added:', { codeNoFrom, codeNoTo, category });
    // Add submission logic here
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg p-8 bg-white rounded-2xl shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Admin Panel - Add Product Details</h2>
        <form onSubmit={handleAddDetails}>
          <div className="mb-4">
            <label className="block text-gray-700">Code No From</label>
            <input
              type="text"
              className="w-full p-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={codeNoFrom}
              onChange={(e) => setCodeNoFrom(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Code No To</label>
            <input
              type="text"
              className="w-full p-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={codeNoTo}
              onChange={(e) => setCodeNoTo(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Category</label>
            <input
              type="text"
              className="w-full p-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-300"
          >
            Add Details
          </button>
        </form>
      </div>
    </div>
  );
}

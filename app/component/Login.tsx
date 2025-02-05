'use client';

import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LoginPage() {
  const [userId, setUserId] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const router = useRouter()
  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    const res = await axios.post('/api/login',{userId:userId,password,role:'user'})
    if(res?.data?.message){
      
        sessionStorage.setItem("token",res.data.token)
        sessionStorage.setItem("role",res.data.role)
        alert('login success')
        router.push('/user-home')
    }
    else{
      alert("login failed")
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-md">
        <div>
          <p>UserId: 12345678</p>
          <p>Pass: 12345678</p>
        </div>
        <h2 className="text-2xl font-semibold text-center mb-6">User Login</h2>
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
        <Link className='text-center w-full text-blue-400 underline' href={'/admin-login'}>admin login</Link>
      </div>
    </div>
  );
}

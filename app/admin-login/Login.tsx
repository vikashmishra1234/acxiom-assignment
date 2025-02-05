'use client';

import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Login() {
  const [userId, setUserId] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const navigate = useRouter()
  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    // console.log('User ID:', userId, 'Password:', password);
    const res = await axios.post('/api/login',{userId:userId,password,role:'admin'})
    console.log(res)
    if(res?.data?.message){
        // console.log()
        sessionStorage.setItem("token",res.data.token)
        sessionStorage.setItem("role",res.data.role)
        alert('login success')
        navigate.push('/admin-home')
    }
    else{
        alert("Login failed please try again")
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-md">
        <div>
            <p>AdminId: 98765432</p>
            <p>Pass: 98765432</p>
        </div>
        <h2 className="text-2xl font-semibold text-center mb-6">Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">admin ID</label>
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
        <Link className='text-center w-full mx-auto text-blue-400 underline' href={'/'}>user login</Link>
      </div>
    </div>
  );
}

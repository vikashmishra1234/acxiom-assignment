"use client";
import Link from 'next/link';
import React from 'react';
import AdminTop from '../component/AdminTop';

const Page = () => {
  return (
    <section className="min-h-screen bg-gray-100 p-6">
      {/* AdminTop Component */}
      <AdminTop />

      {/* Main Content */}
      <div className="max-w-4xl mx-auto mt-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Transaction</h2>
        <ul className="space-y-4">
          <li>
            <Link
              href={'/masterlist'}
              className="block p-4 bg-white rounded-lg shadow-md hover:bg-gray-50 transition duration-200 text-gray-700 hover:text-gray-900"
            >
              Is Book Available?
            </Link>
          </li>
          <li>
            <Link
              href={'/masterlist'}
              className="block p-4 bg-white rounded-lg shadow-md hover:bg-gray-50 transition duration-200 text-gray-700 hover:text-gray-900"
            >
              Issue Books?
            </Link>
          </li>
          <li>
            <Link
              href={'/masterlist'}
              className="block p-4 bg-white rounded-lg shadow-md hover:bg-gray-50 transition duration-200 text-gray-700 hover:text-gray-900"
            >
              Return Book?
            </Link>
          </li>
          <li>
            <Link
              href={'/masterlist'}
              className="block p-4 bg-white rounded-lg shadow-md hover:bg-gray-50 transition duration-200 text-gray-700 hover:text-gray-900"
            >
              Pay Fine?
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Page;
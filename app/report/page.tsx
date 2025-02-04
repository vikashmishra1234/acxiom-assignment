"use client";
import Link from 'next/link';
import React from 'react';
import AdminTop from '../component/AdminTop';

const Page = () => {
  return (
    <section className="bg-gray-100 min-h-screen">
      <AdminTop />
      <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-4">Available Reports</h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/masterlist"
              className="bg-white shadow-md rounded-lg px-4 py-3 block hover:bg-gray-200 transition-colors"
            >
              Master List of Books
            </Link>
          </li>
          <li>
            <Link
              href="/masterlist"
              className="bg-white shadow-md rounded-lg px-4 py-3 block hover:bg-gray-200 transition-colors"
            >
              Master List of Movies
            </Link>
          </li>
          <li>
            <Link
              href="/masterlist"
              className="bg-white shadow-md rounded-lg px-4 py-3 block hover:bg-gray-200 transition-colors"
            >
              Master List of Memberships
            </Link>
          </li>
          <li>
            <Link
              href="/masterlist"
              className="bg-white shadow-md rounded-lg px-4 py-3 block hover:bg-gray-200 transition-colors"
            >
              Active Issues
            </Link>
          </li>
          <li>
            <Link
              href="/masterlist"
              className="bg-white shadow-md rounded-lg px-4 py-3 block hover:bg-gray-200 transition-colors"
            >
              Overdue Returns
            </Link>
          </li>
          <li>
            <Link
              href="/masterlist"
              className="bg-white shadow-md rounded-lg px-4 py-3 block hover:bg-gray-200 transition-colors"
            >
              Pending Issues Requests
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Page;
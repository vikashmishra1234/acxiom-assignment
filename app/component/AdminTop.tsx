import Link from 'next/link';
import React from 'react';

const AdminTop = () => {
  return (
    <div className="bg-gray-800 text-white p-4">
      <div className="container mx-auto">
        <ul className="flex space-x-4">
          <li>
            <Link href={'/chart'} className="hover:text-gray-300">
              Chart
            </Link>
          </li>
          <li>
            <Link href={'/admin-home'} className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link href={'/chart'} className="hover:text-gray-300">
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminTop;
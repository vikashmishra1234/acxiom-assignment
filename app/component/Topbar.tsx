import Link from 'next/link';
import React from 'react';
import AdminTop from './AdminTop';
import { cookies } from 'next/headers';

const Topbar: React.FC = async() => {
  const cookieStore = await cookies();
  const role = cookieStore.get('role')?.value; // Get the role from cookies

  return (
    <>
      <AdminTop />
      <header className="bg-gray-400 text-white py-4">
        <nav className="container mx-auto flex justify-around">
        <Link href="/transaction" className="hover:text-gray-300 transition">
              Transaction
            </Link>
        
          <Link href="/report" className="hover:text-gray-300 transition">
            Report
          </Link>
          {/* Only show Transaction link if role is NOT "user" */}
          {role !== 'user' && (
             <Link href="/maintainance" className="hover:text-gray-300 transition">
             Maintenance
           </Link>
          )}
        </nav>
      </header>
    </>
  );
};

export default Topbar;

import Link from 'next/link';
import React from 'react';
import AdminTop from './AdminTop';

const Topbar: React.FC = () => {
 return (
   <>
   <AdminTop/>
   <header className="bg-gray-400 text-white py-4">
     <nav className="container mx-auto flex justify-around">
       <Link href="/maintainance" className="hover:text-gray-300 transition">
         Maintenance
       </Link>
       <Link href="/report" className="hover:text-gray-300 transition">
         Report
       </Link>
       <Link href="/transaction" className="hover:text-gray-300 transition">
         Transaction
       </Link>
     </nav>
   </header>
   </>
 );
};

export default Topbar;
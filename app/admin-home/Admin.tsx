import { fetchBooks } from '@/lib/fetchBooks';
import React, { FC } from 'react';

interface Book {
  code: string;
  name: string;
}

const Admin: FC = async () => {
  const books: any = await fetchBooks();
  const science = books.filter((item:any)=>item.name=='science')


  return (
    <div className="container mx-auto my-8">
      <h2 className="text-2xl font-bold text-center mb-4">Product Details</h2>
      <div className="bg-white shadow-md rounded-lg p-6">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 text-left">Code From</th>
              <th className="px-4 py-2 text-left">Code To</th>
              <th className="px-4 py-2 text-left">Category</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book:any) => (
              <tr key={book.code} className="border-b">
                <td className="px-4 py-2">{book.code}</td>
                <td className="px-4 py-2">{book.code}</td>
                <td className="px-4 py-2">{book.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
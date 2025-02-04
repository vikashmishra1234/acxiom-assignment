"use client"
import { useState } from "react";
import MaintenancePage from "./Addbookmov";
import MembershipForm from "./MembershipForm";
import AdminTop from "../component/AdminTop";

export default function page() {
    const [showForm,setShowform] = useState('');
  const [menuItems, setMenuItems] = useState([
    {
      category: "Membership",
      actions: ["Add"],
    },
    {
      category: "Books/Movies",
      actions: ["Add"],
    },
    {
      category: "User Management",
      actions: ["Add"],
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
        <AdminTop/>
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-bold">Maintenance</h1>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1 border-r pr-4">
            <h2 className="text-lg font-semibold mb-2">Chart</h2>
            <ul>
              <li className="mb-2">Home</li>
              <li className="mb-2">Housekeeping</li>
            </ul>
          </div>
          <div className="col-span-1">
            <h2 className="text-lg font-semibold mb-4">Housekeeping</h2>
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr>
                  <th className="border border-gray-300 px-4 py-2">Category</th>
                  <th className="border border-gray-300 px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {menuItems.map((item, index) => (
                  <tr key={index}>
                    <td className="border border-gray-300 px-4 py-2">
                      {item.category}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {item.actions.map((action, i) => (
                        <div className="text-red-400 cursor-pointer" onClick={()=>setShowform(item.category)} key={i}>{action}</div>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {
        showForm=='Membership'?<MembershipForm/>:showForm==''?'':<MaintenancePage/>
      }
    </div>
  );
}
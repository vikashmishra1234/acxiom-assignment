"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const AdminTop = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const res = await fetch("/api/logout", { method: "GET", credentials: "include" });
      if (res.ok) {
        router.push("/admin-login"); // Redirect to login page after logout
      }
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="bg-gray-800 text-white p-4">
      <div className="container mx-auto">
        <ul className="flex space-x-4">
          <li>
            <Link href={"/chart"} className="hover:text-gray-300">
              Chart
            </Link>
          </li>
          <li>
            <Link href={"/admin-home"} className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <button onClick={handleLogout} className="hover:text-gray-300">
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminTop;

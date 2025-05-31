// components/AdminLayout/AdminNavbar.tsx
import React from "react";

const AdminNavbar = () => {
  return (
    <header className="bg-indigo-700 text-white px-6 py-4 shadow-md">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Smart City Admin Panel</h1>
        <div className="text-sm">🛡️ Admin User</div>
      </div>
    </header>
  );
};

export default AdminNavbar;

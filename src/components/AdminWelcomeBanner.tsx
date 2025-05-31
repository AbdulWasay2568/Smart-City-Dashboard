// components/AdminDashboard/AdminWelcomeBanner.tsx
import React from "react";

const AdminWelcomeBanner = () => {
  return (
    <div className="bg-indigo-100 border-l-4 border-indigo-500 p-4 rounded-xl shadow">
      <h2 className="text-xl font-semibold text-indigo-800">Welcome, Admin 🛡️</h2>
      <p className="text-sm text-indigo-700">Here's an overview of the current city operations and performance metrics.</p>
    </div>
  );
};

export default AdminWelcomeBanner;

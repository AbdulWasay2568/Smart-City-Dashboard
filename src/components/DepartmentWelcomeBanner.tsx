// components/OfficialDashboard/DepartmentWelcomeBanner.tsx
import React from "react";

const DepartmentWelcomeBanner = () => {
  const department = "Sanitation Department"; // Use context or auth info later

  return (
    <div className="bg-purple-100 border-l-4 border-purple-500 p-4 rounded-xl shadow">
      <h2 className="text-xl font-semibold text-purple-800">
        Welcome, Officer! 👮‍♂️
      </h2>
      <p className="text-sm text-purple-700">Department: {department}</p>
    </div>
  );
};

export default DepartmentWelcomeBanner;

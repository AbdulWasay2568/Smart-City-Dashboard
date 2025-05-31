// components/OfficialDashboard/DepartmentStats.tsx
import React from "react";

const stats = [
  { label: "Pending Issues", value: 12, color: "bg-yellow-100 text-yellow-700" },
  { label: "In Progress", value: 8, color: "bg-blue-100 text-blue-700" },
  { label: "Resolved", value: 25, color: "bg-green-100 text-green-700" },
];

const DepartmentStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {stats.map((stat, idx) => (
        <div
          key={idx}
          className={`p-4 rounded-xl shadow ${stat.color}`}
        >
          <h4 className="text-lg font-semibold">{stat.label}</h4>
          <p className="text-2xl font-bold">{stat.value}</p>
        </div>
      ))}
    </div>
  );
};

export default DepartmentStats;

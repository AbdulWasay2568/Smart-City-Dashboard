// components/AdminDashboard/PerformanceComparisonTable.tsx
import React from "react";

const dummyDepartments = [
  { name: "Sanitation", resolved: 45, avgTime: "3.2h", satisfaction: "88%" },
  { name: "Transport", resolved: 32, avgTime: "5.1h", satisfaction: "79%" },
  { name: "Health", resolved: 27, avgTime: "2.8h", satisfaction: "92%" },
];

const PerformanceComparisonTable = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow h-full overflow-x-auto">
      <h3 className="text-lg font-semibold mb-4">🏆 Department Performance</h3>
      <table className="w-full text-sm text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2">Department</th>
            <th className="px-4 py-2">Issues Resolved</th>
            <th className="px-4 py-2">Avg. Resolution Time</th>
            <th className="px-4 py-2">Satisfaction</th>
          </tr>
        </thead>
        <tbody>
          {dummyDepartments.map((dept) => (
            <tr key={dept.name} className="border-t">
              <td className="px-4 py-2">{dept.name}</td>
              <td className="px-4 py-2">{dept.resolved}</td>
              <td className="px-4 py-2">{dept.avgTime}</td>
              <td className="px-4 py-2">{dept.satisfaction}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PerformanceComparisonTable;

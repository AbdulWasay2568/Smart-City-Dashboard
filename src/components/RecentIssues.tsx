// components/CitizenDashboard/RecentIssues.tsx
import React from "react";

const dummyIssues = [
  { id: 1, title: "Pothole near Main Street", status: "In Progress" },
  { id: 2, title: "Broken streetlight at Park Ave", status: "Assigned" },
  { id: 3, title: "Overflowing garbage bin", status: "Pending" },
];

const statusColor = {
  "Pending": "text-gray-600",
  "Assigned": "text-yellow-600",
  "In Progress": "text-blue-600",
  "Resolved": "text-green-600",
};

const RecentIssues = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow h-full">
      <h3 className="text-lg font-semibold mb-4">🛠️ Recent Issues</h3>
      <ul className="space-y-3">
        {dummyIssues.map((issue) => (
          <li key={issue.id} className="flex justify-between items-center">
            <span>{issue.title}</span>
            <span className={`${statusColor[issue.status]} font-medium`}>
              {issue.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentIssues;

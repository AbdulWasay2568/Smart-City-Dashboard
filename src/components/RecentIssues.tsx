// components/CitizenDashboard/RecentIssues.tsx
import React from "react";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  return (
    <div className="bg-white p-4 rounded-xl shadow h-full">
      <h3 className="text-lg text-center font-semibold mb-4">🛠️ Recent Issues</h3>
        <p className="text-sm text-gray-500 text-right mb-4 underline hover:text-blue-500 cursor-pointer"
            onClick={() => navigate("/citizen/issues")}>See All</p>
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

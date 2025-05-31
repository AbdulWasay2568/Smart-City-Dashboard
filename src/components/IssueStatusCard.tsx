// components/CitizenIssues/IssueStatusCard.tsx
import React from "react";

interface IssueProps {
  issue: {
    id: number;
    title: string;
    category: string;
    status: string;
    date: string;
  };
}

const statusColor: Record<string, string> = {
  Pending: "text-yellow-600 bg-yellow-100",
  "In Progress": "text-blue-600 bg-blue-100",
  Resolved: "text-green-600 bg-green-100",
  Assigned: "text-purple-600 bg-purple-100",
};

const IssueStatusCard: React.FC<IssueProps> = ({ issue }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow border-l-4 border-gray-300 hover:border-blue-500 transition">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold text-lg">{issue.title}</h3>
        <span
          className={`text-sm font-medium px-2 py-1 rounded ${statusColor[issue.status] || "bg-gray-100 text-gray-600"}`}
        >
          {issue.status}
        </span>
      </div>
      <p className="text-sm text-gray-600">Category: {issue.category}</p>
      <p className="text-sm text-gray-500">Reported on: {new Date(issue.date).toLocaleDateString()}</p>
    </div>
  );
};

export default IssueStatusCard;

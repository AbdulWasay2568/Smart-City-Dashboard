import React, { useState } from "react";

interface Issue {
  id: number;
  title: string;
  status: string;
  location: string;
}

const initialIssues: Issue[] = [
  { id: 1, title: "Garbage Overflow", status: "Pending", location: "Block A" },
  { id: 2, title: "Streetlight Broken", status: "Assigned", location: "Main St" },
  { id: 3, title: "Clogged Drain", status: "In Progress", location: "Sector 12" },
];

const statusOptions = ["Pending", "Assigned", "In Progress", "Resolved"];

const statusColors: Record<string, string> = {
  Pending: "bg-yellow-100 text-yellow-800",
  Assigned: "bg-blue-100 text-blue-800",
  "In Progress": "bg-purple-100 text-purple-800",
  Resolved: "bg-green-100 text-green-800",
};

const IssueTable: React.FC = () => {
  const [issues, setIssues] = useState<Issue[]>(initialIssues);

  const handleStatusChange = (id: number, newStatus: string) => {
    const updated = issues.map((issue) =>
      issue.id === id ? { ...issue, status: newStatus } : issue
    );
    setIssues(updated);
    alert(`Issue #${id} status updated to "${newStatus}"`);
  };

  return (
    <div className="overflow-x-auto bg-white rounded-2xl shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Issue List</h2>
      <table className="w-full table-auto text-sm text-left">
        <thead className="bg-gray-100 text-gray-600 font-semibold uppercase tracking-wider">
          <tr>
            <th className="px-4 py-3">Title</th>
            <th className="px-4 py-3">Location</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3 text-center">Update Status</th>
          </tr>
        </thead>
        <tbody>
          {issues.map((issue) => (
            <tr key={issue.id} className="border-b hover:bg-gray-50 transition">
              <td className="px-4 py-3 font-medium text-gray-800">{issue.title}</td>
              <td className="px-4 py-3 text-gray-600">{issue.location}</td>
              <td className="px-4 py-3">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${statusColors[issue.status] || "bg-gray-100 text-gray-800"}`}
                >
                  {issue.status}
                </span>
              </td>
              <td className="px-4 py-3 text-center">
                <select
                  value={issue.status}
                  onChange={(e) => handleStatusChange(issue.id, e.target.value)}
                  className="w-full max-w-[160px] border border-gray-300 bg-white text-gray-700 rounded-lg px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  {statusOptions.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IssueTable;

// components/OfficialIssues/IssueTable.tsx
import React from "react";

interface Props {
  onAssignClick: (id: number) => void;
}

const issues = [
  { id: 1, title: "Garbage Overflow", status: "Pending", location: "Block A" },
  { id: 2, title: "Streetlight Broken", status: "Assigned", location: "Main St" },
  { id: 3, title: "Clogged Drain", status: "In Progress", location: "Sector 12" },
];

const IssueTable: React.FC<Props> = ({ onAssignClick }) => {
  return (
    <div className="overflow-x-auto bg-white rounded-xl shadow">
      <table className="w-full table-auto">
        <thead className="bg-gray-100 text-left">
          <tr>
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Location</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {issues.map((issue) => (
            <tr key={issue.id} className="border-t">
              <td className="px-4 py-3">{issue.title}</td>
              <td className="px-4 py-3">{issue.location}</td>
              <td className="px-4 py-3">{issue.status}</td>
              <td className="px-4 py-3 text-center">
                <button
                  onClick={() => onAssignClick(issue.id)}
                  className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 text-sm"
                >
                  Assign
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IssueTable;

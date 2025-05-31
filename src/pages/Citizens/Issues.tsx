// pages/citizen/Issues.tsx
import React from "react";
import IssueStatusCard from "../../components/IssueStatusCard";

const dummyIssues = [
  {
    id: 1,
    title: "Pothole on Main Street",
    category: "Pothole",
    status: "Resolved",
    date: "2025-05-28",
  },
  {
    id: 2,
    title: "Streetlight not working",
    category: "Streetlight",
    status: "In Progress",
    date: "2025-05-30",
  },
  {
    id: 3,
    title: "Garbage bin overflowing",
    category: "Sanitation",
    status: "Pending",
    date: "2025-05-31",
  },
];

const IssuesPage = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6">🗂️ My Reported Issues</h2>
      <div className="grid gap-4">
        {dummyIssues.map((issue) => (
          <IssueStatusCard key={issue.id} issue={issue} />
        ))}
      </div>
    </div>
  );
};

export default IssuesPage;

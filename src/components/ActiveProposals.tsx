// components/CitizenDashboard/ActiveProposals.tsx
import React from "react";

const proposals = [
  {
    id: 1,
    title: "Install Solar Lights in Parks",
    deadline: "2025-06-10",
  },
  {
    id: 2,
    title: "Weekly Garbage Collection",
    deadline: "2025-06-12",
  },
];

const ActiveProposals = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow h-full">
      <h3 className="text-lg font-semibold mb-4">📢 Active Proposals</h3>
      <ul className="space-y-3">
        {proposals.map((p) => (
          <li key={p.id}>
            <p className="font-medium">{p.title}</p>
            <p className="text-sm text-gray-500">
              Deadline: {new Date(p.deadline).toLocaleDateString()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActiveProposals;

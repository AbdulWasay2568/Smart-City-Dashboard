// pages/admin/Proposals.tsx
import React, { useState } from "react";
import CreateProposalForm from "../../components/CreateProposalForm";

const dummyProposals = [
  {
    id: 1,
    title: "Smart Water Meters",
    description: "Install smart water meters to reduce wastage.",
    deadline: "2025-06-15",
    options: ["Yes", "No"],
  },
];

const AdminProposals = () => {
  const [proposals, setProposals] = useState(dummyProposals);

  const handleCreate = (newProposal: any) => {
    setProposals([...proposals, { id: proposals.length + 1, ...newProposal }]);
  };

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-semibold">📋 Manage Proposals</h2>
      <CreateProposalForm onCreate={handleCreate} />
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">🗳️ Existing Proposals</h3>
        {proposals.map((proposal) => (
          <div
            key={proposal.id}
            className="bg-white p-4 rounded-xl shadow border"
          >
            <h4 className="text-lg font-medium">{proposal.title}</h4>
            <p className="text-sm text-gray-700">{proposal.description}</p>
            <p className="text-xs text-gray-500">
              Deadline: {new Date(proposal.deadline).toLocaleDateString()}
            </p>
            <p className="text-xs text-gray-500">
              Options: {proposal.options.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminProposals;

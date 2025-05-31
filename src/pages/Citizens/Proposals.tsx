// pages/citizen/Proposals.tsx
import React, { useState } from "react";
import ProposalCard from "../../components/ProposalCard";
import VotingResultsChart from "../../components/VotingResultsChart";

const dummyProposals = [
  {
    id: 1,
    title: "Install Solar Lights in Community Parks",
    description: "This proposal aims to enhance night-time safety and reduce energy costs by installing solar lights in parks.",
    deadline: "2025-06-10",
    options: ["Yes", "No"],
    votes: { Yes: 58, No: 24 },
  },
  {
    id: 2,
    title: "Weekly Garbage Collection Improvement",
    description: "Increase the garbage collection frequency to twice a week to avoid overflow in residential areas.",
    deadline: "2025-06-12",
    options: ["Strongly Agree", "Agree", "Neutral", "Disagree"],
    votes: {
      "Strongly Agree": 30,
      "Agree": 40,
      "Neutral": 10,
      "Disagree": 5,
    },
  },
];

const ProposalsPage = () => {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-semibold">📢 Active Proposals</h2>
      {dummyProposals.map((proposal) => (
        <div key={proposal.id} className="space-y-4">
          <ProposalCard proposal={proposal} />
          <VotingResultsChart proposal={proposal} />
        </div>
      ))}
    </div>
  );
};

export default ProposalsPage;

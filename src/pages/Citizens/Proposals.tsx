import React, { useState, useMemo } from "react";
import ProposalCard from "../../components/ProposalCard";
import VotingResultsChart from "../../components/VotingResultsChart";
import { FaFilter } from "react-icons/fa";

const dummyProposals = [
  {
    id: 1,
    title: "Install Solar Lights in Community Parks",
    description:
      "This proposal aims to enhance night-time safety and reduce energy costs by installing solar lights in parks.",
    deadline: "2025-06-10",
    options: ["Yes", "No"],
    votes: { Yes: 58, No: 24 },
  },
  {
    id: 2,
    title: "Weekly Garbage Collection Improvement",
    description:
      "Increase the garbage collection frequency to twice a week to avoid overflow in residential areas.",
    deadline: "2025-06-12",
    options: ["Strongly Agree", "Agree", "Neutral", "Disagree"],
    votes: {
      "Strongly Agree": 30,
      Agree: 40,
      Neutral: 10,
      Disagree: 5,
    },
  },
];

const ProposalsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");

  const filteredProposals = useMemo(() => {
    let filtered = dummyProposals.filter(
      (proposal) =>
        proposal.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        proposal.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (dateFrom) filtered = filtered.filter((p) => p.deadline >= dateFrom);
    if (dateTo) filtered = filtered.filter((p) => p.deadline <= dateTo);

    filtered.sort((a, b) => {
      if (sortOrder === "asc") return a.deadline.localeCompare(b.deadline);
      return b.deadline.localeCompare(a.deadline);
    });

    return filtered;
  }, [searchTerm, sortOrder, dateFrom, dateTo]);

  return (
    <div className="p-6 relative">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">📢 Active Proposals</h2>
        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="Search proposals..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            onClick={() => setDrawerOpen(true)}
            className="p-2 rounded-md hover:border transition-colors"
            aria-label="Open Filters"
          >
            <FaFilter className="text-indigo-700 cursor-pointer" size={18} />
          </button>
        </div>
      </div>

      {/* Proposals */}
      <div className="space-y-6">
        {filteredProposals.length > 0 ? (
          filteredProposals.map((proposal) => (
            <div key={proposal.id} className="space-y-4">
              <ProposalCard proposal={proposal} />
              <VotingResultsChart proposal={proposal} />
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">No proposals found.</p>
        )}
      </div>

      {/* Filter Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 backdrop-blur-sm bg-white/80 shadow-lg z-50 transform transition-transform duration-300 flex flex-col p-6 ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <h3 className="text-lg font-semibold mb-4">Filter Proposals</h3>

        {/* Sort */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">Sort by Deadline</label>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value as "asc" | "desc")}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>

        {/* From */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">From</label>
          <input
            type="date"
            value={dateFrom}
            onChange={(e) => setDateFrom(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
          />
        </div>

        {/* To */}
        <div className="mb-6">
          <label className="block mb-1 font-medium">To</label>
          <input
            type="date"
            value={dateTo}
            onChange={(e) => setDateTo(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
          />
        </div>

        <div className="mt-auto">
          <button
            onClick={() => setDrawerOpen(false)}
            className="py-2 px-4 bg-indigo-700 text-white rounded-md hover:bg-indigo-800 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProposalsPage;

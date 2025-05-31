// components/CitizenProposals/ProposalCard.tsx
import React, { useState } from "react";

interface Proposal {
  id: number;
  title: string;
  description: string;
  deadline: string;
  options: string[];
  votes: Record<string, number>;
}

const ProposalCard: React.FC<{ proposal: Proposal }> = ({ proposal }) => {
  const [selected, setSelected] = useState<string | null>(null);
  const [voted, setVoted] = useState(false);

  const handleVote = () => {
    if (selected) {
      alert(`Voted: ${selected}`);
      setVoted(true);
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h3 className="text-xl font-semibold">{proposal.title}</h3>
      <p className="text-gray-700 mt-1">{proposal.description}</p>
      <p className="text-sm text-gray-500 mt-2">
        Deadline: {new Date(proposal.deadline).toLocaleDateString()}
      </p>

      {!voted ? (
        <div className="mt-4 space-y-2">
          {proposal.options.map((option) => (
            <label key={option} className="flex items-center space-x-2">
              <input
                type="radio"
                name={`vote-${proposal.id}`}
                value={option}
                onChange={() => setSelected(option)}
              />
              <span>{option}</span>
            </label>
          ))}
          <button
            onClick={handleVote}
            className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            disabled={!selected}
          >
            Submit Vote
          </button>
        </div>
      ) : (
        <p className="mt-4 text-green-600 font-medium">
          ✅ You’ve voted: {selected}
        </p>
      )}
    </div>
  );
};

export default ProposalCard;

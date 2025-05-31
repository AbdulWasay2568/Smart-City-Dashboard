// components/CitizenProposals/VotingResultsChart.tsx
import React from "react";

interface Props {
  proposal: {
    votes: Record<string, number>;
  };
}

const VotingResultsChart: React.FC<Props> = ({ proposal }) => {
  const total = Object.values(proposal.votes).reduce((sum, v) => sum + v, 0);

  return (
    <div className="bg-gray-100 p-4 rounded-xl">
      <h4 className="font-semibold mb-2">🗳️ Live Voting Results</h4>
      <div className="space-y-2">
        {Object.entries(proposal.votes).map(([option, count]) => {
          const percent = total ? Math.round((count / total) * 100) : 0;
          return (
            <div key={option}>
              <div className="flex justify-between mb-1">
                <span>{option}</span>
                <span>{percent}%</span>
              </div>
              <div className="w-full bg-white h-3 rounded-full">
                <div
                  className="bg-blue-500 h-3 rounded-full"
                  style={{ width: `${percent}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VotingResultsChart;

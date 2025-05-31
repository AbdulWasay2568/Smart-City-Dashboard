// components/CitizenDashboard/QuickActions.tsx
import React from "react";
import { useNavigate } from "react-router-dom";

const QuickActions = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white p-4 rounded-xl shadow flex flex-wrap gap-4 justify-between">
      <button
        onClick={() => navigate("/citizen/report")}
        className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg w-full sm:w-auto"
      >
        📍 Report an Issue
      </button>
      <button
        onClick={() => navigate("/citizen/issues")}
        className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-lg w-full sm:w-auto"
      >
        🗂️ View My Issues
      </button>
      <button
        onClick={() => navigate("/citizen/proposals")}
        className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg w-full sm:w-auto"
      >
        🗳️ Vote Now
      </button>
    </div>
  );
};

export default QuickActions;

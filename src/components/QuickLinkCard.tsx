// components/OfficialDashboard/QuickLinkCard.tsx
import React from "react";
import { useNavigate } from "react-router-dom";

const QuickLinkCard = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white p-4 rounded-xl shadow h-full flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-semibold mb-2">⚡ Quick Access</h3>
        <p className="text-sm text-gray-600">
          Jump straight into your assigned issues.
        </p>
      </div>
      <button
        onClick={() => navigate("/official/issues")}
        className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
      >
        Go to Issues
      </button>
    </div>
  );
};

export default QuickLinkCard;

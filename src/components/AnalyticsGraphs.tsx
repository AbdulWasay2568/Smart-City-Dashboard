// components/AdminDashboard/AnalyticsGraphs.tsx
import React from "react";

const AnalyticsGraphs = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow space-y-4">
      <h3 className="text-lg font-semibold">📊 Issue & Resolution Analytics</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="h-40 bg-gray-100 rounded flex items-center justify-center text-gray-600">
          [Bar Chart: Issues per Dept]
        </div>
        <div className="h-40 bg-gray-100 rounded flex items-center justify-center text-gray-600">
          [Line Chart: Avg Resolution Time]
        </div>
      </div>
    </div>
  );
};

export default AnalyticsGraphs;

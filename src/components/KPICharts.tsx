// components/OfficialDashboard/KPICharts.tsx
import React from "react";

const KPICharts = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow h-full">
      <h3 className="text-lg font-semibold mb-2">📈 Department KPIs</h3>
      <div className="h-40 bg-gray-200 rounded flex items-center justify-center text-gray-600">
        [Chart Placeholder]
      </div>
      <p className="text-sm text-gray-500 mt-2">
        e.g., Avg. resolution time, response rate
      </p>
    </div>
  );
};

export default KPICharts;

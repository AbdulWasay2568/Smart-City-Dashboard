// components/AdminReports/ReportFilterPanel.tsx
import React, { useState } from "react";

const departments = ["All", "Sanitation", "Transport", "Health"];
const reportTypes = ["Issue Report", "Performance Summary", "Citizen Engagement"];

const ReportFilterPanel = () => {
  const [filters, setFilters] = useState({
    department: "All",
    reportType: "Issue Report",
    fromDate: "",
    toDate: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleDownload = () => {
    alert(`🔽 Downloading "${filters.reportType}" for ${filters.department}\nFrom: ${filters.fromDate} To: ${filters.toDate}`);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block font-medium mb-1">Department</label>
          <select
            name="department"
            value={filters.department}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          >
            {departments.map((dept) => (
              <option key={dept}>{dept}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block font-medium mb-1">Report Type</label>
          <select
            name="reportType"
            value={filters.reportType}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          >
            {reportTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block font-medium mb-1">From Date</label>
          <input
            type="date"
            name="fromDate"
            value={filters.fromDate}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">To Date</label>
          <input
            type="date"
            name="toDate"
            value={filters.toDate}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>
      </div>

      <div className="pt-4">
        <button
          onClick={handleDownload}
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
        >
          📥 Download Report
        </button>
      </div>
    </div>
  );
};

export default ReportFilterPanel;

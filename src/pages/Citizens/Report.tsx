// pages/citizen/Report.tsx
import React, { useState } from "react";
import ReportIssueForm from "../../components/ReportIssueForm";
import ARReportInterface from "../../components/ARReportInterface";

const ReportPage = () => {
  const [useAR, setUseAR] = useState(false);

  return (
    <div className="p-6 space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">📍 Report a City Issue</h2>
        <button
          onClick={() => setUseAR(!useAR)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer"
        >
          {useAR ? "Use Form Instead" : "Use AR to Report"}
        </button>
      </div>

      {useAR ? <ARReportInterface /> : <ReportIssueForm />}
    </div>
  );
};

export default ReportPage;

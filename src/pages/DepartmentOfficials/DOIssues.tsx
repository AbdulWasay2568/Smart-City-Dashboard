// pages/official/Issues.tsx
import React, { useState } from "react";
import IssueTable from "../../components/IssueTable";
import AssignIssueModal from "../../components/AssignIssuesModal";

const DOIssues = () => {
  const [selectedIssueId, setSelectedIssueId] = useState<number | null>(null);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6">🗂️ Department Issues</h2>
      <IssueTable onAssignClick={setSelectedIssueId} />
      <AssignIssueModal
        issueId={selectedIssueId}
        onClose={() => setSelectedIssueId(null)}
      />
    </div>
  );
};

export default DOIssues;

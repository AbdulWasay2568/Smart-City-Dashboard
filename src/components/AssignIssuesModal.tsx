// components/OfficialIssues/UpdateIssueStatusModal.tsx
import React, { useState } from "react";

interface Props {
  issueId: number | null;
  onClose: () => void;
}

const statusOptions = ["Pending", "Assigned", "In Progress", "Resolved"];

const AssignIssueStatusModal: React.FC<Props> = ({ issueId, onClose }) => {
  const [selectedStatus, setSelectedStatus] = useState("");

  if (issueId === null) return null;

  const handleUpdate = () => {
    alert(`Issue #${issueId} status updated to "${selectedStatus}"`);
    setSelectedStatus("");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-sm">
        <h3 className="text-lg font-semibold mb-4">Update Issue Status</h3>

        <select
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
          className="w-full border p-2 rounded mb-4"
        >
          <option value="">-- Select Status --</option>
          {statusOptions.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>

        <div className="flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={handleUpdate}
            disabled={!selectedStatus}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssignIssueStatusModal;

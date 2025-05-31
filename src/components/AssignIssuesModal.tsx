// components/OfficialIssues/AssignIssueModal.tsx
import React, { useState } from "react";

interface Props {
  issueId: number | null;
  onClose: () => void;
}

const fieldWorkers = ["Ali Raza", "Fatima Bano", "John Doe", "Sarah Khan"];

const AssignIssueModal: React.FC<Props> = ({ issueId, onClose }) => {
  const [selectedWorker, setSelectedWorker] = useState("");

  if (issueId === null) return null;

  const handleAssign = () => {
    alert(`Assigned ${selectedWorker} to issue #${issueId}`);
    setSelectedWorker("");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-sm">
        <h3 className="text-lg font-semibold mb-4">Assign Field Worker</h3>
        <select
          value={selectedWorker}
          onChange={(e) => setSelectedWorker(e.target.value)}
          className="w-full border p-2 rounded mb-4"
        >
          <option value="">-- Select Worker --</option>
          {fieldWorkers.map((worker) => (
            <option key={worker} value={worker}>
              {worker}
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
            onClick={handleAssign}
            disabled={!selectedWorker}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Assign
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssignIssueModal;

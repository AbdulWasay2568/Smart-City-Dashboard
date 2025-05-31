// components/CitizenDashboard/Notifications.tsx
import React from "react";

const notifications = [
  "Your issue 'Broken streetlight' has been assigned.",
  "Voting ends tomorrow on proposal: 'Solar Lights in Parks'.",
];

const Notifications = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h3 className="text-lg font-semibold mb-4">🔔 Notifications</h3>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        {notifications.map((n, idx) => (
          <li key={idx}>{n}</li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;

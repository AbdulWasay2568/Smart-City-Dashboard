// components/CitizenReport/ARReportInterface.tsx
import React from "react";

const ARReportInterface = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-xl shadow text-center">
      <h3 className="text-xl font-semibold mb-2">🕶️ AR Reporting Mode</h3>
      <p className="text-gray-700 mb-4">
        Launching camera to capture and classify issue...
      </p>
      <div className="bg-gray-300 h-60 rounded-lg flex items-center justify-center text-gray-500">
        [📱 Live Camera Feed Placeholder]
      </div>
      <p className="text-sm mt-4 text-gray-500">
        AR detection & image recognition integration coming soon!
      </p>
    </div>
  );
};

export default ARReportInterface;

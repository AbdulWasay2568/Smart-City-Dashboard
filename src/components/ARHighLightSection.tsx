import React from "react";

const ARHighlightsSection = () => {
  return (
    <section className="bg-blue-50 py-16 px-6">
      <h2 className="text-2xl font-bold text-center mb-6">🔍 Augmented Reality Highlights</h2>
      <p className="text-center max-w-2xl mx-auto text-gray-700 mb-6">
        SCCD leverages AR to enhance issue detection, infrastructure inspection, and field operations.
      </p>
      <div className="flex justify-center">
        <img src="/ar-illustration.png" alt="AR feature" className="w-3/4 rounded-lg shadow-md" />
      </div>
    </section>
  );
};

export default ARHighlightsSection;

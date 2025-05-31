import React from "react";

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-white px-6">
      <h2 className="text-2xl font-bold text-center mb-8">💬 What People Say</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="bg-gray-50 p-4 rounded shadow text-sm">
          “SCCD changed how we manage sanitation! AR helped our workers find and fix faster.”
        </div>
        <div className="bg-gray-50 p-4 rounded shadow text-sm">
          “Reporting a pothole is just a few taps. SCCD made citizens feel heard.”
        </div>
        <div className="bg-gray-50 p-4 rounded shadow text-sm">
          “Real-time collaboration between departments reduced issue resolution time drastically.”
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

import React from "react";

const features = [
  "Real-Time Issue Reporting & Tracking",
  "Interactive City Map View",
  "Full Admin Analytics Dashboard",
  "Department Coordination Tools",
  "AR-Based Reporting & Assistance"
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-gray-50 px-6">
      <h2 className="text-2xl font-bold text-center mb-8">Key Features</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow text-gray-700"
          >
            ✅ {feature}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;

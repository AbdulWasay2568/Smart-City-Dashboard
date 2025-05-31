// components/CitizenDashboard/WelcomeBanner.tsx
import React from "react";

const WelcomeBanner = () => {
  const today = new Date().toLocaleDateString();

  return (
    <div className="bg-blue-100 border-l-4 border-blue-500 p-4 rounded-xl shadow">
      <h2 className="text-xl font-semibold text-blue-800">
        Welcome Back, Citizen! 👋
      </h2>
      <p className="text-sm text-blue-700">Today is {today}</p>
    </div>
  );
};

export default WelcomeBanner;

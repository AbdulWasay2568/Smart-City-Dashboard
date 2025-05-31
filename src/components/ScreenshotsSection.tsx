import React from "react";

const ScreenshotsSection = () => {
  return (
    <section className="py-16 bg-white px-6">
      <h2 className="text-2xl font-bold text-center mb-8">📸 Platform Previews</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <img src="/ss1.png" alt="screenshot 1" className="rounded shadow" />
        <img src="/ss2.png" alt="screenshot 2" className="rounded shadow" />
        <img src="/ss3.png" alt="screenshot 3" className="rounded shadow" />
      </div>
    </section>
  );
};

export default ScreenshotsSection;

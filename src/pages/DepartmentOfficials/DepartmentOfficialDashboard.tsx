// pages/official/Dashboard.tsx
import React from "react";
import DepartmentWelcomeBanner from "../../components/DepartmentWelcomeBanner";
import DepartmentStats from "../../components/DepartmentStats";
import KPICharts from "../../components/KPICharts";
import QuickLinkCard from "../../components/QuickLinkCard";

const OfficialDashboard = () => {
  return (
    <div className="p-6 space-y-6">
      <DepartmentWelcomeBanner />
      <DepartmentStats />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <KPICharts />
        <QuickLinkCard />
      </div>
    </div>
  );
};

export default OfficialDashboard;

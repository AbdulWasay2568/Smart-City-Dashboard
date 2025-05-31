// pages/admin/Dashboard.tsx
import React from "react";
import AdminWelcomeBanner from "../../components/AdminWelcomeBanner";
import AnalyticsGraphs from "../../components/AnalyticsGraphs";
import Heatmap from "../../components/HeatMap";
import PerformanceComparisonTable from "../../components/PerformanceComparisonTable";

const AdminDashboard = () => {
  return (
    <div className="p-6 space-y-6">
      <AdminWelcomeBanner />
      <AnalyticsGraphs />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Heatmap />
        <PerformanceComparisonTable />
      </div>
    </div>
  );
};

export default AdminDashboard;

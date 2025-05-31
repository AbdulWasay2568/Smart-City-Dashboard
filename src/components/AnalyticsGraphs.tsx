// components/AdminDashboard/AnalyticsGraphs.tsx
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  LineChart,
  Line,
  Cell,
} from "recharts";

const issueData = [
  { department: "Sanitation", issues: 45 },
  { department: "Roads", issues: 30 },
  { department: "Electricity", issues: 20 },
  { department: "Water", issues: 35 },
];

const resolutionData = [
  { month: "Jan", time: 5 },
  { month: "Feb", time: 4 },
  { month: "Mar", time: 6 },
  { month: "Apr", time: 3 },
  { month: "May", time: 4.5 },
];

// Custom bar colors for each department
const barColors = ["#6366f1", "#10b981", "#f59e0b", "#ef4444"];

const AnalyticsGraphs = () => {
  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg space-y-6">
      <h3 className="text-xl md:text-2xl font-bold text-gray-800">
        📊 Issue & Resolution Analytics
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Bar Chart */}
        <div className="h-72 bg-gray-50 rounded-xl p-4 shadow-inner">
          <h4 className="text-lg font-medium text-gray-700 mb-2">
            🏢 Issues per Department
          </h4>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={issueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="department" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="issues" radius={[8, 8, 0, 0]}>
                {issueData.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={barColors[index % barColors.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Line Chart */}
        <div className="h-72 bg-gray-50 rounded-xl p-4 shadow-inner">
          <h4 className="text-lg font-medium text-gray-700 mb-2">
            ⏱️ Avg Resolution Time (Days)
          </h4>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={resolutionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="time"
                stroke="#3b82f6"
                strokeWidth={3}
                dot={{ r: 5, strokeWidth: 2, fill: "#3b82f6", stroke: "#ffffff" }}
                activeDot={{ r: 7 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsGraphs;

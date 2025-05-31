// AppRouter.tsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Public
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

// Citizen
import CitizenDashboard from "../pages/Citizens/CitizenDashboard";
import Report from "../pages/Citizens/Report";
import Issues from "../pages/Citizens/Issues";
import Proposals from "../pages/Citizens/Proposals";

// Official
import DepartmentOfficialDashboard from "../pages/DepartmentOfficials/DepartmentOfficialDashboard";
import DOIssues from "../pages/DepartmentOfficials/DOIssues";

// Admin
import AdminDashboard from "../pages/Admin/AdminDashboard";
import UsersTable from "../pages/Admin/UsersTable";
import AdminProposals from "../pages/Admin/AdminProposals";
import Reports from "../pages/Admin/Reports";
import IssueDetails from "../pages/Citizens/IssueDetails";

interface AppRouterProps {
  role: 'citizen' | 'official' | 'admin' | null;
}

const AppRouter: React.FC<AppRouterProps> = ({ role }) => {
  return (
    <Routes>
      {/* ✅ Public Routes - Always accessible */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />

      {/* ✅ Role-Based Routes */}
      {role === "citizen" && (
        <>
          <Route path="/citizen/dashboard" element={<CitizenDashboard />} />
          <Route path="/citizen/report" element={<Report />} />
          <Route path="/citizen/issues" element={<Issues />} />
          <Route path="/citizen/issue/:id" element={<IssueDetails />} />
          <Route path="/citizen/proposals" element={<Proposals />} />
        </>
      )}

      {role === "official" && (
        <>
          <Route path="/official/dashboard" element={<DepartmentOfficialDashboard />} />
          <Route path="/official/issues" element={<DOIssues />} />
          <Route path="/citizen/issues" element={<Issues />} />
          <Route path="/citizen/issue/:id" element={<IssueDetails />} />
        </>
      )}

      {role === "admin" && (
        <>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/users" element={<UsersTable />} />
          <Route path="/admin/proposals" element={<AdminProposals />} />
          <Route path="/admin/reports" element={<Reports />} />
        </>
      )}

      {/* 🔁 Fallback: if role exists, redirect to their dashboard; else stay on public */}
      {role ? (
        <Route path="*" element={<Navigate to={`/${role}/dashboard`} replace />} />
      ) : (
        <Route path="*" element={<Navigate to="/" replace />} />
      )}
    </Routes>
  );
};

export default AppRouter;

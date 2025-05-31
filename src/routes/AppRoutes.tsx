import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import SkillDetailsPage from "../pages/Skills";
import CitizenDashboard from "../pages/Citizens/CitizenDashboard";
import Report from "../pages/Citizens/Report";
import Issues from "../pages/Citizens/Issues";
import Proposals from "../pages/Citizens/Proposals";
import DepartmentOfficialDashboard from "../pages/DepartmentOfficials/DepartmentOfficialDashboard";
import DOIssues from "../pages/DepartmentOfficials/DoIssues";
import AdminDashboard from "../pages/Admin/AdminDashboard";
import UsersTable from "../pages/Admin/UsersTable";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/skills" element={<SkillDetailsPage />} />

      {/* Citizen */}
      <Route path="/citizen/dashboard" element={<CitizenDashboard />} />
      <Route path="/citizen/report" element={<Report />} />
      <Route path="/citizen/issues" element={<Issues />} />
      <Route path="/citizen/proposals" element={<Proposals />} />

      {/* DO  */}
      <Route path="/official/dashboard" element={<DepartmentOfficialDashboard />} />
      <Route path="/official/issues" element={<DOIssues />} />

      {/* Admin */}
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/admin/users" element={<UsersTable />} />
      {/* <Route path="/citizen/dashboard" element={<CitizenDashboard />} />
      <Route path="/citizen/dashboard" element={<CitizenDashboard />} />
      <Route path="/citizen/dashboard" element={<CitizenDashboard />} /> */}

    </Routes>
  );
};

export default AppRouter;

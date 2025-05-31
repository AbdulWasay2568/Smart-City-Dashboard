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
      <Route path="/Department-Official/dashboard" element={<CitizenDashboard />} />
      {/* <Route path="/citizen/dashboard" element={<CitizenDashboard />} />
      <Route path="/citizen/dashboard" element={<CitizenDashboard />} />
      <Route path="/citizen/dashboard" element={<CitizenDashboard />} /> */}

    </Routes>
  );
};

export default AppRouter;

import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import SkillDetailsPage from "../pages/Skills";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/skills" element={<SkillDetailsPage />} />
      {/* <Route path="/skills/:id" element={<SkillDetailsPage />} /> */}
      
    </Routes>
  );
};

export default AppRouter;

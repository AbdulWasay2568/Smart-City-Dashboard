import React from "react";
import AppRouter from "./routes/AppRoutes";
import './index.css';
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";

const App: React.FC = () => {
  return (
    <>
      <Navbar/>
      <AppRouter />
      <Footer/>
    </>

  );
};

export default App;

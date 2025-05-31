import React from "react";
import AppRouter from "./routes/AppRoutes";
import './index.css';
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";
import Sidebar from "./components/Sidebar";
import {useAuth} from "./context/Auth";


// const role =  null; // 'citizen' | 'official' | 'admin' | null

const App: React.FC = () => {
  const {role,userId} = useAuth();
  console.log({role})
  return (
    <>
      {role === null && (
        <>
          <AppRouter role={role} />
        </>
      )}

      {role === 'citizen' && (
        <>
          <Navbar />
          <AppRouter role={role} />
        </>
      )}

      {(role === 'official' || role === 'admin') && (
        <div className="flex flex-col md:flex-row">
          <Sidebar role={role} />
          <div className="w-full">
            <AppRouter role={role}/>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default App;

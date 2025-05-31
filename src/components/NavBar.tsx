import { FaUserCircle, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from '../assets/Images/SafeCityLogo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
    setMenuOpen(false); // Close mobile menu
    setUserMenuOpen(false); // Close user dropdown
  };

  return (
    <nav className="bg-indigo-700 text-white sticky top-0 z-50 shadow-md">
      <div className="flex justify-between items-center px-4 md:px-8 py-4 relative">
        {/* Logo */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => handleNavigate("/")}
        >
          <img src={logo} alt="Logo" className="h-8" />
          <span className="text-lg font-bold hover:text-yellow-300 transition-colors">
            Smart City
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex gap-8 items-center font-medium text-white">
          <span
            className="cursor-pointer hover:text-yellow-300 transition-colors"
            onClick={() => handleNavigate("/")}
          >
            Home
          </span>
          <span
            className="cursor-pointer hover:text-yellow-300 transition-colors"
            onClick={() => handleNavigate("/citizen/dashboard")}
          >
            Dashboard
          </span>
          <span
            className="cursor-pointer hover:text-yellow-300 transition-colors"
            onClick={() => handleNavigate("/citizen/proposals")}
          >
            Vote
          </span>
          <span
            className="cursor-pointer hover:text-yellow-300 transition-colors"
            onClick={() => handleNavigate("/citizen/report")}
          >
            Report an Issue
          </span>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-6 relative">
          {/* User Icon (Desktop only) */}
          <div className="hidden md:flex items-center gap-2 text-white relative">
            <FaUserCircle
              className="text-2xl cursor-pointer"
              onClick={() => setUserMenuOpen(!userMenuOpen)}
            />
            {userMenuOpen && (
              <div className="absolute top-10 right-0 bg-white text-gray-800 rounded-md shadow-lg py-2 w-40 z-50">
                <div
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleNavigate("/profile")}
                >
                  My Account
                </div>
                <div
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleNavigate("/login")}
                >
                  Logout
                </div>
              </div>
            )}
          </div>

          {/* Hamburger Menu (Mobile only) */}
          <button
            className="lg:hidden text-2xl text-white focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white text-gray-800 border-t shadow-inner px-4 pb-4">
          <div className="flex flex-col gap-4 pt-4 font-medium">
            <span
              className="hover:text-blue-600 cursor-pointer transition-colors"
              onClick={() => handleNavigate("/")}
            >
              Home
            </span>
            <span
              className="hover:text-blue-600 cursor-pointer transition-colors"
              onClick={() => handleNavigate("/citizen/dashboard")}
            >
              Dashboard
            </span>
            <span
              className="hover:text-blue-600 cursor-pointer transition-colors"
              onClick={() => handleNavigate("/citizen/proposals")}
            >
              Vote
            </span>
            <span
              className="hover:text-blue-600 cursor-pointer transition-colors"
              onClick={() => handleNavigate("/citizen/report")}
            >
              Report an Issue
            </span>
            <span
              className="hover:text-blue-600 cursor-pointer transition-colors"
              onClick={() => handleNavigate("/profile")}
            >
              My Account
            </span>
            <span
              className="hover:text-blue-600 cursor-pointer transition-colors"
              onClick={() => handleNavigate("/login")}
            >
              Logout
            </span>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

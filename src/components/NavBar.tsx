import { FaUserCircle, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-indigo-700 text-white sticky top-0 z-50 shadow-md">
      <div className="flex justify-between items-center px-4 md:px-8 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Logo" className="h-8" />
          <span className="text-lg font-bold cursor-pointer hover:text-yellow-300 transition-colors">
            Smart City
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex gap-8 items-center font-medium text-white">
          <span className="cursor-pointer hover:text-yellow-300 transition-colors">Home</span>
          <span className="cursor-pointer hover:text-yellow-300 transition-colors">Skills</span>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-2 text-white">
            <FaUserCircle className="text-2xl" />
          </div>

          {/* Hamburger Menu */}
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
            <span className="hover:text-blue-600 cursor-pointer transition-colors">Home</span>
            <span className="hover:text-blue-600 cursor-pointer transition-colors">Skills</span>
            <div className="flex items-center gap-2">
              <span>My Account</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

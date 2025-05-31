import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/official/dashboard", label: "📊 Dashboard" },
  { to: "/citizen/issues", label: "🛠️ Manage Issues" },
  { to: "/official/chat", label: "💬 Chat" },
  { to: "/official/field-ar", label: "🕶️ Field AR" },
  { to: "/login", label: "Logout" },
];

const OfficialSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger button for mobile */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded-md shadow-md"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 min-h-screen bg-white shadow-lg border-r border-gray-200
          w-64 p-6 pt-16
          transform transition-transform duration-300 ease-in-out
          md:relative md:translate-x-0 md:w-1/3 lg:w-[380px] md:pt-6 md:block
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          z-40
        `}
      >
        <nav className="flex flex-col space-y-4">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setIsOpen(false)} // Close sidebar on link click (mobile)
              className={({ isActive }) =>
                `block px-3 py-2 rounded font-medium hover:bg-blue-100 ${
                  isActive ? "bg-blue-100 text-blue-700" : "text-gray-700"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Overlay behind sidebar on mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default OfficialSidebar;

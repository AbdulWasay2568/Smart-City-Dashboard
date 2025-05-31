import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { LayoutDashboard, Users, ClipboardList, MessageSquare, FileText, Menu, X } from "lucide-react";

const links = [
  { to: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/admin/users", label: "Users", icon: Users },
  { to: "/admin/proposals", label: "Proposals", icon: ClipboardList },
  { to: "/admin/chat", label: "Chat", icon: MessageSquare },
  { to: "/admin/reports", label: "Reports", icon: FileText },
];

const AdminSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger button - visible on mobile only */}
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
          fixed top-0 left-0 h-full bg-white shadow-lg border-r border-gray-200
          w-64 p-6 pt-16
          transform transition-transform duration-300 ease-in-out
          md:relative md:translate-x-0 md:w-1/3 md:pt-6 md:block
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          z-40
        `}
      >
        {/* Logo / Header */}
        <div className="mb-8 border-b border-gray-200 pb-4">
          <h1 className="text-2xl font-bold text-indigo-600 tracking-wide">Admin Panel</h1>
        </div>

        {/* Nav Links */}
        <nav className="flex flex-col space-y-2">
          {links.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setIsOpen(false)} // Close menu on link click (mobile)
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-lg transition font-medium ${
                  isActive
                    ? "bg-indigo-100 text-indigo-700"
                    : "text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                }`
              }
            >
              <Icon size={20} />
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Footer */}
        <div className="absolute bottom-6 left-6 right-6 border-t border-gray-200 pt-4 text-sm text-gray-500">
          © 2025 SkillBridge
        </div>
      </aside>

      {/* Overlay when sidebar is open on mobile */}
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

export default AdminSidebar;

// pages/admin/Users.tsx
import React from "react";
import UserManagementPanel from "../../components/UserManagementPanel";

const UsersTable = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6">👥 Manage Users</h2>
      <UserManagementPanel />
    </div>
  );
};

export default UsersTable;

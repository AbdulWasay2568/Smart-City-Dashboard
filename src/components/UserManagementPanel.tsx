// components/AdminUsers/UserManagementPanel.tsx
import React, { useState } from "react";

const dummyUsers = [
  { id: 1, name: "Ali Raza", email: "ali@example.com", role: "Citizen", active: true },
  { id: 2, name: "Sara Khan", email: "sara@example.com", role: "Department Official", active: true },
  { id: 3, name: "John Doe", email: "john@example.com", role: "Citizen", active: false },
];

const UserManagementPanel = () => {
  const [users, setUsers] = useState(dummyUsers);

  const toggleActive = (id: number) => {
    const updated = users.map((u) =>
      u.id === id ? { ...u, active: !u.active } : u
    );
    setUsers(updated);
  };

  const changeRole = (id: number, newRole: string) => {
    const updated = users.map((u) =>
      u.id === id ? { ...u, role: newRole } : u
    );
    setUsers(updated);
  };

  const deleteUser = (id: number) => {
    const updated = users.filter((u) => u.id !== id);
    setUsers(updated);
  };

  return (
    <div className="overflow-x-auto bg-white p-4 rounded-xl shadow">
      <table className="w-full table-auto text-sm">
        <thead className="bg-gray-100 text-left">
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Role</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-t">
              <td className="px-4 py-2">{user.name}</td>
              <td className="px-4 py-2">{user.email}</td>
              <td className="px-4 py-2">
                <select
                  value={user.role}
                  onChange={(e) => changeRole(user.id, e.target.value)}
                  className="border rounded p-1"
                >
                  <option>Citizen</option>
                  <option>Department Official</option>
                  <option>Admin</option>
                </select>
              </td>
              <td className="px-4 py-2">
                {user.active ? (
                  <span className="text-green-600 font-medium">Active</span>
                ) : (
                  <span className="text-red-500 font-medium">Inactive</span>
                )}
              </td>
              <td className="px-4 py-2 text-center space-x-2">
                <button
                  onClick={() => toggleActive(user.id)}
                  className={`px-3 py-1 rounded text-white ${
                    user.active ? "bg-yellow-600" : "bg-green-600"
                  }`}
                >
                  {user.active ? "Deactivate" : "Activate"}
                </button>
                <button
                  onClick={() => deleteUser(user.id)}
                  className="px-3 py-1 rounded bg-red-600 text-white"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagementPanel;

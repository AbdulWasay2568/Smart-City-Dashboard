import React from "react";

const UserTypesSection = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <h2 className="text-2xl font-bold text-center mb-8">Who Can Use SCCD?</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto text-center">
        <div className="bg-gray-100 p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold text-blue-700 mb-2">Admin</h3>
          <p>Full control over user, roles, departments, and analytics.</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold text-green-700 mb-2">Department Officials</h3>
          <p>Manage departmental data, issues, and collaborate citywide.</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold text-purple-700 mb-2">Citizens</h3>
          <p>Report issues, track updates, and vote on proposals.</p>
        </div>
      </div>
    </section>
  );
};

export default UserTypesSection;

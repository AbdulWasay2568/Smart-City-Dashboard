import React, { useState } from "react";

type CreateProposalFormProps = {
  onCreate: (newProposal: any) => void;
};

const CreateProposalForm = ({ onCreate }: CreateProposalFormProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const [options, setOptions] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !deadline || !options) {
      alert("All fields are required.");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/v2/votings/createVoting", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
          deadline,
          options,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Error creating proposal.");
        return;
      }

      alert("✅ Proposal created successfully!");
      onCreate(data); // call parent function with new proposal
      setTitle("");
      setDescription("");
      setDeadline("");
      setOptions("");
    } catch (error) {
      console.error("Error creating proposal:", error);
      alert("❌ Server error while creating proposal.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-xl shadow space-y-4">
      <h3 className="text-lg font-semibold">➕ Create New Proposal</h3>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full px-3 py-2 border rounded"
        required
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full px-3 py-2 border rounded"
      />

      <input
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
        className="w-full px-3 py-2 border rounded"
        required
      />

      <input
        type="text"
        placeholder="Options (comma-separated)"
        value={options}
        onChange={(e) => setOptions(e.target.value)}
        className="w-full px-3 py-2 border rounded"
        required
      />

      <button
        type="submit"
        className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
      >
        Submit
      </button>
    </form>
  );
};

export default CreateProposalForm;

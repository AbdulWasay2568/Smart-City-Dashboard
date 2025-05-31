// components/AdminProposals/CreateProposalForm.tsx
import React, { useState } from "react";

interface Props {
  onCreate: (proposal: {
    title: string;
    description: string;
    deadline: string;
    options: string[];
  }) => void;
}

const CreateProposalForm: React.FC<Props> = ({ onCreate }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    deadline: "",
    options: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const options = formData.options
      .split(",")
      .map((opt) => opt.trim())
      .filter((opt) => opt !== "");
    if (!formData.title || !formData.description || !formData.deadline || options.length === 0) {
      alert("Please fill all fields with at least one voting option.");
      return;
    }
    onCreate({
      title: formData.title,
      description: formData.description,
      deadline: formData.deadline,
      options,
    });
    setFormData({ title: "", description: "", deadline: "", options: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow space-y-4"
    >
      <h3 className="text-lg font-semibold">➕ Create New Proposal</h3>

      <div>
        <label className="block font-medium mb-1">Title</label>
        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          rows={3}
          required
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Deadline</label>
        <input
          name="deadline"
          type="date"
          value={formData.deadline}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Voting Options</label>
        <input
          name="options"
          value={formData.options}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          placeholder="Enter comma-separated options (e.g., Yes, No)"
          required
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Create Proposal
      </button>
    </form>
  );
};

export default CreateProposalForm;

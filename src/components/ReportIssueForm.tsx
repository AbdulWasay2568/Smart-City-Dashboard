// components/CitizenReport/ReportIssueForm.tsx
import React, { useState } from "react";

const ReportIssueForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "Pothole",
    location: "",
    media: null as File | null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, media: e.target.files?.[0] || null });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted data:", formData);
    alert("Issue submitted!");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow space-y-4">
      <div>
        <label className="block font-medium mb-1">Issue Title</label>
        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border rounded p-2"
          placeholder="e.g., Pothole near school"
          required
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border rounded p-2"
          rows={4}
          placeholder="Describe the issue..."
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full border rounded p-2"
        >
          <option>Pothole</option>
          <option>Streetlight</option>
          <option>Sanitation</option>
          <option>Traffic Signal</option>
        </select>
      </div>

      <div>
        <label className="block font-medium mb-1">Location</label>
        <input
          name="location"
          value={formData.location}
          onChange={handleChange}
          className="w-full border rounded p-2"
          placeholder="e.g., Main Street, Block A"
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Upload Photo/Video</label>
        <input type="file" accept="image/*,video/*" onChange={handleFileChange} />
      </div>

      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Submit Issue
      </button>
    </form>
  );
};

export default ReportIssueForm;

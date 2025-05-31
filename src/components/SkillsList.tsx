import { useState } from "react";
import SkillCard from "./SkillCard";

const mockSkills = [
  {
    title: "Canva for Resume Designing",
    description: "Learn to build a great resume using Canva in 30 minutes.",
    tutor: "Umar Khan",
    tags: ["canva", "resume", "design"],
  },
  {
    title: "Intro to Arduino",
    description: "Basics of Arduino hardware and programming.",
    tutor: "Sara Ahmed",
    tags: ["arduino", "hardware", "iot"],
  },
  {
    title: "3D Design Basics",
    description: "Start creating simple 3D models using Tinkercad.",
    tutor: "Ali Raza",
    tags: ["3d", "design", "tinkercad"],
  },
  {
    title: "Effective CV Writing",
    description: "Tips and structure for writing a winning CV.",
    tutor: "Fatima Noor",
    tags: ["resume", "career", "cv"],
  },
];

const SearchableSkills = () => {
  const [query, setQuery] = useState("");

  const filteredSkills = mockSkills.filter(skill => {
    const lowerQuery = query.toLowerCase();
    return (
      skill.title.toLowerCase().includes(lowerQuery) ||
      skill.tutor.toLowerCase().includes(lowerQuery) ||
      skill.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
    );
  });

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-12 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10">Explore Skills</h2>

      <div className="max-w-3xl mx-auto mb-8">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by title, tutor, or tag..."
          className="w-full p-3 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {filteredSkills.length === 0 ? (
        <p className="text-center text-gray-500">No skills found for "{query}".</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      )}
    </section>
  );
};

export default SearchableSkills;

type Skill = {
  title: string;
  description: string;
  tutor: string;
  tags: string[];
};

const SkillCard = ({ title, description, tutor, tags }: Skill) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-sm text-gray-600 mt-2">{description}</p>
      <p className="mt-2 text-sm text-gray-800 font-medium">By {tutor}</p>
      <div className="flex flex-wrap gap-2 mt-3">
        {tags.map((tag, idx) => (
          <span key={idx} className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">
            #{tag}
          </span>
        ))}
      </div>
      <button className="mt-4 text-sm bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Request Session
      </button>
    </div>
  );
};

export default SkillCard;

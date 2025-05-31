type SkillDetailProps = {
  title: string;
  description: string;
  tutor: string;
  tags: string[];
};

const SkillDetail = ({ title, description, tutor, tags }: SkillDetailProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto mt-10">
      <h1 className="text-3xl font-bold text-blue-800">{title}</h1>
      <p className="mt-4 text-gray-700">{description}</p>

      <p className="mt-6 text-sm text-gray-800 font-medium">Tutor: {tutor}</p>

      <div className="flex flex-wrap gap-2 mt-4">
        {tags.map((tag, idx) => (
          <span key={idx} className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillDetail;

import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-blue-50 py-20 text-center">
      <h1 className="text-4xl font-bold mb-4 text-blue-800">
        Smart City Collaborative Dashboard
      </h1>
      <p className="text-lg max-w-xl mx-auto text-gray-700">
        Real-time coordination, immersive analytics, and citizen engagement for smarter cities.
      </p>
      <button
        className="mt-6 bg-blue-600 text-white cursor-pointer px-6 py-3 rounded-md hover:bg-blue-700 transition"
        onClick={() => navigate("/login")}
      >
        Get Started
      </button>
    </section>
  );
};

export default HeroSection;

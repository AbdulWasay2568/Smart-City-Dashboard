
import { useNavigate } from "react-router-dom";

const CallToActionSection = () => {
    const navigate = useNavigate();

  return (
    <section className="bg-blue-600 text-white py-12 text-center px-6">
      <h2 className="text-2xl font-bold mb-4">Ready to Make Your City Smarter?</h2>
      <p className="mb-6 text-lg">Join the SCCD initiative and transform your urban management with AR-powered collaboration.</p>
      <button className="bg-white text-blue-600 px-6 py-3 rounded font-semibold hover:bg-gray-100 transition"
      onClick={() => navigate("/signup")}>
        Get Started
      </button>
    </section>
  );
};

export default CallToActionSection;

import { Link } from "react-router-dom";

const RequestButton = () => {
  return (
    <Link
      to="/request" 
      className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
    >
      Request Session
    </Link>
  );
};

export default RequestButton;

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/Auth"; // 

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useAuth(); // ✅ Use the context

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [loginError, setLoginError] = useState("");

  const validateEmail = (value: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/v2/users/loginUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // 🔒 Send cookies (for session/token)
        body: JSON.stringify({ email, password }),
      });

      let data = {};
      try {
        data = await response.json();
      } catch {
        console.warn("No JSON response body.");
      }

      if (response.ok) {
        const { userId, role } = data as any; // 👈 Adjust if your API structure differs
        if (userId && role) {
          setUser(userId, role); // ✅ Store in context
          console.log(userId, role);
          alert("Login successful!");
          navigate("/"); 
        } else {
          setLoginError("Unexpected response. Missing user data.");
        }
      } else {
        setLoginError((data as any).message || "Invalid credentials");
      }
    } catch (error) {
      console.error("Login error:", error);
      setLoginError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-6">Login</h2>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError("");
            }}
            placeholder="Email"
            required
            className="p-3 border border-gray-300 rounded-md"
          />
          {emailError && (
            <p className="text-sm text-red-500 -mt-2">{emailError}</p>
          )}

          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setLoginError("");
            }}
            placeholder="Password"
            required
            className="p-3 border border-gray-300 rounded-md"
          />

          {loginError && (
            <p className="text-sm text-red-500 -mt-2">{loginError}</p>
          )}

          <button
            type="submit"
            className="p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition cursor-pointer"
          >
            Login
          </button>
        </form>

        <p
          className="mt-3 text-sm text-blue-600 hover:underline cursor-pointer"
          onClick={() => navigate("/forgot-password")}
        >
          Forgot Password?
        </p>

        <p className="mt-5 text-sm">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Sign up
          </Link>
        </p>

        <div className="mt-6 text-xs text-gray-400">
          © {new Date().getFullYear()} BridgeSkills | All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Login;

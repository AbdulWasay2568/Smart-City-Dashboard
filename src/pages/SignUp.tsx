import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    contact: "",
    agreed: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type } = target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? target.checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (formData.password !== formData.confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  try {
    const response = await fetch("http://localhost:5000/api/v2/users/registerUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        contact: formData.contact,
        role: "citizen"
      }),
    });

    let data = {};
    try {
      data = await response.json();
    } catch (error) {
      console.warn("No JSON response body.");
    }

    if (response.ok) {
      alert("Signup successful!");
      navigate("/login");
    } else {
      alert((data as any).message || "Signup failed");
    }
  } catch (error) {
    console.error("Signup error:", error);
    alert("An error occurred during signup.");
  }
};
  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();

  //   if (formData.password !== formData.confirmPassword) {
  //     alert("Passwords do not match!");
  //     return;
  //   }

  //   try {
  //     const response = await fetch("http://localhost:5000/api/v2/users/registerUser", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         name: formData.name,
  //         email: formData.email,
  //         password: formData.password,
  //         contact: formData.contact,
  //       }),
  //     });

  //     const data = await response.json();

  //     if (response.ok) {
  //       alert("Signup successful!");
  //       navigate("/login");
  //     } else {
  //       alert(data.message || "Signup failed");
  //     }
  //   } catch (error) {
  //     console.error("Signup error:", error);
  //     alert("An error occurred during signup.");
  //   }
  // };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-6">Signup</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            type="text"
            placeholder="Full Name"
            required
            className="p-3 border border-gray-300 rounded-md"
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="Email"
            required
            className="p-3 border border-gray-300 rounded-md"
          />
          <input
            name="password"
            value={formData.password}
            onChange={handleChange}
            type="password"
            placeholder="Password"
            required
            className="p-3 border border-gray-300 rounded-md"
          />
          <input
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            type="password"
            placeholder="Confirm Password"
            required
            className="p-3 border border-gray-300 rounded-md"
          />
          <input
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            type="tel"
            placeholder="Contact Number"
            required
            className="p-3 border border-gray-300 rounded-md"
          />

          <div className="text-left">
            <label className="text-sm">
              <input
                name="agreed"
                type="checkbox"
                checked={formData.agreed}
                onChange={handleChange}
                required
                className="mr-2"
              />
              I agree to the Terms and Conditions
            </label>
          </div>
          <button
            type="submit"
            className="p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition cursor-pointer"
          >
            Sign up
          </button>
        </form>
        <p className="mt-5 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;

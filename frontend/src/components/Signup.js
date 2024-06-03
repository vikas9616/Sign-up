import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    termsAccepted: false,
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!formData.termsAccepted) {
      setError("You must accept the terms and conditions");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const res = await axios.post("/api/users/signup", formData);
      login(res.data);
      setSuccess("Signup successful! A welcome email has been sent.");
      // Simulate sending welcome email
      console.log(`Simulated email: Welcome ${formData.username}!`);
      setTimeout(() => {
        navigate("/posts");
      }, 2000); // Redirect after 2 seconds
    } catch (err) {
      setError(err.response.data.message || "An error occurred");
    }
  };

  return (
    <div className="mx-auto container p-4">
      <div className="mx-auto p-5 w-full max-w-sm rounded bg-slate-300">
        <div className="mx-auto">
          <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
          {error && <p className="text-red-500">{error}</p>}
          {success && <p className="text-green-500">{success}</p>}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
              required
              className="mb-2 p-2 border h-full w-full outline-none"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="mb-2 p-2 border h-full w-full outline-none"
            />
            <div className="relative mb-2">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                required
                className="p-2 border h-full w-full outline-none"
              />
              {formData.password && (
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-slate-900 absolute inset-y-0 right-1 p-2 focus:outline-none"
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </button>
              )}
            </div>
            <div className="relative mb-2">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                required
                className="p-2 border h-full w-full outline-none"
              />
              {formData.confirmPassword && (
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="text-slate-900 absolute inset-y-0 right-1 p-2 focus:outline-none"
                >
                  {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
                </button>
              )}
            </div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="mb-2 p-2 border h-full w-full outline-none"
            />
            <div className="mb-2 mt-2">
              <input
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="termsAccepted">
                I accept the terms and conditions
              </label>
            </div>
            <button
              type="submit"
              className="bg-blue-500 mt-2 mb-2 p-2 rounded h-full w-1/2 outline-none"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;

import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import LoginVectorImage from "../assets/login.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); 

    try {
      const response = await axios.post("https://portbackend-it4o.onrender.com/login", {
        email,
        password,
      });

      // Handle successful login (e.g., save token, redirect to dashboard)
      console.log(response.data); // Adjust according to your response structure
      navigate("/dashboard"); // Redirect to the dashboard on success
    } catch (error) {
      console.error("Login error:", error.response ? error.response.data : error.message);
      // Optionally, show an error message to the user
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center h-screen bg-[#0a0b1e] p-6 overflow-hidden">
      {/* Left Side - Image */}
      <div className="hidden lg:block lg:w-1/2 p-6">
        <img
          src={LoginVectorImage}
          alt="Login illustration"
          className="w-full h-auto"
        />
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 bg-[#1e1e2f] p-8 lg:p-12 rounded-lg shadow-lg space-y-8 animate-fade-in-up max-h-screen overflow-auto">
        {/* Title */}
        <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-4">
          Welcome Back
        </h2>
        <p className="text-gray-400 text-center mb-6">
          Please enter your credentials to log in to your dashboard.
        </p>

        {/* Login Form */}
        <form className="space-y-6" onSubmit={handleLogin}>
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 bg-[#2b2b3d] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#5B4EFF] focus:border-transparent"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-400 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 bg-[#2b2b3d] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#5B4EFF] focus:border-transparent"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Login Button */}
          <div>
            <button
              type="submit"
              className="w-full p-3 bg-gradient-to-r from-[#5B4EFF] to-[#32F6FF] text-white rounded-md font-bold hover:opacity-90 transition-opacity duration-300"
            >
              Log In
            </button>
          </div>
        </form>

        {/* Google Login */}
        <div className="text-center">
          <p className="text-gray-400 mb-4">Or log in with:</p>
          <button
            className="flex items-center justify-center space-x-2 p-3 w-full bg-[#4285F4] text-white rounded-md hover:opacity-90 transition-opacity duration-300"
          >
            <FaGoogle className="text-lg" />
            <span>Login with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;

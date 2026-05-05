import React from "react";
import signinImage from "../assets/signup.png";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="min-h-screen grid md:grid-cols-2">
      
 
      <div className="flex flex-col justify-center px-8 md:px-16 ml-20">
        

        <div className="flex items-center gap-2 mb-10">
          <img src={logo} alt="logo" className="w-10" />
          <p className="text-2xl font-semibold">
            Meet
            <span className="bg-gradient-to-r from-indigo-500 to-blue-500 text-transparent bg-clip-text">
              Pro
            </span>
          </p>
        </div>


        <h2 className="text-4xl md:text-5xl font-bold">
          Welcome Back
        </h2>
        <p className="text-gray-500 mt-2 mb-8">
          Sign in to continue to MeetPro
        </p>


        <div className="max-w-md space-y-5">
          
       
          <div>
            <label className="text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>


          <div>
            <label className="text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>
      
          <div className="text-right">
            <a href="#" className="text-sm text-indigo-600 hover:underline">
              Forgot password?
            </a>
          </div>


          <button className="w-full py-3 bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-lg hover:opacity-90 transition shadow-md">
            Sign in
          </button>
        </div>

 
        <p className="mt-6 text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-indigo-600 font-semibold hover:underline">
            Sign up
          </Link>
        </p>
      </div>

  
      <div className="hidden md:flex items-center justify-center bg-gray-50">
        <img
          src={signinImage}
          alt="signin visual"
          className="max-w-md w-full h-180  rounded-xl shadow-lg"
        />
      </div>

    </div>
  );
};

export default LoginPage;
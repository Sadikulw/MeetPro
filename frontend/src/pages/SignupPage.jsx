import React from "react";
import signupPageImage from "../assets/signpup-page.png";
import logo from "../assets/logo.png";

const SignupPage = () => {
  return (
    <div className="min-h-screen grid md:grid-cols-2">
      <div className="hidden md:flex items-center justify-center bg-gray-50">
        <img
          src={signupPageImage}
          alt="signup visual"
          className="w-full  h-auto rounded-2xl shadow-xl"
        />
      </div>

      <div className="flex flex-col justify-center px-6 md:px-16">
        <div className="flex items-center gap-2 mb-6">
          <img src={logo} alt="logo" className="w-10" />
          <p className="text-2xl font-semibold">
            Meet
            <span className="bg-gradient-to-r from-indigo-500 to-blue-500 text-transparent bg-clip-text">
              Pro
            </span>
          </p>
        </div>

        <h2 className="text-4xl font-bold">Create Account</h2>
        <p className="text-gray-500 mt-1 mb-8">
          Start your journey with MeetPro
        </p>

        <div className="max-w-lg grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <input
              type="text"
              placeholder="@john"
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>

          <div className="flex flex-col md:col-span-2">
            <label className="text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="john@email.com"
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>

          <div className="flex flex-col md:col-span-2">
            <label className="text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="text"
              placeholder="••••••••"
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>
        </div>

        <button className="mt-6 max-w-lg w-full py-3 bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-lg hover:opacity-90 transition shadow-md">
          Create Account
        </button>

        <p className="mt-4 text-sm text-gray-600">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-indigo-600 font-semibold hover:underline"
          >
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;

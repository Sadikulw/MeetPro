import React from "react";
import logo from "../assets/logo.png";
import user1 from "../assets/user1.jpg";
import user2 from "../assets/user2.webp";
import user3 from "../assets/user3.webp";
import mainImage from "../assets/main.png";

import { HiVideoCamera } from "react-icons/hi2";
import { FiUsers } from "react-icons/fi";
import {
  HiOutlineUserGroup,
  HiOutlineShieldCheck,
  HiOutlineGlobeAlt,
} from "react-icons/hi";
import { Link } from "react-router-dom";
const LandingPage = () => {
  return (
    <>
      <nav className="h-[10vh] border-b border-black/10 flex items-center sticky top-0 backdrop-blur-md bg-white/70 z-50">
        <div className="max-w-7xl mx-auto w-full flex justify-between items-center ">
          <div className="flex items-center gap-2">
            <img src={logo} alt="logo" className="w-10" />
            <p className="text-xl font-semibold">
              Meet
              <span className="bg-gradient-to-r from-indigo-500 to-blue-500 text-transparent bg-clip-text">
                Pro
              </span>
            </p>
          </div>

          <div className="flex gap-3 items-center">
            <Link
              to="/login"
              className="px-5 py-2 rounded-xl border border-gray-200 hover:border-gray-400 transition cursor-pointer inline-block"
            >
              Login
            </Link>
            <Link to="signup" className="px-5 py-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition cursor-pointer">
              Signup
            </Link>

            <Link to="" className="hidden md:block px-5 py-2 rounded-xl border border-gray-200 text-indigo-600 hover:border-gray-400 transition cursor-pointer">
              Join as Guest
            </Link>
          </div>
        </div>
      </nav>

      <section className="min-h-[90vh] grid grid-cols-1 md:grid-cols-2 bg-gradient-to-br from-[#f8f9ff] to-[#eef2ff]">
        <div className="flex flex-col justify-center px-6 md:px-12 py-12">
          <div className="mb-6">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-indigo-100 text-indigo-600 text-sm font-medium">
              <span>HD Video Calls</span>
              <span className="opacity-40">•</span>
              <span>Secure</span>
              <span className="opacity-40">•</span>
              <span>Reliable</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold leading-[1.2] tracking-tight text-gray-900 max-w-xl">
            Connect{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-blue-500 text-transparent bg-clip-text">
              face to face
            </span>
            <br />
            from anywhere
            <br />
            with{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-blue-500 text-transparent bg-clip-text">
              Meet Pro
            </span>
          </h1>

          <p className="mt-5 text-gray-500 text-lg max-w-lg">
            Experience high-quality video calls, crystal clear audio, and
            seamless connections with anyone, anywhere.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link  to="/login" className="flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition duration-200 hover:scale-105 shadow cursor-pointer">
              <HiVideoCamera /> Get Started
            </Link>

            <Link to="" className="flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-200 hover:border-gray-400 bg-white transition duration-200 hover:scale-105 cursor-pointer">
              <FiUsers /> Join as Guest
            </Link>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <div className="flex -space-x-3">
              <img
                src={user1}
                className="w-8 h-8 rounded-full border-2 border-white"
              />
              <img
                src={user2}
                className="w-8 h-8 rounded-full border-2 border-white"
              />
              <img
                src={user3}
                className="w-8 h-8 rounded-full border-2 border-white"
              />
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white border text-sm">
                +
              </div>
            </div>

            <div className="text-sm text-gray-600">
              Trusted by thousands of users
              <div className="text-yellow-400">
                ★★★★★ <span className="text-gray-700 ml-1">4.8/5</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center px-6 md:px-12 py-10">
          <img
            src={mainImage}
            alt="main"
            className="w-full max-w-md md:max-w-lg object-contain hover:scale-107 transition duration-300  cursor-pointer "
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10 w-full max-w-xl">
            <div className="flex items-start gap-3">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-100">
                <HiOutlineUserGroup className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-md font-semibold text-gray-800">
                  HD Quality
                </h3>
                <p className="text-gray-500 text-sm">
                  Crystal clear video & audio
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100">
                <HiOutlineShieldCheck className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-md font-semibold text-gray-800">
                  Secure Calls
                </h3>
                <p className="text-gray-500 text-sm">End-to-end encryption</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100">
                <HiOutlineGlobeAlt className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-md font-semibold text-gray-800">
                  Anywhere
                </h3>
                <p className="text-gray-500 text-sm">Connect from any device</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;

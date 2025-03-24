import React from "react";
import { Link } from "react-router-dom";

const Sign = () => {
  return (
    <div className="flex items-start justify-center bg-gray-100 p-4 min-h-screen">
      <div className="w-full max-w-sm bg-transparent p-6 rounded-lg md:max-w-md lg:max-w-lg mt-10 md:mt-20">
        <h2 className="text-2xl font-bold text-gray-900 text-center">
          Sign in to your <span className="text-blue-600">PopX</span> account
        </h2>
        <p className="text-gray-500 text-center mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <form className="mt-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter email address"
              className="mt-1 w-full px-3 py-2 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="mt-1 w-full px-3 py-2 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <Link to="/Acount">
            <button className="mt-6 w-full bg-[#CBCBCB] text-white py-2 rounded-md ">
              Login
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Sign;

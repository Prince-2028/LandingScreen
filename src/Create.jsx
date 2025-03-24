import React from "react"; 
import { Link } from "react-router-dom";

const Create = () => {
  return (

      
   
    <div className="w-full max-w-sm md:max-w-md lg:max-w-lg p-6 md:p-8 rounded-lg shadow-none">
      <h2 className="text-xl font-bold text-gray-900 mb-4">
        Create your <span className="text-blue-600">PopX</span> account
      </h2>
      <form>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-semibold mb-1"
            htmlFor="full_name"
          >
            Full Name*
          </label>
          <input
            type="text"
            id="full_name"
            placeholder="Enter your full name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-semibold mb-1"
            htmlFor="phone"
          >
            Phone Number*
          </label>
          <input
            type="tel"
            id="phone"
            placeholder="Enter your phone number"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-semibold mb-1"
            htmlFor="email"
          >
            Email Address*
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-semibold mb-1"
            htmlFor="password"
          >
            Password*
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-semibold mb-1"
            htmlFor="company"
          >
            Company Name
          </label>
          <input
            type="text"
            id="company"
            placeholder="Enter your company name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2">
            Are you an Agency?
          </label>
          <div className="flex items-center gap-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="agency"
                className="form-radio text-blue-500"
                defaultChecked=""
              />
              <span className="ml-2">Yes</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="agency"
                className="form-radio text-blue-500"
              />
              <span className="ml-2">No</span>
            </label>
          </div>
        </div>
        <Link to="/Acount">
        <button className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition">
          Create Account
        </button>
        </Link>
      </form>
    </div>
    
  );
};

export default Create;

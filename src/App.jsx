import React from "react";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 px-4">
      {/* Heading Section */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Welcome to PopX</h1>
        <p className="text-gray-600 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* Desktop Buttons - Hidden on Mobile */}
      <div className="hidden md:flex flex-row gap-4">
        <Link to="/Create">
          <button
            type="button"
            className="text-white bg-[#6C25FF] text-center font-medium text-[16px] rounded-lg px-5 py-2.5 focus:ring-4 focus:outline-none w-auto"
          >
            Create Account
          </button>
        </Link>

        <Link to="/sign">
          <button
            type="button"
            className="bg-[#6C25FF4B] text-center font-medium text-[16px] rounded-lg px-5 py-2.5 focus:ring-4 focus:outline-none w-auto"
          >
            Already Registered? Login
          </button>
        </Link>
      </div>

      {/* Mobile-Specific Sticky Buttons - Hidden on Desktop */}
      <div className="fixed bottom-0 left-0 w-full bg-white p-4 flex flex-col gap-3 md:hidden">
        <Link to="/Create">
          <button
            type="button"
            className="text-white bg-[#6C25FF] text-center font-medium text-[16px] rounded-lg px-5 py-2.5 w-full"
          >
            Create Account
          </button>
        </Link>

        <Link to="/sign">
          <button
            type="button"
            className="bg-[#6C25FF4B] text-center font-medium text-[16px] rounded-lg px-5 py-2.5 w-full"
          >
            Already Registered? Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default App;

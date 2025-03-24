import React from "react";
import imgscol from './assets/img.png';
import settingsIcon from './assets/Group15.svg'; // ⚙️ की जगह इमेज लगाई

const Account = () => {
  return (
    <div className="flex items-start justify-center min-h-screen pt-10 md:pt-20">
      <div className="w-full max-w-md md:max-w-lg  p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <img src={imgscol} alt="Profile" className="w-16 h-16 rounded-full" />
          
            <img 
              src={settingsIcon} 
              alt="Settings" 
              className="absolute bottom-0 right-0 w-6 h-6 rounded-full border border-white"
            />
          </div>
          <div>
            <h3 className="text-lg font-medium">Marry Doe</h3>
            <p className="text-gray-500">Marry@gmail.com</p>
          </div>
        </div>
        <p className="text-gray-600 mt-4 text-sm">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat.
        </p>
      </div>
    </div>
  );
};

export default Account;

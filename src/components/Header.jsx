import React from 'react';
import Incline from './../assets/inclined.jpeg'

const Header = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-gray-900 text-white p-8">
      {/* Left Section - Text Content */}
      <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
          Nitin Chauhan – Full Stack Developer
        </h1>
        <p className="text-lg text-gray-300 max-w-xl mx-auto lg:mx-0">
          Building scalable web applications and delivering hands-on training in data science and software engineering.
        </p>
        <div className="flex justify-center lg:justify-start gap-4">
          <button className="px-6 py-2 rounded-lg font-semibold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-black hover:scale-105 transition">
            Contact Me
          </button>
          <button className="px-6 py-2 rounded-lg font-semibold bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 text-black hover:scale-105 transition">
            LinkedIn
          </button>
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
        <img style={{ width: '600px', height: '600px'}}
          // src={}
          alt="Nitin Chauhan"
          className="rounded-2xl shadow-lg max-w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Header;

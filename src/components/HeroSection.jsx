import React from 'react';

const HeroSection = () => {
  return (
    <div className="flex flex-col  lg:flex-row items-center justify-center min-h-screen bg-[#0e0d1b] text-white px-6 py-16">
      {/* Left Section - Text Content */}
      <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-pink-400 to-orange-400 text-transparent bg-clip-text leading-tight">
          Nitin Chauhan – Software Engineer <br />
          and Data Scientist
        </h1>
        <p className="text-lg text-gray-300 max-w-xl mx-auto lg:mx-0">
          Building scalable web applications and delivering hands-on training in data science and software engineering.
        </p>

        <div className="flex justify-center lg:justify-start gap-4 flex-wrap">
          <a
            href="#contact"
            className="px-6 py-2 rounded-lg font-semibold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-black hover:scale-105 transition"
          >
            Contact Me
          </a>
          <a
            href="https://www.linkedin.com/in/nitzzchauhan/"
            target="_blank"
            className="px-6 py-2 rounded-lg font-semibold bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 text-black hover:scale-105 transition"
          >
            LinkedIn
          </a>
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="lg:w-1/2 mt-0 lg:mt-0 flex justify-center">
        <img
          src="/images/nn.png" // <-- change to actual image path in public folder
          alt="Nitin Chauhan"
          className="rounded-full shadow-lg w-[250px] md:w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] object-cover md:mt-5"
        />
      </div>
    </div>
  );
};

export default HeroSection;

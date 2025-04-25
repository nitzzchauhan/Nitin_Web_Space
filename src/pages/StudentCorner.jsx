// src/pages/StudentCorner.jsx
import React from "react";

const StudentCorner = () => {
  return (
    <div className="min-h-screen bg-[#0e0d1b] text-white px-6 py-20">
      <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-pink-400 to-orange-400 text-transparent bg-clip-text">
        🎓 Student Corner
      </h1>
      <p className="text-lg text-gray-300 max-w-2xl">
        Welcome to the Student Corner – a hub for resources, notes, project links, and useful guides to support your learning journey. 🚀
      </p>

      <div className="mt-8 space-y-4">
        <a
          href="/resources/DSA-guide.pdf"
          className="block  bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 text-black px-2 py-3 rounded-xl font-semibold shadow-lg hover:scale-90 transition"
          download
        >
          📘 Download DSA Guide
        </a>
        <a
          href="https://github.com/nitzzchauhan/Projects/tree/main/JS/interview%20question"
          className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-black px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-90 transition"
          target="_blank"
        >
          🔗 JavaScript Interview Questions
        </a>
        <a
          href="/resources/portfolio-template.zip"
          className="block bg-gradient-to-r from-green-300 via-yellow-300 to-red-300 text-black px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-90 transition"
          download
        >
          🎨 Portfolio Template
        </a>
      </div>
    </div>
  );
};

export default StudentCorner;

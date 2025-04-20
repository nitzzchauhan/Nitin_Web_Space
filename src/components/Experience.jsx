import React from 'react';
import { FaCode, FaDatabase, FaLaptopCode, FaServer } from 'react-icons/fa';

const Experience = () => {
  return (
    <div className="bg-[#0F172A] text-white py-16 px-6 md:px-20 space-y-24">

      {/* Technical Skills */}
      <section>
        <h2 className="text-4xl font-semibold mb-10 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
          Technical Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-gray-200">
          <div>
            <FaCode className="text-3xl mx-auto mb-2 text-pink-400" />
            <h3 className="font-semibold">Languages</h3>
            <p className="text-sm">JavaScript, Python, SQL</p>
          </div>
          <div>
            <FaLaptopCode className="text-3xl mx-auto mb-2 text-pink-400" />
            <h3 className="font-semibold">Frontend</h3>
            <p className="text-sm">React.js, HTML, CSS</p>
          </div>
          <div>
            <FaServer className="text-3xl mx-auto mb-2 text-pink-400" />
            <h3 className="font-semibold">Backend</h3>
            <p className="text-sm">Node.js, Express.js, Flask, Django</p>
          </div>
          <div>
            <FaDatabase className="text-3xl mx-auto mb-2 text-pink-400" />
            <h3 className="font-semibold">Databases</h3>
            <p className="text-sm">MongoDB, MySQL</p>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section>
        <h2 className="text-4xl font-semibold mb-10 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
          Professional Experience
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-gray-300">
          <div className="bg-[#1E293B] p-6 rounded-lg">
            <h4 className="font-semibold text-white mb-2">IT Trainer, Madrid Software</h4>
            <p>Delivered modules on authentication and full-stack development (Oct 2021 - Jun 2024).</p>
          </div>
          <div className="bg-[#1E293B] p-6 rounded-lg">
            <h4 className="font-semibold text-white mb-2">Technical Trainer, CETPA Infotech</h4>
            <p>Trained professionals in MERN stack and React.js, improving proficiency by 20% (Jul 2024 - Present).</p>
          </div>
          <div className="bg-[#1E293B] p-6 rounded-lg">
            <h4 className="font-semibold text-white mb-2">Guest Trainer</h4>
            <p>Led workshops at RPS Group of Institutions and IMS Engineering College in 2024.</p>
          </div>
        </div>
      </section>

      {/* Highlighted Projects */}
      <section>
        <h2 className="text-4xl font-semibold mb-10 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
          Highlighted Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-gray-300">
          <div className="bg-[#1E293B] p-6 rounded-lg">
            <h4 className="font-semibold text-white mb-2">Backend with Authentication</h4>
            <p>Built secure MERN backend with JWT, Joi validation, and Morgan logging.</p>
          </div>
          <div className="bg-[#1E293B] p-6 rounded-lg">
            <h4 className="font-semibold text-white mb-2">Music Application</h4>
            <p>Developed web app for browsing and playing music tracks using Flask and SQL.</p>
          </div>
          <div className="bg-[#1E293B] p-6 rounded-lg">
            <h4 className="font-semibold text-white mb-2">Django SocialBook</h4>
            <p>Created a social networking platform with posts, likes, comments, and profiles.</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Experience;

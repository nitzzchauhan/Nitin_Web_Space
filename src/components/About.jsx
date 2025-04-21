import React from 'react';

const About = () => {
  return (
    <section id='about' className="bg-[#12032B] text-white py-16 px-6 md:px-20">
      <h2 className="text-4xl md:text-5xl font-semibold mb-12 text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
        Professional Summary
      </h2>

      <div className="grid md:grid-cols-2 gap-12">
        {/* About Me Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-blue-400 to-pink-400 text-transparent bg-clip-text">
            About Me
          </h3>
          <p className="text-lg leading-relaxed text-gray-200">
            Full Stack Developer with expertise in data science, backend engineering, and secure authentication. Passionate about solving real-world problems using technology.
          </p>
        </div>

        {/* Key Qualities Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-blue-400 to-pink-400 text-transparent bg-clip-text">
            Key Qualities
          </h3>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-200">
            <li>Quick learner</li>
            <li>Hands-on trainer</li>
            <li>Efficient problem solver</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;

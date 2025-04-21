import React from "react";
import {
  Bolt,
  Brain,
  Flame,
  Gamepad2,
} from "lucide-react"; // lucide icons

const educationData = [
  {
    institute: "IIT Madras",
    degree: "B.S. Data Science & Applications",
    location: "Chennai",
    gpa: "6.9",
    year: "Expected: May 2026",
  },
  {
    institute: "Jiwaji University",
    degree: "BBA (Marketing)",
    location: "Gwalior",
    gpa: "6.6",
    year: "Graduated: May 2017",
  },
  {
    institute: "Central Academy",
    degree: "12th Grade (2014): 86% \n10th Grade (2012): 8.4 CGPA",
    location: "",
    gpa: "",
    year: "",
  },
];

const interests = [
  {
    title: "Quick Learner",
    description: "Adapts rapidly to new technologies and challenges.",
    icon: <Bolt className="h-6 w-6" />,
  },
  {
    title: "Chess",
    description: "Enjoys strategic thinking and competitive play.",
    icon: <Brain className="h-6 w-6" />,
  },
  {
    title: "Self-Motivated & Hardworking",
    description: "Consistently delivers high-quality results.",
    icon: <Flame className="h-6 w-6" />,
  },
  {
    title: "Cricket",
    description: "Team player with a passion for sports.",
    icon: <Gamepad2 className="h-6 w-6" />,
  },
];

const EducationAndInterests = () => {
  return (
    <section id="education" className="bg-[#1a1f2e] text-white py-16 px-6 md:px-20">
      {/* Education Section */}
      <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
        <img
          src="/images/college-campus.jpg" // Update this path
          alt="Campus"
          className="rounded-lg shadow-md w-full max-w-md"
        />
        <div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-pink-400 text-transparent bg-clip-text mb-6">
            Education
          </h2>
          <table className="w-full border border-gray-700 text-left">
            <tbody>
              {educationData.map((edu, i) => (
                <tr key={i} className="border-b border-gray-700">
                  <td className="py-2 font-bold">{edu.institute}</td>
                  <td className="py-2">{edu.degree}</td>
                  <td className="py-2">{edu.location}</td>
                  <td className="py-2">{edu.gpa && `GPA: ${edu.gpa}`}</td>
                  <td className="py-2">{edu.year}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Strengths & Interests Section */}
      <div id="strengths">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-orange-300 text-transparent bg-clip-text mb-10 text-center">
          Strengths & Interests
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {interests.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-[#2c3347] p-6 rounded-2xl shadow-md"
            >
              <div className="bg-[#3e4560] p-3 rounded-full text-white">
                {item.icon}
              </div>
              <div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-sm text-gray-300">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationAndInterests;

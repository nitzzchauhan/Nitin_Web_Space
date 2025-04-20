import React from "react";

const projects = [
  {
    title: "Auth Backend",
    image: "/images/auth-backend.png", // Update path
    github: "https://github.com/your-auth-repo",
    demo: null,
  },
  {
    title: "Music Application",
    image: "/images/music-app.png", // Update path
    github: "https://github.com/your-music-repo",
    demo: null,
  },
  {
    title: "Django SocialBook",
    image: "/images/django-socialbook.png", // Update path
    github: "https://github.com/your-socialbook-repo",
    demo: "https://your-demo-video-link.com",
  },
];

const Projects = () => {
  return (
    <section className="bg-[#0F172A] text-white py-16 px-6 md:px-20">
      <h2 className="text-4xl md:text-5xl font-bold text-center pb-12 bg-gradient-to-r from-blue-300 to-pink-400 text-transparent bg-clip-text">
        Project Links & Demo
      </h2>

      <div className="flex flex-col md:flex-row gap-12 justify-center items-center">
        {projects.map((project, index) => (
          <div key={index} className="text-center">
            <img
              src={project.image}
              alt={project.title}
              className="w-[300px] h-[200px] object-cover rounded-md mx-auto shadow-lg hover:scale-105 transition"
            />
            <h3 className="mt-4 text-xl font-semibold">{project.title}</h3>
            <div className="mt-2 text-pink-300 font-bold underline underline-offset-2">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                GitHub Repo
              </a>
              {project.demo && (
                <>
                  <span className="text-white px-2">|</span>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-blue-400">
                    Demo Video
                  </a>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

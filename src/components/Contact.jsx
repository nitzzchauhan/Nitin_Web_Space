import { Mail, Phone, Linkedin, Github, FileDown } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-[#0e0d1b] text-white text-center">
      <h2 className="text-4xl font-bold mb-10 bg-gradient-to-r from-blue-400 via-pink-400 to-orange-400 text-transparent bg-clip-text">
        Contact Me
      </h2>

      <div className="max-w-xl mx-auto space-y-6">
        <p className="flex items-center justify-center gap-2 text-lg text-gray-300">
          <Mail className="w-5 h-5 text-pink-400" />
          <a
            href="mailto:nitinkeshavchauhan@gmail.com"
            className="hover:text-pink-300 underline"
          >
            nitinkeshavchauhan@gmail.com
          </a>
        </p>

        <p className="flex items-center justify-center gap-2 text-lg text-gray-300">
          <Phone className="w-5 h-5 text-blue-400" />
          +91-7678276904
        </p>

        <div className="flex justify-center gap-6 pt-6">
          <a
            href="https://www.linkedin.com/in/nitzzchauhan/"
            target="_blank"
            className="flex items-center gap-2 text-blue-400 hover:text-white transition"
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </a>
          <a
            href="https://github.com/nitzzchauhan"
            target="_blank"
            className="flex items-center gap-2 text-pink-400 hover:text-white transition"
          >
            <Github className="w-5 h-5" />
            GitHub
          </a>
        </div>

        <div className="pt-10">
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full text-white shadow-md hover:from-pink-600 hover:to-blue-600 transition"
          >
            <FileDown className="w-5 h-5" />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
